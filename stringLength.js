const stringLength=(str)=>{
    if(str.length>10){
        return 'Error strings longer than 10 characters are nort allowed'
    }
    if(str.length<1){
        return 'Error string should be at least one character long'
    }
    return str.length
  }
  
  module.exports = stringLength;