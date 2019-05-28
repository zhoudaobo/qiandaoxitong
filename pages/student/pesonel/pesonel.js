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
    username: '',
    no:'',
    classname: '',
    username: '',
    despname:'',
    majornamr:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var stuinfo = myUtils.get("stuinfo");
    // console.log(username)
    var id = myUtils.get("id");
    // 获取用户的信息
    this.setData({
      id: id,
      no: stuinfo.no,
      classname:stuinfo.classname,
      username:stuinfo.username,
      despname:stuinfo.depname,
      majornamr:stuinfo.majorname
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
  exit: function(e) {
    wx.showModal({
      title: '提示',
      content: '是否确认退出',
      success: function(res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          wx.clearStorageSync();
          //页面跳转
          wx.redirectTo({
            url: '../../login/login',
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  
})