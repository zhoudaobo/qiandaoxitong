// pages/classpage/classpage.js
var myUtils = require("../../../utils/myUtils.js");
import http from '../../../utils/api' // 引入api接口管理文件
var windowW = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    calssid:'',
    studentinfo: [],
    classname:''
  },



  //定义记录初始屏幕宽度比例，便于初始化





  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var classid=options.classid
    var classname = options.classname
    console.log(classid)
    var id = myUtils.get('id')
    // 屏幕宽度
    this.setData({
      imageWidth: wx.getSystemInfoSync().windowWidth,
      classid:classid,
      classname:classname
    });
    console.log(this.data.classid);

    //计算屏幕宽度比列
    windowW = this.data.imageWidth / 375;
    http.classArr({
      data:{
      id:id,
      classid:this.data.classid
      },
      success:res=>{
      var list = res.list
      this.setData({
        studentinfo:list
      })
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */



})