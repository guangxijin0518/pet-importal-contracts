var NFTToken = artifacts.require("PetImmortalToken");
var engine = artifacts.require("Engine");

module.exports = function(deployer) {
    deployer.deploy(NFTToken);
    deployer.deploy(engine);
};