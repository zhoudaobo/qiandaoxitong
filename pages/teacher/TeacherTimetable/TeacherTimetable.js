//index.js
//获取应用实例
var myUtils = require("../../../utils/myUtils.js");
import http from '../../../utils/api' // 引入api接口管理文件
var app = getApp()
Page({
  data: {
    id: '',
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [],
    // detail: []
  },

  onLoad: function(res) {
    console.log(res)
    var that = this;
    var id = myUtils.get("id");
    console.log(id)
    this.setData({
      id: id,
    })
    // console.log('qweqwrwqrwqer'+this.data.id)
    http.gettime({
      data: {
        id: this.data.id,
      },

      success: res => {
        console.log(res)
        var list = res.data;
        var index = res.data.length;
        for (let i = 0; i < index; i++) {
          var a = res.data[i].class_time.split(",");
          var xqj = a[0];
          var djj = a[1];
          list[i]['xqj']=xqj,
            list[i]['djj'] = djj
        // console.log(list)
        that.setData({
          wlist: list
        })
        }
        // console.log(that.data.wlist)
      }
    })
  },

  showCardView: function(res) {
    console.log(res)
    // 获取课程名称
    var subjcname = res.currentTarget.dataset.subjcname
    var grade = res.currentTarget.dataset.classname
    var classid = res.currentTarget.dataset.classid
    var subject = res.currentTarget.dataset.subject
    var teacher = res.currentTarget.dataset.teacher
    var subjcname = res.currentTarget.dataset.subjcname
    var id = res.currentTarget.dataset.id
    console.log(id)
    // 页面跳转并传值
    wx.navigateTo({
      url: '../../teacher/signList/signList?subjcname=' + subjcname + '&grade=' + grade + '&classid=' + classid + '&subject=' + subject + '&teacher=' + teacher+'&id='+id,
    })
  }
})