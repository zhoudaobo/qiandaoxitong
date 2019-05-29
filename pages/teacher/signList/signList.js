import http from '../../../utils/api' // 引入api接口管理文件
var myUtils = require("../../../utils/myUtils.js");
var windowW = 0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    subjcname: '',
    grade: '',
    studentinfo: [],
    classid: '',
    subject: '',
    teacher: '',
    id: '',
    wqd: '',
    yq: ''
  },


  //定义记录初始屏幕宽度比例，便于初始化
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    var id = myUtils.get('id')
    var teachinfo = myUtils.get('teachinfo')
    var tcsuid = teachinfo.tcsuid
    var id = options.id
    var that = this;
    that.setData({
      grade: options.grade,
      subjcname: options.subjcname,
      classid: options.classid,
      subject: options.subject,
      teacher: options.teacher,
      id: id
    })
    // console.log(this.data.id1)
    // console.log(this.data.studentinfo[0][0])
    // var status
    //获取签到后的学生信息
    http.gettsign({
      data: {
        classid: that.data.classid,
        tcsuid: that.data.id,
      },
      success: res => {
        var list = res.list
        console.log(list)

        let length = list.length
        // console.log(length)
        var wqd=0
        var yq = 0
        for (let i = 0; i<length; i++) {
          var status = list[i].status
          if (status == 0) {
            wqd = wqd + 1
          } else if (status == 1){
           yq = yq + 1
          }
        }
        console.log(wqd + 'qwwq' + 'ertet' + yq)
        that.setData({
          studentinfo: list,
          wqd: wqd,
          yq: yq
        })
      }
    })

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },
  showModal: function(e) {
    // console.log(e)
    var grade = e.currentTarget.dataset.grade
    // var coursename = e.currentTarget.dataset.coursename
    var classid = this.data.classid
    var subject = this.data.subject
    var teacher = this.data.teacher
    var subjcname = this.data.subjcname
    var id = this.data.id
    // console.log(teacher)
    wx.navigateTo({
      url: '../../teacher/SignIn/SignIn?subjcname=' + subjcname + '&grade=' + grade + '&classid=' + classid + '&subject=' + subject + '&teacher=' + teacher + '&id=' + id
    })
  },
  onPullDownRefresh: function() {
    wx.setNavigationBarTitle({
      title: '正在刷新',
    })
    // wx.setNavigationBarColor({
    //   frontColor: 'red',
    //   backgroundColor: 'blue',
    // })
    wx.showNavigationBarLoading() //在标题栏中显示加载
    http.gettsign({
      data: {
        subject: this.data.subject,
        classid: this.data.classid,
      },
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {},
      complete: function(res) {
        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh();
      }
    })
  }
})