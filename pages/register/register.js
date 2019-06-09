const app = getApp();
var myUtils = require("../../utils/myUtils.js");
import http from '../../utils/api' // 引入api接口管理文件
const date = new Date();
const years = [];
const months = [];
const days = [];
const hours = [];
const minutes = [];
//获取年
for (let i = 1990; i <= date.getFullYear() + 10; i++) {
  years.push("" + i);
}
//获取月份
for (let i = 1; i <= 12; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  months.push("" + i);
}
//获取日期
for (let i = 1; i <= 31; i++) {
  if (i < 10) {
    i = "0" + i;
  }
  days.push("" + i);
}

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    username: '',
    pwd:'',
    rpwd: '',
    showModal: false,
    time: '',
    multiArray: [years, months, days],
    multiIndex: [0, 9, 16, 10, 17],
    choose_year: '',
    sex: 0,
    length: '',
    imgurl: '',
    js: '',
    focusone: false,
    focustow: false,
    focustree: false,
    focus: false,
    date: '',
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
        name: '1',
        value: '男'
      },
      {
        name: '2',
        value: '女'
      },
    ],
  },
onLoad(options){

  //设置默认的年份
  this.setData({
    choose_year: this.data.multiArray[0][0]
  })
},
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带12312值为', e)
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
    console.log('radio发生change事件，携带v321alue值为：', e.detail.value)
    this.setData({
      js: e.detail.value
    })
  },
  radioChange1: function(e) {
    console.log('radio发生change事件，携带value值为：', e) 
    this.setData({
      sex:e.detail.value
    })
  },
  upUnload: function(res) {
    console.log(res)
    var that = this;
    wx.chooseImage({
      count: 1,
      success: function(res) {
        that.setData({
          imgurl: res.tempFilePaths,
          length: res.tempFilePaths.length
        })
      },
    })
  },
  formSubmit:function(res){
    var that = this;
  // http.subSign({
  //   data:{
  //     username: 'wts',
  //       sex:that.data.sex,
  //       password: res.detail.value.pwd,
  //       type:that.data.js,
  //       birth:that.data.time,
  //       img:that.data.imgurl
  //   },
  //   success:function(e){
  //     console.log(e)
  //   }  })
    // console.log(res.detail.value.name+'qwer')
 var that=this;
    console.log(that.data.sex+'wts')
 let imgurl=that.data.imgurl
    console.log(that.data.imgurl)
    console.log(that.data.sex)
 that.setData({
   username: res.detail.value.name,
   pwd: res.detail.value.pwd,http
 })
    if (res.detail.value.pwd != res.detail.value.rpwd) {
      wx.showLoading({
        title: '密码不一致',
        duration: 2000
      })
    }
     wx.uploadFile({
       url: 'http://localhost:8086/wudi/stuSign',
     filePath:imgurl[0],
      name: 'file',
      header: {
        'Content-Type': 'multipart/form-data'
      },
      
      formData: {
        username:'wts',
       sex:that.data.sex,
      password: res.detail.value.pwd,
      type:that.data.js,
      birth:that.data.time
     },
      success: res => {
       console.log(res)
        wx.reLaunch({
         url: '../login/login',
        })
      },
    
    })
  
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为',this.data.time)
    this.setData({
      multiIndex: e.detail.value
    })
    const index = this.data.multiIndex;
    const year = this.data.multiArray[0][index[0]];
    const month = this.data.multiArray[1][index[1]];
    const day = this.data.multiArray[2][index[2]];
    
    this.setData({
      time: `${year}-${month}-${day}`,
    })
    console.log(this.data.time);
  },
  //监听picker的滚动事件
  bindMultiPickerColumnChange: function (e) {
    //获取年份
    if (e.detail.column == 0) {
      let choose_year = this.data.multiArray[e.detail.column][e.detail.value];
      // console.log(choose_year);
      this.setData({
        choose_year
      })
    }
    //console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column == 1) {
      let num = parseInt(this.data.multiArray[e.detail.column][e.detail.value]);
      let temp = [];
      if (num == 1 || num == 3 || num == 5 || num == 7 || num == 8 || num == 10 || num == 12) { //判断31天的月份
        for (let i = 1; i <= 31; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 4 || num == 6 || num == 9 || num == 11) { //判断30天的月份
        for (let i = 1; i <= 30; i++) {
          if (i < 10) {
            i = "0" + i;
          }
          temp.push("" + i);
        }
        this.setData({
          ['multiArray[2]']: temp
        });
      } else if (num == 2) { //判断2月份天数
        let year = parseInt(this.data.choose_year);
        console.log(year);
        if (((year % 400 == 0) || (year % 100 != 0)) && (year % 4 == 0)) {
          for (let i = 1; i <= 29; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        } else {
          for (let i = 1; i <= 28; i++) {
            if (i < 10) {
              i = "0" + i;
            }
            temp.push("" + i);
          }
          this.setData({
            ['multiArray[2]']: temp
          });
        }
      }
      console.log(this.data.multiArray[2]);
    }
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    this.setData(data);
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {

  },


  go: function () {
    this.setData({
      showModal: false
    })
  }

})