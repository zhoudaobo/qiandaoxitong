// pages/home/home.js
var app = getApp()
Page({
  data: {
    studentinfo: [{ 'no': '计算机科学与技术', 'username': '大数据'}, { 'no': '计算机科学与技术', 'username': '大数据' }, { 'no': '计算机科学与技术', 'username': '大数据',}],
 
    ColorList: app.globalData.ColorList ,
    navbar: ['学校风光','学校概括', '所设专业'],
    //count:[0,2,3],                                  //记录不同状态记录的数量
    currentTab: 4,
    cardCur: 0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'http://www.kluniv.edu.cn/imagesv2/shipin_pic.png'
    }, {
      id: 1,
      type: 'image',
        url: 'http://www.kluniv.edu.cn/__local/8/FE/BC/B49FE03E353A1AC227429AF655F_43CE6F67_1E29C.jpeg',
    }, {
      id: 2,
      type: 'image',
        url: 'http://www.kluniv.edu.cn/__local/7/C7/19/1E7C1FABD616BD802AAD014232B_0C04CEAE_1FDEB.jpg'
    }, {
      id: 3,
      type: 'image',
        url: 'http://www.kluniv.edu.cn/__local/5/90/67/C2BB288C8DC6D373535DD47CB36_1BFBC995_83143.jpg'
    }, {
      id: 4,
      type: 'image',
        url: 'http://www.kluniv.edu.cn/__local/E/BE/C0/72E2BAFFA3E5B03947EC2914D27_5008E694_1A7AA.jpg'
    }, {
      id: 5,
      type: 'image',
        url: 'http://img4.imgtn.bdimg.com/it/u=1348731432,335214772&fm=26&gp=0.jpg'
    }, {
      id: 6,
      type: 'image',
        url: 'http://img0.imgtn.bdimg.com/it/u=334960003,522352793&fm=26&gp=0.jpg'
    }],
  },
  // 导航切换监听
  navbarTap: function (e) {
    var that = this;
    that.setData({
      currentTab: e.currentTarget.dataset.idx,
      // typeItem: that.data.navbar[that.data.currentTab]
    })
  },

}) 