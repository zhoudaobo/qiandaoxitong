var myUtils = require("../../../utils/myUtils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    username:'',
    contact: '',
    home_addr: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var username = myUtils.get("username");
    var id = myUtils.get("id");
    var preaMsage = myUtils.get("preaMsage");
    console.log(preaMsage)
    that.setData({
      id: id,
      username: username,
      contact: preaMsage.contact,
      home_addr: preaMsage.home_addr,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.clearStorageSync();
          //页面跳转
          wx.switchTab({
            url: '../../login/login',
          })


        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
})