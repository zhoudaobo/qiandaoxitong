// pages/pp/pp.js

import http from '../../../utils/api' // 引入api接口管理文件

// var app =getApp()

Page({

  /**
 
   * 页面的初始数据
 
   */



  data: {

    base64: "",

    token: "",

    msg: null,

    index: 0,

    weekno: 0,

    grade: '',

    subjcname: '',

    classid: '',

    subject: '',

    teacher: '',

    id: '',

    device: '',

    tcsuid: '',

    week: [{

      'week': 0

    }, {

      'week': 1

    }, {

      'week': 2

    }, {

      'week': 3

    }, {

      'week': 4

    }, {

      'week': 5

    }, {

      'week': 6

    }, {

      'week': 7

    }, {

      'week': 8

    }, {

      'week': 9

    }, {

      'week': 10

    }, {

      'week': 11

    }, {

      'week': 12

    }, {

      'week': 13

    }, {

      'week': 14

    }, {

      'week': 15

    }, {

      'week': 16

    }, {

      'week': 17

    }, {

      'week': 18

    }, {

      'week': 19

    }, {

      'week': 20

    }],

    itemLists: [



    ]

  },



  /**
 
   * 生命周期函数--监听页面加载
 
   */

  onLoad: function (options) {



    console.log(options)

    var that = this;

    this.setData({

      grade: options.grade,

      subjcname: options.subjcname,

      classid: options.classid,

      subject: options.subject,

      teacher: options.teacher,

      id: options.id,

      tcsuid: options.tcsuid

    })

    console.log(that.data.tcsuid + 'qqq123456')

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

  devicePosition() {

    this.setData({

      device: !this.data.device,

    })

    console.log("当前相机摄像头为:", this.data.device ? "后置" : "前置");

  },

  bindPickerChange(e) {

    console.log(e)

    // console.log('picker发送选择改变，携带值为', e)

    console.log(this.data.week[e.detail.value].week)

    this.setData({

      index: e.detail.value,

      weekno: this.data.week[e.detail.value].week

    })

  },

  takePhoto() {

    // console.log(this.data.classid)

    var that = this;

    //拍照并编码

    const ctx = wx.createCameraContext();

    var that = this;

    var imgurl = "";

    ctx.takePhoto({

      quality: 'high',

      success: function (d) {

        console.log(d)

        imgurl = d.tempImagePath;

        // console,log(this.data.classid)

        wx.uploadFile({

          url: 'https://www.wxpy.live/zhugeliang/wudi/faceSignIn',

          filePath: d.tempImagePath,

          name: 'file',

          header: {

            'Content-Type': 'multipart/form-data'

          },

          formData: {

            classid: that.data.classid,

            tcsuid: that.data.id,

          },

          success: function (re) {

            console.log(re)

            wx.showLoading({

              title: '签到完成',

              duration: 2000,

            })

            wx.redirectTo({

              url: '../../teacher/signList/signList?classid=' + that.data.classid + '&subject=' + that.data.subject + '&subjcname=' + that.data.subjcname + '&grade=' + that.data.grade + '&teacher=' + that.data.teacher + '&id=' + that.data.id,

            })

          }

        })

      },

      complete: function () {

        console.log("complete");

      }

    });

    console.log('wqeqwr' + this.data.tcsuid)

  }



})