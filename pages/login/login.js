const app = getApp();
var myUtils = require("../../utils/myUtils.js");
import http from '../../utils/api' // 引入api接口管理文件
Page({
  data: {
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    tabNav: ['密码登陆', '人脸登陆'],
    focus: false,
    focusone: false,
    userName: '',
    userPassword: '',
    disabled: false,
    no: '',
    pwd: '',
    noinput: false,
    pwdinput: false,
    base64: "",
    token: "",
    msg: null

  },
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
      scrollLeft: (e.currentTarget.dataset.id - 1) * 60
    })
  },
  userNameInput: function (e) {
    this.setData({
      userN: e.detail.value
    })
  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  bindButtonTapone() {
    this.setData({
      focusone: true
    })
  },
  noinput: function (e) {
    this.setData({
      no: e.detail.value
    });
    this.setData({
      noinput: true
    });
    if (this.data.noinput == true && this.data.pwdinput == true) {
      this.setData({
        disabled: false
      });
    }

  },
  pwdinput: function (e) {
    this.setData({
      pwd: e.detail.value
    });
    this.setData({
      pwdinput: true
    });
    if (this.data.noinput == true && this.data.pwdinput == true) {
      this.setData({
        disabled: false
      });
    }
  },
  bindButtonTapone() {
    this.setData({
      focusone: true
    })
  },
  bindButtonTap() {
    this.setData({
      focus: true
    })
  },
  // formSubmit: function (e) {
  //   console.log(e.detail.value);//格式 Object {userName: "user", userPassword: "password"}
  //   //获得表单数据
  //   var objData = e.detail.value;
  //   if (objData.userName && objData.userPassword) {
  //     // 同步方式存储表单数据
  //     wx.setStorageSync('userName', objData.userName);
  //     wx.setStorageSync('userPassword', objData.userPassword);
  //     //跳转到成功页面
  //     wx.navigateTo({
  //       url: '../index/index'
  //     })

  //   }

  // },



  // 人脸登陆
  // pages/pp/pp.js





  onShareAppMessage: function () {

  },
  devicePosition() {
    this.setData({
      device: !this.data.device,
    })
    console.log("当前相机摄像头为:", this.data.device ? "后置" : "前置");
  },

  takePhoto() {
    //拍照并编码
    const ctx = wx.createCameraContext();
    var that = this;
    var imgurl = "";
    ctx.takePhoto({
      quality: 'high',
      success: function (d) {
        console.log(d)
        imgurl = d.tempImagePath;

        wx.uploadFile({
          url: 'https://www.wxpy.live/zhugeliang/wudi/faceLogin',
          filePath: d.tempImagePath,
          name: 'file',
          header: {
            'Content-Type': 'multipart/form-data'
          },
          formData: null,
          success: res => {
            console.log(res)
            var jsonObj = JSON.parse(res.data);
            if (jsonObj.code == 0) {
              wx.showLoading({
                title: '登录成功',
                duration: 2000
              })
              if (jsonObj.data.type == 1) {
                wx.redirectTo({
                  url: '../student/home/home',
                })
              } else if (jsonObj.data.type == 2) {
                wx.redirectTo({
                  url: '../teacher/home/index',
                })
              } else {
                wx.redirectTo({
                  url: '../parent/home/home',
                })
              }
              wx.setStorageSync("id", jsonObj.data.id)
              wx.setStorageSync("username", jsonObj.data.username)
              wx.setStorageSync('img', jsonObj.data.img)
            } else {
              wx.showLoading({
                title: '请重试',
                duration: 2000
              })
            }
          }
        })
      },
      complete: function () {
        console.log("complete");
      }
    });

  },
  formSubmit: function (e) {
    var that = this;

    that.setData({
      no: e.detail.value.no,
      pwd: e.detail.value.pwd
    })
    wx.showLoading({
      title: '登录中...',
      duration: 1000
    })
    console.log(e);
    this.setData({
      disabled: true
    });
    http.login({
      data: {
        username: e.detail.value.no,
        password: e.detail.value.pwd
      },
      success: function (res) {
        console.log(res);
        if (res.code == 0) {
          wx.showLoading({
            title: '登录成功',
            duration: 2000
          })
          if (res.data.type == 1) {
            wx.redirectTo({
              url: '../student/home/home',
            })
          } else if (res.data.type == 2) {
            wx.redirectTo({
              url: '../teacher/home/index',
            })
          } else if (res.data.type == 3) {
            wx.redirectTo({
              url: '../parent/home/home',
            })
          }
          wx.setStorageSync("id", res.data.id)
          wx.setStorageSync("username", res.data.username)
          wx.setStorageSync('img', res.data.img)
        } else if (res.code == 1) {
          wx.showLoading({
            title: '用户不存在',
            duration: 2000
          })
        } else if (res.code == 2) {
          wx.showLoading({
            title: '密码错误',
            duration: 2000
          })
        } else if (res.code == -1) {
          wx.showLoading({
            title: '服务器出差了！！！',
            duration: 2000
          })
        }
      }
    })
  },


})