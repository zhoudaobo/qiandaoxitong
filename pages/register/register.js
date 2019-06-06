const app = getApp();
var myUtils = require("../../utils/myUtils.js");
import http from '../../utils/api' // 引入api接口管理文件
Page({
      data: {
        length: '',
        imgurl: '',
        js: '',
        focusone: false,
        focustow: false,
        focustree: false,
        focus: false,
        date: '2010-10-10',
        items: [{
            name: '教师',
            value: '教师'
          },
          {
            name: '学生',
            value: '学生',
            checked: 'true'
          },
          {
            name: '家长',
            value: '家长'
          },
        ],

        gendur: [{
            name: '男',
            value: '男'
          },
          {
            name: '女',
            value: '女'
          },
        ],

        bindDateChange: function(e) {
          console.log('picker发送选择改变，携带值为', e.detail.value)
          this.setData({
            date: e.detail.value
          })
        },

        bindButtonTap() {
          this.setData({
            focustow: true
          })
        },
        bindButtonTapone() {
          this.setData({
            focusone: true
          })
        },

        bindButtonTapone1() {
          this.setData({
            focustree: true
          })
        },

        bindButtontime() {
          this.setData({
            focus: true
          })
        },

        radioChange: function(e) {
          console.log('radio发生change事件，携带value值为：', e)
          this.setData({
            js: e.detail.value
          })
        },

        upUnload: function (res) {
          console.log(res)
          var that = this;
       
          wx.chooseImage({
            success: function(res) {
              that.setData({
                imgurl: res.tempFilePaths,
                length: res.tempFilePaths.length
              })
              console.log(res)
            },
          })
        },


        formSubmit: res => {
          console.log(res)
          if (res.detail.value.pwd != res.detail.value.rpwd) {
            wx.showLoading({
              title: '密码不一致',
              duration: 2000
            })
          }
          http.reg({
            data: {

            }
          })
          success: res => {
            console.log(res)
          }
        },

      },
       })