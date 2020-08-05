var expect = require("chai").expect;
var server = require("../src/server");

describe("test Name", function(){
    it("Convert", function(){
        //expect("toto").to.equal("toto");
        expect(server.insererNom("toto")).to.equal("bonjour toto");
        
    });


});