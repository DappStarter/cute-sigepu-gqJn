require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom produce bone foot custom recipe noise attitude coral light army giant'; 
let testAccounts = [
"0x59614c4f51c26c6903d63b9896b091b20662380e8c541d139ed39de2f115702e",
"0x86048c03fda07822ef94f708000caf1b20b965f846e4e477b69eda964640bc2f",
"0x1e8779920114474a475d8ae4669749087214aa642664ea6d9136bd0db8f4ebe6",
"0x88a16c12a7871e697539a9048f33564b0c3dd81d6adc1e2365d081559102f9c1",
"0xd971e2c3db045682689e888a625accb00d0ce81f449e7223ab065daf6b7aac89",
"0xa106706e817ab126aa2899d30357c173ccf4bb1693830a5762f1bd86b2126c69",
"0x47f9371ec319aa31bf21ced5bb891f7ac0b6c3f9f0f8acda5bc4364bc660b97d",
"0xe99ae852e48382be33af7898082a1e54bacb7ddabe8b6293eba2f2f76bd80afc",
"0x6fa6e8a9aaacc411f534e518ea7408aa644498c60eba4463b1777ba246fac73a",
"0x89fac88ae963e33c60ae9f4843c7116e5ad85c62dfe891e7b4dd052bc2accd2f"
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

