const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);
const fs = require("fs");
const sha1 = require(`${basePath}/node_modules/sha1`);
const { createCanvas, loadImage } = require(`${basePath}/node_modules/canvas`);
const buildDir = `${basePath}/build`;
const layersDir = `${basePath}/layers`;
const TOTALFRAMES = 7;
const {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
} = require(`${basePath}/src/config.js`);
const canvas = createCanvas(format.width, format.height);
const ctx = canvas.getContext("2d");
ctx.imageSmoothingEnabled = format.smoothing;
var metadataList = [];
var attributesList = [];
var dnaList = new Set();
const DNA_DELIMITER = "*";
const HashlipsGiffer = require(`${basePath}/modules/HashlipsGiffer.js`);

let hashlipsGiffer = null;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

const buildSetup = () => {
  if (fs.existsSync(buildDir)) {
    fs.rmdirSync(buildDir, { recursive: true });
  }
  fs.mkdirSync(buildDir);
  fs.mkdirSync(`${buildDir}/json`);
  fs.mkdirSync(`${buildDir}/images`);
  if (gif.export) {
    fs.mkdirSync(`${buildDir}/gifs`);
  }
};

const getRarityWeight = (_str) => {
    // console.log("rarity: ", _str)

  let nameWithoutExtension = _str.slice(0, -4);
  var nameWithoutWeight = Number(
    nameWithoutExtension.split(rarityDelimiter).pop()
  );
  if (isNaN(nameWithoutWeight)) {
    nameWithoutWeight = 1;
  }
  return nameWithoutWeight;
};

const cleanDna = (_str) => {
  const withoutOptions = removeQueryStrings(_str);
  var dna = Number(withoutOptions.split(":").shift());
  return dna;
};

const cleanName = (_str) => {
//   console.log("cleanname: ", _str)
  let nameWithoutExtension = _str.slice(0, -4);
  var nameWithoutWeight = nameWithoutExtension.split(rarityDelimiter).shift();
  return nameWithoutWeight;
};

const getElements = (path) => {
    // console.log(fs
    //     .readdirSync(path))
    var content = fs.readdirSync(path).filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    var attributesTemp = [];
    var attributes = [];
    var innerContent = [];
    var weight = 0;
    // console.log("content: ", content);
    for (let i = 0; i < content.length; i++) {
        // attributes.push(fs.readdirSync(path + "/" + content[i]));
        innerContent = fs.readdirSync(path + "/" + content[i]);
        // console.log('here  ', i, content[i], innerContent);
        
        for (let j = 0; j < innerContent.length; j++) {
            // console.log('here  ', innerContent[j]);

            var name = cleanName(innerContent[j])
            console.log("I: ", content[i])

            // weight = 
            if (name[0] != "."){
              attributesTemp.push({
                  id: i + 1,
                  name: name,
                  filename: content[i],// + "/" + innerContent[j],
                  path: content[i] + "/" + innerContent[j],
                  weight: 1//getRarityWeight(i),
                  // rarity: addRarity(innerContent[j]),
              });
            }
            // console.log('fileName: ', content[i] + "/" + innerContent[j], );
        }

        attributes.push(attributesTemp);
        attributesTemp = [];

        // console.log('here: ', path, fs.readdirSync(path + "/" + content[i]));
    }
    // console.log("ATTRIBUTES: ", attributes)
    return attributes
};

const layersSetup = (layersOrder) => {
  const layers = layersOrder.map((layerObj, index) => ({
    id: index,
    elements: getElements(`${layersDir}/${layerObj.name}/`),
    name:
      layerObj.options?.["displayName"] != undefined
        ? layerObj.options?.["displayName"]
        : layerObj.name,
    blend: 
      layerObj.options?.["blend"] != undefined
        ? layerObj.options?.["blend"]
        : "source-over",
    opacity:
      layerObj.options?.["opacity"] != undefined
        ? layerObj.options?.["opacity"]
        : 1,
    bypassDNA:
      layerObj.options?.["bypassDNA"] !== undefined
        ? layerObj.options?.["bypassDNA"]
        : false,
  }));
  // console.log(layersOrder, layers);
  return layers;
};

