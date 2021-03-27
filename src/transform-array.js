const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  
  if(!Array.isArray(arr)){
    throw new Error();
  }
  
  let newArr = [];

  for (let i=0;i<arr.length;i++){
    switch(arr[i]){
      case '--discard-next':
        i++;
        break;
      case '--discard-prev':
        (newArr.length && arr[i - 2] != '--discard-next') ? newArr.pop(): newArr;
        break;
      case '--double-prev':
        (i > 0 && arr[i-2] !='--discard-next' )? newArr.push(arr[i-1]):newArr;
        break;
      case '--double-next':
        (i<arr.length-1 ) ? newArr.push(arr[i+1]) :newArr;
        break;
      default :
      newArr.push(arr[i]);
    }    
}
return newArr;
};
