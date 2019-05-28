//value的信息
var app =getApp()
function get(key) {
   var value = wx.getStorageSync(key)
   if (!value) {
      value = app.globalData[key];
   }
   return value;
}
module.exports = {
   get
}