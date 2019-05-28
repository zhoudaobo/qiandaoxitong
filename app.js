//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    // wx.getSystemInfo({
    //   success: e => {
    //     this.globalData.StatusBar = e.statusBarHeight;
    //     let custom = wx.getMenuButtonBoundingClientRect();
    //     this.globalData.Custom = custom;
    //     this.globalData.CustomBar = custom.bottom + custom.top - e.statusBarHeight;
    //   }
    // })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  
  globalData: {
    userInfo: null,
    id:'',
    username:'',
    ColorList: [{
      title: '铜鼓广场',
      name: 'red',
      url: 'http://www.kluniv.edu.cn/imagesv2/shipin_pic.png',
      color: '#e54d42'
    },
    {
      title: '人工湖',
      name: 'orange',
      url: 'https://gss3.bdstatic.com/-Po3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike116%2C5%2C5%2C116%2C38/sign=bb994a1a0ef3d7ca18fb37249376d56c/d439b6003af33a87caeb0d3ec45c10385343b50b.jpg',
      color: '#f37b1d'
    },
    {
      title: '鼓楼',
      name: 'yellow',
      url: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike92%2C5%2C5%2C92%2C30/sign=4d0f326f00087bf469e15fbb93ba3c49/8435e5dde71190ef265c9ffbcc1b9d16fdfa606a.jpg',
      color: '#fbbd08'
    },
    {
      title: '五四广场',
      name: 'olive',
      url: 'http://img2.imgtn.bdimg.com/it/u=2689723153,2206172141&fm=15&gp=0.jpg',
      color: '#8dc63f'
    },
    {
      title: '樱花园',
      name: 'green',
      url: 'http://img2.imgtn.bdimg.com/it/u=2498100556,2075818124&fm=26&gp=0.jpg',
      color: '#39b54a'
    },
    {
      title: '体育馆',
      name: 'cyan',
      url: 'http://img0.imgtn.bdimg.com/it/u=155323940,3942741694&fm=26&gp=0.jpg',
      color: '#1cbbb4'
    },
    {
      title: '后操场',
      name: 'blue',
      url: 'http://img2.imgtn.bdimg.com/it/u=1023401046,1495911320&fm=26&gp=0.jpg',
      color: '#0081ff'
    },
    {
      title: '校门',
      name: 'purple',
      url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=112286542,3712680221&fm=27&gp=0.jpg',
      color: '#6739b6'
    },
    {
      title: '桂花大道',
      name: 'mauve',
      url: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2246626385,2633380644&fm=27&gp=0.jpg',
      color: '#9c26b0'
    },
    ]
  }
})