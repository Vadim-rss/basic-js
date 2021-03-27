module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';

  };
  try {
    date.toJSON()
  } catch (e) {
    throw new Error(e)
  }
  let month=['winter','winter','spring','spring','spring','summer','summer','summer','fall','fall','fall','winter'];
  return month[date.getMonth()];
  
};