const saveImage = (_editionCount,_i) => {
  fs.promises.mkdir(`${buildDir}/images/${_editionCount}`, { recursive: true })
  fs.writeFileSync(
    `${buildDir}/images/${_editionCount}/${_i}.png`,
    canvas.toBuffer("image/png")
  );
};

const genColor = () => {
  let hue = Math.floor(Math.random() * 360);
  let pastel = `hsl(${hue}, 100%, ${background.brightness})`;
  return pastel;
};

const drawBackground = () => {
  ctx.fillStyle = background.static ? background.default : genColor();
  ctx.fillRect(0, 0, format.width, format.height);
};

const addMetadata = (_dna, _edition) => {
  let dateTime = Date.now();
  let tempMetadata = {
    name: `${namePrefix} #${_edition}`,
    description: description,
    image: `${baseUri}/${_edition}.png`,
    dna: sha1(_dna),
    edition: _edition,
    date: dateTime,
    ...extraMetadata,
    attributes: attributesList,
    compiler: "HashLips Art Engine",
  };
  if (network == NETWORK.sol) {
    tempMetadata = {
      //Added metadata for solana
      name: tempMetadata.name,
      symbol: solanaMetadata.symbol,
      description: tempMetadata.description,
      //Added metadata for solana
      seller_fee_basis_points: solanaMetadata.seller_fee_basis_points,
      image: `${_edition}.png`,
      //Added metadata for solana
      external_url: solanaMetadata.external_url,
      edition: _edition,
      ...extraMetadata,
      attributes: tempMetadata.attributes,
      properties: {
        files: [
          {
            uri: `${_edition}.png`,
            type: "image/png",
          },
        ],
        category: "image",
        creators: solanaMetadata.creators,
      },
    };
  }
  metadataList.push(tempMetadata);
  attributesList = [];
};

const addAttributes = (_element) => {
  let selectedElement = _element.layer.selectedElement;
  // console.log("element: ",_element)
  attributesList.push({
    trait_type: _element.layer.name,
    value: selectedElement.filename,
  });
};

const loadLayerImg = async (_layer, folder, i) => {
  
  try {
    return new Promise(async (resolve) => {
      // if (i>=_layer.selectedElement.length){
      //   i=_layer.selectedElement.length
      // }

      const image = await loadImage(`/Users/alanlu/Desktop/elonwoofNFT/gif_stack/hashlips_art_engine_modified/layers/${folder}/${_layer.selectedElement[i].path}`);
      // console.log('here', _layer, i );
      _layer = JSON.parse(JSON.stringify(_layer));
      _layer.selectedElement = _layer.selectedElement[i]
      // console.log('after', _layer);
      resolve({ layer: _layer, loadedImage: image });
    })
  } catch (error) {
    console.error("Error loading image:", error);
  }
};

const addText = (_sig, x, y, size) => {
  ctx.fillStyle = text.color;
  ctx.font = `${text.weight} ${size}pt ${text.family}`;
  ctx.textBaseline = text.baseline;
  ctx.textAlign = text.align;
  ctx.fillText(_sig, x, y);
};

const drawElement = (_renderObject, _index, _layersLen) => {
  ctx.globalAlpha = _renderObject.layer.opacity;
  ctx.globalCompositeOperation = _renderObject.layer.blend;
  
  text.only
    ? addText(
        `${_renderObject.layer.name}${text.spacer}${_renderObject.layer.selectedElement.name}`,
        text.xGap,
        text.yGap * (_index + 1),
        text.size
      )
    : ctx.drawImage(
        _renderObject.loadedImage,
        0,
        0,
        format.width,
        format.height
      );
  // console.log("render: ",_renderObject, _index, _layersLen, text.only);
  addAttributes(_renderObject);
};

