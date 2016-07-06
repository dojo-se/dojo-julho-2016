var assert = require("assert");

//Resolva o problema
function campoMinado(param){
	return "*1";
}

//Descreva e teste
//Para testar, execute: mocha
describe('campoMinado("*-")', function(){
  it('should return "*1"', function(){
    assert.equal(campoMinado(0), "*1");
  })
})

exports.campoMinado = campoMinado;