module.exports = function getDates() {
  var dateArray = new Array();
  var currentDate = new Date();
  while (currentDate.valueOf() <= new Date().setDate(new Date().getDate() + 270)) {
    const date = new Date(currentDate);
    const month = date.getUTCMonth() + 1; //months from 1-12
    const day = date.getUTCDate();
    const year = date.getUTCFullYear();
    const newdate = year + "-" + month + "-" + day;

    dateArray.push(newdate);
    currentDate = new Date(currentDate).setDate(new Date(currentDate).getDate() + 1);
  }

  return dateArray;
};
