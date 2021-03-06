'use strict';
function VaultGenerator(){

  const vault = {};

  function setValue(key, value){

    vault[key] = value;
  }

  function getValue(key){
    if (vault.hasOwnProperty(key) !== true){
      return null;
    }else{
      return vault[key];
    }
  }

  return{
    setValue: setValue,
    getValue: getValue
  }
};

module.exports = VaultGenerator;

var vault = VaultGenerator();
vault.setValue("password", "john");
console.log(vault);

