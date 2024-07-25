require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.19",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      account: ["0xD5464538080F81723277F3236e972ea54f1A6685"], //Your private key starting with "f27dc7128219bded4191dbaec1466e7c2bb30866e18c33e88ebeba61180938a6"
    },
  },
};
