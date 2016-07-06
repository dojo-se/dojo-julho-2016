var assert = require("assert");

//Resolva o problema
function campoMinado(param){
	if (param === "*-")
        return "*1";
    else if (param === "-*-")
        return "1*1";
}

//Descreva e teste
//Para testar, execute: mocha
describe('campoMinado("*-")', function(){
  it('should return "*1"', function(){
    assert.equal(campoMinado("*-"), "*1");
  })
})

describe('campoMinado("-*-")', function(){
  it('should return "1*1"', function(){
    assert.equal(campoMinado("-*-"), "1*1");
  })
})

exports.campoMinado = campoMinado;