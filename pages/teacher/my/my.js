import http from '../../../utils/api' // 引入api接口管理文件
var myUtils = require("../../../utils/myUtils.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // onPullDownRefresh: function () {
    //   wx.stopPullDownRefresh()
    // },
    myinfo: null,
    stunum: '',
    username: '',
    grade: '',
    department: '',
    no:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var teachinfo = myUtils.get("teachinfo");
    var id = myUtils.get("id");
    that.setData({
      id: id,
      username: teachinfo.username,
      no: teachinfo.no
    })
    // 获取学生的基本信息
    // http.stuinfo({
    //   data: {
    //     // stuid:stuid,
    //   },
    //   success: res => {
    //     var stunum = res.detail.stunum;
    //     var stuname = res.detail.stuname;
    //     var grade = res.detail.grade;
    //     var department = res.detail.department
    //     this.setData({
    //       stunum: stunum,
    //       stuname: stuname,
    //       grade: grade,
    //       department: department
    //     })
    //   }
    // })
    var stu = wx.getStorageSync('student');
    this.setData({
      myinfo: stu
    });
    console.log(this.data.myinfo);
  },
  exit: function (e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function (res) {
        console.log(res)
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.clearStorageSync();
          //页面跳转
          wx.switchTab({
            url: '../../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
})