// pages/student/notice/noticelist.js
import http from '../../../utils/api' // 引入api接口管理文件
Page({

   /**
    * 页面的初始数据
    */
   data: {
     notice_per_name:'',
     notice_time:'',
     notice_subject:''
   },

   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function (options) {
console.log(options)
     
this.setData({
  notice_per_name:options.notice_per_name,
  notice_time:options.notice_time,
  notice_subject:options.notice_subject,
  notice_title: options.title,
})
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

   }
})