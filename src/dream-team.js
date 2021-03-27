const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)){
    return false;
  }
  res = []
  let noSpaces ='';
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      noSpaces = members[i].trim();
      res.push(noSpaces[0].toUpperCase());
    } 
  }
  return res.sort().join('');
};
