var ConnorCoin = artifacts.require("./ConnorCoin.sol");
// const _name = "PlayCoin&Connor";
// const _symbol = "Connor";
// const _decimals = 18;
// const _total_supply = 1000000;
// , _total_supply
module.exports = function(deployer) {
    const _name = "PlayCoin&Connor";
    const _symbol = "Connor";
    const _decimals = 18;
    deployer.deploy(ConnorCoin, _name, _symbol, _decimals);
};
