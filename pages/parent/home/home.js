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
    remark: '',
    contact: '',
    select: false,
    notice: [],
    preaMsage: [],
    img: 'xiao4.jpg',
    length: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var username = myUtils.get("username");
    var id = myUtils.get("id");
    // var img = myUtils.get("img");
    that.setData({
      id: id,
      username: username,
      // img: img
    })
    // 获取家长的信息

    http.pareMage({
      data: {
        id: id,
      },
      success: res => {
        // console.log(res)
        that.setData({
          contact: res.data[0].contact,
          remark: res.data[0].remark
        })
        wx.setStorageSync("preaMsage", res.data[0]) //缓存家长的基本信息
      },

      fail: function (res) {
        wx.showToast({
          title: '页面加载失败...',
        })
      }
    })
    //获取通知
    http.getnotice({

      success: res => {
        // console.log(res)
        var list = res.data
        var length = list.length
        this.setData({
          notice: list,
          length: length
        })
      }
    })
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  my: res => {
    wx.navigateTo({
      url: '../my/my',
    })
  },
  intruct: res => { //学校简介
    wx.navigateTo({
      url: '../intruct/intruct',
    })
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
  look: res => {
    wx.navigateTo({
      url: '../look/look',
    })
  }
})