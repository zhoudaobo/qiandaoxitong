import http from '../../../utils/api' // 引入api接口管理文件
var myUtils = require("../../../utils/myUtils.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    username: '',
    grade: '17计本1',
    stuno: '12323423',
    notice: [],
    img: 'xiao4.jpg'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //从缓存里面获取ID和username
    var username = myUtils.get("username");

    var classid = myUtils.get("classid");
    // var img = myUtils.get("img");
    console.log(username)
    var id = myUtils.get("id");
    // 获取用户的信息
    this.setData({
      id: id,
      username: username,
      // img: img
    })
  
    //获取学术信息
    http.getInfo({
      data: {
        id: this.data.id,
      },
      success: res => {
        console.log(res.data[0].no)
        //缓存学生的基本信息
        wx.setStorageSync('stuinfo', res.data[0])
        var stuno = res.data[0].no;
        var grade = res.data[0].classname;
        this.setData({
          stuno: stuno,
          grade: grade,
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '页面加载失败...',
        })
      }
    })
    // 获取通知信息
    http.getnotice({
    data:{
      id: this.data.id, 
    },
      success: res => {
        console.log(res)
  var list = res.data
        this.setData({
          notice:list
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  noticelist: res => {
    var notice_per_name = res.currentTarget.dataset.username;
    var notice_time = res.currentTarget.dataset.release_time;
    var notice_subject = res.currentTarget.dataset.content;
    var title = res.currentTarget.dataset.title;
    console.log(res)
    wx.navigateTo({
      url: '../notice/noticelist?notice_per_name=' + notice_per_name + '&notice_time=' + notice_time + '&notice_subject=' + notice_subject + '&title=' + title,
    })
  },
  timetable: res => {
    wx.navigateTo({
      url: '../timetable/timetable',
    })
  },

  // 查看事件
  timetableone: res => {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  my: function() {
    wx.navigateTo({
      url: '../pesonel/pesonel',
    })
  }
})