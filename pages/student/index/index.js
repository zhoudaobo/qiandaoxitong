import * as echarts from '../../../utils/ec-canvas/echarts'; //引入echarts.js
import http from '../../../utils/api' // 引入api接口管理文件
var myUtils = require("../../../utils/myUtils.js"); //缓存文件
const app = getApp()
var type = ''
// var dataList = [1,2,3,4,5,6,8]
// var k = 0
// var Chart = null;
Page({
  data: {
    // ec: {
    //   lazyLoad: true // 延迟加载
    // },
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    classname: [],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var id = myUtils.get('id')
    var stuinfo = myUtils.get('stuinfo')
    var classid = stuinfo.classid
    console.log(classid)
    http.stuSubArr({
      data: {
        id: id,
        classid: classid

      },
      success: res => {
        console.log(res)
        var list=res.list
        this.setData({
          classname:list
        })
      }
    })
    
  },
 
  onShow: function (e) {
    // columnCanvas

  },
  showModal(e) {
    // console.log(e)
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
  },

  inlook: function () {
    wx.navigateTo({
      url: '../logs/logs',

    })
  },

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },

})