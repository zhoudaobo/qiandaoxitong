import http from '../../../utils/api' // 引入api接口管理文件
var myUtils = require("../../../utils/myUtils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    // username: '', //姓名
    // department: '', //所属部门
    // userno: '', //职工号
    contact: '',
    no: '',
    img: 'xiao4.jpg',
    classname: [],
    length:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this;
    var username = myUtils.get("username");
    var id = myUtils.get("id");
    // var img = myUtils.get("img");
    that.setData({
      id: id,
      username: username,
      // img:img
    })
    http.getteacherinfo({ //获取教师的基本信息
      data: {
        id: id
      },
      success: res => {
        console.log(res)
        wx.setStorageSync('teachinfo', res.data[0])
        var no = res.data[0].no
        var contact = res.data[0].contact
        var classname = res.data
        var length=classname.length
        that.setData({
          no: no,
          contact: contact,
          classname: classname,
          length:length
        })
        console.log(this.data.classname)
      },
      fail: function(res) {
        wx.showToast({
          title: '页面加载失败...',
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

  clic: function() {
    wx.navigateTo({
      url: '../TeacherTimetable/TeacherTimetable',

    })
  },

  // clicone: function() {
  //   wx.navigateTo({
  //     url: '../techaerlook/techaerlook',

  //   })
  // },
  my: function(res) {
    wx.navigateTo({
      url: '../../teacher/my/my',
    })
  },
  showModal(e) {
    console.log(e)
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },

  hideModal(e) {
    this.setData({
      modalName: null
    })
  },

  inlook: function (e) {
    var classid = e.target.dataset.classid
console.log(e)
    wx.navigateTo({
      url: '../techaerll/techaerll?classid='+classid,

    })
  },

  menuBorder: function (e) {
    console.log(e)
    this.setData({
      menuBorder: true
    });
  },

  menuArrow: function (e) {
    this.setData({
      menuArrow: true
    });
  },

  menuCard: function (e) {
    this.setData({
      menuCard: true
    });
  },
  
})