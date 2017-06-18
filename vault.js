'use strict';
module.exports = function(){

  const vault = {};

  function setValue(key, value){

    vault[key] = value;
    return vault[key];
  }

  function getValue(key){

    if (key === undefined | vault[key] === undefined){
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

