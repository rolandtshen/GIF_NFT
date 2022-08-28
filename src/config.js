const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Your Collection";
const description = "Remember to replace this description";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 30,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmRight In', number: 17 },
    { name: '06ArmL IN', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01TENNIS#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 60,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmRight In', number: 17 },
    { name: '06ArmDrill', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01DRILL#1', number: 1 },

    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 90,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmAll', number: 17 },
    { name: '06ArmL OUT', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01UMBRELLA#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 120,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmAll', number: 17 },
    { name: '06ArmAll', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01WEED PIPE#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 150,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmPizza', number: 17 },
    { name: '06ArmAll', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01PIZZA#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 180,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmGun', number: 17 },
    { name: '06ArmAll', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01NERF GUN#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 210,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmGun', number: 17 },
    { name: '06ArmAll', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01MEGAPHONE#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 240,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmAll', number: 17 },
    { name: '06ArmSaber', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01LIGHTSABER#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 270,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '06ArmSaber', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01LIGHTSABER#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 300,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmSword', number: 17 },
    { name: '06ArmAll', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01Sword', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 330,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmHammer', number: 17 },
    { name: '06ArmAll', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01HAMMER#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 360,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '07ArmAll', number: 17 },
    { name: '06ArmL Out Splay', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01BOMB#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
  {
    growEditionSizeTo: 390,
    layersOrder: [
      { name: '11BG', number: 5 },
    { name: '10Cape', number: 7 },
    { name: '09Legs', number: 19 },
    { name: '08Necklace', number: 3 },
    { name: '06ArmSaber', number: 30 },
    { name: '05Head', number: 7 },
    { name: '04Mask', number: 7 },
    { name: '03Face', number: 8 },
    { name: '02Hair', number: 25 },
    { name: '01BASEBALL BAT#1', number: 1 },
    // { name: '00', number: 2 },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: false,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
