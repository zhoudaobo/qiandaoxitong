//index.js
var myUtils = require("../../../utils/myUtils.js");
import http from '../../../utils/api'
var app = getApp()
Page({
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: []
  },
  onLoad: function () {
    var that = this;
    var stuinfo=myUtils.get('stuinfo')
    var classid = stuinfo.classid
    console.log(classid)
    http.studentgettime({
      data: {
        classid: classid,
      },

      success: res => {
        var list = res.data;
        console.log(res)
        var index = res.data.length;
        console.log(index)
        for (let i = 0; i < index; i++) {
          var a = res.data[i].class_time.split(",");
          // console.log(a)
          var xqj = a[0];
          var djj = a[1];
          console.log('aa' + xqj + 'ee' + djj)
          list[i]['xqj'] = xqj,
            list[i]['djj'] = djj

          console.log(list)
          console.log(res.data.length)
          that.setData({
            wlist: list
          })
        }
        console.log(that.data.wlist)
      }
    })

  },
 

})
