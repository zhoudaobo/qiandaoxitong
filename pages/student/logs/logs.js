
import http from '../../../utils/api' // 引入api接口管理文件
var windowW = 0;

Page({
  data: {
    prex: '',
    sign: '',
    nsign: '',
  
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var prex = options.prex
    this.setData({
      // prex:prex
    })
    // http.getgrade({
    //   data: {
    //     // prex:this.data.prex,
    //   },
    //   succes: res => {
    //     // var sign = res.sigin;
    //     // var nsign = res.nsign;
    //     this.setData({
    //       sign: sign,
    //       nsign: nsign
    //     })
    //   }

    // })
    // 屏幕宽度
    // this.setData({
    //   imageWidth: wx.getSystemInfoSync().windowWidth
    // });
    // console.log(this.data.imageWidth);

    //计算屏幕宽度比列
    // windowW = this.data.imageWidth / 375;
    // console.log(windowW);

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(e) {
    // columnCanvas
  //   new wxCharts({
  //     canvasId: 'columnCanvas',
  //     type: 'line',
  //     animation: true,
  //     categories: [3, 4, 5, 6, 7], //横坐标
  //     series: [{
  //       name: '签到次数',
  //       data: [15.00, 20.00, 45.00, 37.00],//值一
  //       format: function(val, name) {
  //         return val.toFixed(2) + '次';
  //       }
  //     }, {
  //       name: '未签次数',
  //       data: [6.00, 9.00, 20.00, 45.00],//值二
  //       format: function(val, name) {
  //         return val.toFixed(2) + '次';
  //       },

  //     }],
  //     yAxis: {
  //       format: function(val) {
  //         return val + '次';
  //       },
      
  //       min: 0
  //     },
  //     xAxis: {
  //       disableGrid: false,
  //       type: 'calibration'
  //     },
  //     extra: {
  //       column: {
  //         width: 15
  //       }
  //     },
  //     width: (375 * windowW),
  //     height: (200 * windowW),
  //   });
  // },
  // showModal(e) {
  //   this.setData({
  //     modalName: e.currentTarget.dataset.target
  //   })
  // },
  // hideModal(e) {
  //   this.setData({
  //     modalName: null
  //   })
  // },
  // gridchange: function (e) {
  //   console.log(e)
  //   this.setData({
  //     gridCol: e.detail.value
      
  //   });
  },

})