const constructLayerToDna = (_dna = "", _layers = []) => {
  // console.log("_DNAA,_layers: ",_dna, _layers)
  let mappedDnaToLayers = _layers.map((layer, index) => {
  // console.log("cleandna: ", cleanDna(_dna.split(DNA_DELIMITER)[index]), index, layer.elements)
    let selectedElement = layer.elements.find(
      (e) => e[0].id == cleanDna(_dna.split(DNA_DELIMITER)[index])
    );

    return {
      name: layer.name,
      blend: layer.blend,
      opacity: layer.opacity,
      selectedElement: selectedElement,
    };
  });
  return mappedDnaToLayers;
};

/**
 * In some cases a DNA string may contain optional query parameters for options
 * such as bypassing the DNA isUnique check, this function filters out those
 * items without modifying the stored DNA.
 *
 * @param {String} _dna New DNA string
 * @returns new DNA string with any items that should be filtered, removed.
 */
const filterDNAOptions = (_dna) => {
  const dnaItems = _dna.split(DNA_DELIMITER);
  const filteredDNA = dnaItems.filter((element) => {
    const query = /(\?.*$)/;
    const querystring = query.exec(element);
    if (!querystring) {
      return true;
    }
    const options = querystring[1].split("&").reduce((r, setting) => {
      const keyPairs = setting.split("=");
      return { ...r, [keyPairs[0]]: keyPairs[1] };
    }, []);

    return options.bypassDNA;
  });

  return filteredDNA.join(DNA_DELIMITER);
};

/**
 * Cleaning function for DNA strings. When DNA strings include an option, it
 * is added to the filename with a ?setting=value query string. It needs to be
 * removed to properly access the file name before Drawing.
 *
 * @param {String} _dna The entire newDNA string
 * @returns Cleaned DNA string without querystring parameters.
 */
const removeQueryStrings = (_dna) => {
  const query = /(\?.*$)/;
  // console.log("_dna",_dna)
  return _dna.replace(query, "");
};

const isDnaUnique = (_DnaList = new Set(), _dna = "") => {
  const _filteredDNA = filterDNAOptions(_dna);
  return !_DnaList.has(_filteredDNA);
};

const createDna = (_layers) => {
  let randNum = [];
  _layers.forEach((layer) => {
    var totalWeight = 0;
    layer.elements.forEach((element) => {
    //   console.log("here ",element, element[0].weight);
      totalWeight += element[0].weight;
    });
    // number between 0 - totalWeight
    let random = Math.floor(Math.random() * totalWeight);
    // console.log(totalWeight)
    for (var i = 0; i < layer.elements.length; i++) {
      // subtract the current weight from the random weight until we reach a sub zero value.
      // console.log("element: ",random, layer.elements)
      random -= layer.elements[i][0].weight;
      if (random < 0) {
        // console.log('NEGATIVE', layer.elements[i][0].id, layer.elements[i][0].filename, layer.bypassDNA)
        return randNum.push(
          `${layer.elements[i][0].id}:${layer.elements[i][0].filename}${
            layer.bypassDNA ? "?bypassDNA=true" : ""
          }`
        );
      }
    }
  });
  // console.log('createdna: ',randNum.join(DNA_DELIMITER) )
  return randNum.join(DNA_DELIMITER);
};

const writeMetaData = (_data) => {
  fs.writeFileSync(`${buildDir}/json/_metadata.json`, _data);
};

const saveMetaDataSingleFile = (_editionCount) => {
  let metadata = metadataList.find((meta) => meta.edition == _editionCount);
  debugLogs
    ? console.log(
        `Writing metadata for ${_editionCount}: ${JSON.stringify(metadata)}`
      )
    : null;
  fs.writeFileSync(
    `${buildDir}/json/${_editionCount}.json`,
    JSON.stringify(metadata, null, 2)
  );
};

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
}

