require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remain pumpkin harvest nation flush genre'; 
let testAccounts = [
"0x56120495c1565eba66f5029b2372abc76c7adcfe12d26a68f1e7378978fe5240",
"0xd48a90d17c4a2f7dbdd44cf1f29731cda50470bf291e20d552d2a5dc8d9a005d",
"0x47878612ce70d35210f1f44de95427d4d41bd6305d6b829bc7da777b42c074fd",
"0xbc32931b1c38e6e17bb72808a17e3871a88f4b94401b1c49aebd5a3726750a48",
"0x6784183ba3a59e129b1eb8152ea9c50d99c3b7954850b7d4271fe5c67b928275",
"0x9b9ce1a4741f4a500cd753c4b36dbb533a5f15835e63111728a4c0e28dd6bb35",
"0x6277fe593ee7aac7108746e86a2553a65f7483f2f16a9cc1c7037b2499f9172d",
"0xd1aabb53ff70acd782ad0b651a18f270c3f51d550af5bb68b02913ca67a8f33d",
"0x618033e29942553dafe98fb51a8609d2804a98fe4d57799ce6f59dbd13c22ec7",
"0xc163873aab892bd2a391925cd4ca5737042fab6bf2262cf7377f109d8423ed5d"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

