import * as echarts from '../../../utils/ec-canvas/echarts'; //引入echarts.js
import http from '../../../utils/api' // 引入api接口管理文件
const app = getApp()
var type=''
// var dataList = [1,2,3,4,5,6,8]
// var k = 0
// var Chart = null;
Page({
  data: {
    // ec: {
    //   lazyLoad: true // 延迟加载
    // },
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    classname: [{
      name: 'python'
    }, {
      name: 'python'
    }, {
      name: 'python'
      }, {
        name: 'python'
      }, {
        name: 'python'
      }, {
        name: 'python'
      }],
    iconList: [{
      icon: 'cardboardfill',
      color: 'red',
      badge: 120,
      name: 'VR'
    }, {
      icon: 'recordfill',
      color: 'orange',
      badge: 1,
      name: '录像'
    }, {
      icon: 'picfill',
      color: 'yellow',
      badge: 0,
      name: '图像'
    }, {
      icon: 'noticefill',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'upstagefill',
      color: 'cyan',
      badge: 0,
      name: '排行榜'
    }, {
      icon: 'clothesfill',
      color: 'blue',
      badge: 0,
      name: '皮肤'
    }, {
      icon: 'discoverfill',
      color: 'purple',
      badge: 0,
      name: '发现'
    }, {
      icon: 'questionfill',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'commandfill',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'brandfill',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
    gridCol: 3,
    skin: false,
    dataList:[],
    dataList1:[],
    type:'column'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 屏幕宽度
    // http.datasee({
    //   data: {},
    //   success: (res) => {
    //     console.log(res)
    //     dataList = res.data;
    //     this.init_echarts();//初始化图表
    //   }
    // }); 
    // this.echartsComponnet = this.selectComponent('#mychart');
    // this.getData(); //获取数据
  },
  // getData: function () {
  // 	/**
  // 	 * 此处的操作：
  // 	 * 获取数据json
  // 	 */
  //   if (k % 2) {
  //     dataList = [1, 2, 3, 4, 5, 6];
  //   } else {
  //     dataList = [7, 6, 9, 2, 5, 6];
  //   }
  //   k++;
  //   //如果是第一次绘制
  //   if (!Chart) {
  //     this.init_echarts(); //初始化图表
  //   } else {
  //     this.setOption(Chart); //更新数据
  //   }
  //    http.datasee({
  //       data: {},
  //       success: (res) => {
  //         console.log(res)
  //         dataList = res.data;
  //         this.init_echarts();//初始化图表
  //       }
  //     });  
  // },
  // //初始化图表
  // init_echarts: function () {
  //   this.echartsComponnet.init((canvas, width, height) => {
  //     // 初始化图表
  //     Chart = echarts.init(canvas, null, {
  //       width: width,
  //       height: height
  //     });
  //     // Chart.setOption(this.getOption());
  //     this.setOption(Chart);
  //     // 注意这里一定要返回 chart 实例，否则会影响事件处理等
  //     return Chart;
  //   });
  // },
  // setOption: function (Chart) {
  //   Chart.clear();  // 清除
  //   Chart.setOption(this.getOption());  //获取新数据
  // },
  // getOption: function () {
  //   // 指定图表的配置项和数据
  //   var option = {
  //     xAxis: {
  //       type: 'category',
  //       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  //     },
  //     yAxis: {
  //       type: 'value'
  //     },
  //     series: [{
  //       data: dataList,
  //       type: 'line'
  //     }]
  //   }
  //   return option;
  // },

/*,
   * 生命周期函数--监听页面显示
   */
  onShow: function(e) {
    // columnCanvas

  },
  showModal(e) {
    console.log(e)
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  gridchange: function (e) {
    this.setData({
      gridCol: e.detail.value
    });
  },
  gridswitch: function (e) {
    this.setData({
      gridBorder: e.detail.value
    });
  },
  menuBorder: function (e) {
    this.setData({
      menuBorder: e.detail.value
    });
  },
  menuArrow: function (e) {
    this.setData({
      menuArrow: e.detail.value
    });
  },
  menuCard: function (e) {
    this.setData({
      menuCard: e.detail.value
    });
  },
  switchSex: function (e) {
    this.setData({
      skin: e.detail.value
    });
  },

  inlook: function(){
    wx.navigateTo({
      url: '../logs/logs',

    })
  },

  // ListTouch触摸开始
  ListTouchStart(e) {
    this.setData({
      ListTouchStart: e.touches[0].pageX
    })
  },

  // ListTouch计算方向
  ListTouchMove(e) {
    this.setData({
      ListTouchDirection: e.touches[0].pageX - this.data.ListTouchStart > 0 ? 'right' : 'left'
    })
  },

  // ListTouch计算滚动
  ListTouchEnd(e) {
    if (this.data.ListTouchDirection == 'left') {
      this.setData({
        modalName: e.currentTarget.dataset.target
      })
    } else {
      this.setData({
        modalName: null
      })
    }
    this.setData({
      ListTouchDirection: null
    })
  },

})