const startCreating = async () => {
  let layerConfigIndex = 0;
  let editionCount = 1;
  let failedCount = 0;
  let abstractedIndexes = [];
  for (
    let i = network == NETWORK.sol ? 0 : 1;
    i <= layerConfigurations[layerConfigurations.length - 1].growEditionSizeTo;
    i++
  ) {
    abstractedIndexes.push(i);
  }
  if (shuffleLayerConfigurations) {
    abstractedIndexes = shuffle(abstractedIndexes);
  }
  debugLogs
    ? console.log("Editions left to create: ", abstractedIndexes)
    : null;
  while (layerConfigIndex < layerConfigurations.length) {
    const layers = layersSetup(
      layerConfigurations[layerConfigIndex].layersOrder
    );
    while (
      editionCount <= layerConfigurations[layerConfigIndex].growEditionSizeTo
    ) {
      let newDna = createDna(layers);
      var divFrame;
      if (isDnaUnique(dnaList, newDna)) {
        // console.log("newDna: ", newDna)
        // console.log("layers: ",layers);
        let results = constructLayerToDna(newDna, layers);
        // console.log('results: ', results, results[0].selectedElement)
        var temp = []
        

        //init the grid matrix
        for ( var i = 0; i < TOTALFRAMES; i++ ) {
            temp[i] = []; 
        }
        // console.log("temp ",results)
        results.forEach((layer) => {
          // layer.selectedElement.forEach((frame) => {
          // console.log('layer: ', layer)
          divFrame = Math.ceil(TOTALFRAMES / layer.selectedElement.length);
          // for (let j = 1; j < layer.selectedElement.length; j++){
            
            // console.log('SNIP: ', layer, Math.floor(i/divFrame),layer.selectedElement[Math.floor(i/divFrame)]);
            for (let i = 0; i < TOTALFRAMES; i++) {
              temp[i].push(loadLayerImg(layer, layer.name, Math.floor(i/divFrame)))
            }
          // }
          // })
        })
        sleep(1000);

        // console.log('break', temp)
        // Put this in while loop 
        var NFTcount=0;
        for (let i = 0; i<temp.length; i++) {
            await Promise.all(temp[i]).then((renderObjectArray) => {
            // console.log("renderObjectArray: ",temp[i], renderObjectArray)
            debugLogs ? console.log("Clearing canvas") : null;
            ctx.clearRect(0, 0, format.width, format.height);
            if (gif.export) {
              hashlipsGiffer = new HashlipsGiffer(
                canvas,
                ctx,
                `${buildDir}/gifs/${abstractedIndexes[0]}.gif`,
                gif.repeat,
                gif.quality,
                gif.delay
              );
              hashlipsGiffer.start();
            }
            if (background.generate) {
              drawBackground();
            }

            renderObjectArray.forEach((renderObject, index) => {
              drawElement(
                renderObject,
                index,
                layerConfigurations[layerConfigIndex].layersOrder.length
              );
              if (gif.export) {
                hashlipsGiffer.add();
              }
            });
            if (gif.export) {
              hashlipsGiffer.stop();
            }
            debugLogs
              ? console.log("Editions left to create: ", abstractedIndexes)
              : null;
            saveImage(abstractedIndexes[0],i);
            
            addMetadata(newDna, abstractedIndexes[0]);
            saveMetaDataSingleFile(abstractedIndexes[0]);
            console.log(
              `Created edition: ${abstractedIndexes[0]}, with DNA: ${sha1(
                newDna
              )}`
            );
          })
          ;
        }
      
        NFTcount++;
        dnaList.add(filterDNAOptions(newDna));
        editionCount++;
        abstractedIndexes.shift();
      } else {
        console.log("DNA exists!");
        failedCount++;
        if (failedCount >= uniqueDnaTorrance) {
          console.log(
            `You need more layers or elements to grow your edition to ${layerConfigurations[layerConfigIndex].growEditionSizeTo} artworks!`
          );
          process.exit();
        }
      }
    }
    layerConfigIndex++;
  }
  writeMetaData(JSON.stringify(metadataList, null, 2));
};

module.exports = { startCreating, buildSetup, getElements };