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
    growEditionSizeTo: 1,
    layersOrder: [
      { name: '11A_Background',number: 5 },
      { name: '10A_Cape',number: 5 },
      { name: '09B_Black',number: 7 },
      { name: '08A_Special',number: 19 },
      { name: '07B_Black',number: 3 },
      { name: '06B_Barbarian Shield',number: 17 },
      { name: '05A_Head',number: 30 },
      { name: '04A_Mask',number: 7 },
      { name: '03A_Face',number: 7 },
      { name: '02A_Hair',number: 8 },
      { name: '01B_Barbarian Shield',number: 25 },
      { name: '00A_Super Power',number: 1 },
    ],
  },

  
  // {
  //   growEditionSizeTo: 20,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Blue', number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 30,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Green',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 40,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Red',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 50,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_White',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 60,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Yellow',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // // Barbarian Shield COD
  // {
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Black',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 80,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Blue',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 90,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Green',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 100,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Red',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 110,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_White',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 120,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Yellow',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // // Barbarian Shield Mike
  // {
  //   growEditionSizeTo: 130,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Black',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 140,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Blue',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 150,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Green',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 160,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Red',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 170,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_White',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 180,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Yellow',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // // Barbarian Shield with Pin
  // {
  //   growEditionSizeTo: 190,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Black',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 200,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Blue',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 210,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Green',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 220,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Red',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 230,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_White',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 240,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Yellow',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 250,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Black',number: 3 },
  //     { name: '06B_Barbarian Shield',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // // Baseball Bat
  // {
  //   growEditionSizeTo: 10,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null', number: 3 },
  //     { name: '06B_Both Arms Saber Black',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 20,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null', number: 3 },
  //     { name: '06B_Both Arms Saber Blue',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 20,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null', number: 3 },
  //     { name: '06B_Both Arms Saber Green',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 40,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null', number: 3 },
  //     { name: '06B_Both Arms Saber Red',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 20,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null', number: 3 },
  //     { name: '06B_Both Arms Saber White',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 20,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null', number: 3 },
  //     { name: '06B_Both Arms Saber Yellow',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04A_Mask',number: 7 },
  //     { name: '03A_Face',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // // Baseball Bat COD
  // {
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Black',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Blue',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Green',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Red',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber White',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 70,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Yellow',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_COD',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Barbarian Shield',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // // Baseball Bat Mike
  // {
  //   growEditionSizeTo: 130,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Black',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 130,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Blue',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 130,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Green',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 130,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Red',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 130,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber White',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 130,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Yellow',number: 17 },
  //     { name: '05B_Null',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Mike',number: 7 },
  //     { name: '02A_Hair',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // // Baseball Bat with Pin
  // {
  //   growEditionSizeTo: 190,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Black',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Black',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 190,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Blue',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Blue',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 190,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Green',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Green',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 190,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Red',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Red',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 190,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_White',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber White',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
  // {
  //   growEditionSizeTo: 190,
  //   layersOrder: [
  //     { name: '11A_Background',number: 5 },
  //     { name: '10A_Cape',number: 5 },
  //     { name: '09B_Yellow',number: 7 },
  //     { name: '08A_Special',number: 19 },
  //     { name: '07B_Null',number: 3 },
  //     { name: '06B_Both Arms Saber Yellow',number: 17 },
  //     { name: '05A_Head',number: 30 },
  //     { name: '04B_Null',number: 7 },
  //     { name: '03B_Pinface',number: 7 },
  //     { name: '02B_Null',number: 8 },
  //     { name: '01B_Baseball Bat',number: 25 },
  //     { name: '00A_Super Power',number: 1 },
  //   ],
  // },
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
