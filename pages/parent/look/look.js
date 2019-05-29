import * as echarts from '../../../utils/ec-canvas/echarts'; //引入echarts.js
import http from '../../../utils/api'
var myUtils = require("../../../utils/myUtils.js");
var app = getApp();
var type = ''
var dataList = [1, 2, 3, 4, 5, 6, 8]
var k = 0
var Chart = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    list1: [],
    type: 'column',
    ec: {
      lazyLoad: true // 延迟加载
    },
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ec: {
      lazyLoad: true // 延迟加载
    },
    wlist: [],
    classid: '',
    gridCol: 3,
    skin: false,
    dataList: [],
    dataList1: [],
    type: 'column'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    var id = myUtils.get('id')
    http.getpare({
      data: {
        id: id
      },
      success: res => {
        var list = res.data;
        var index = res.data.length;
        for (let i = 0; i < index; i++) {
          var a = res.data[i].class_time.split(",");
          var xqj = a[0];
          var djj = a[1];
          list[i]['xqj'] = xqj,
            list[i]['djj'] = djj
          that.setData({
            wlist: list,
          })
        }
        console.log(list)
      }
    })
    this.echartsComponnet = this.selectComponent('#mychart');
    this.getData(); //获取数据
  },
  getData: function () {
    /**
     * 此处的操作：
     * 获取数据json
     */
    if (k % 2) {
      dataList = [1, 2, 3, 4, 5, 6];
    } else {
      dataList = [7, 6, 9, 2, 5, 6];
    }
    k++;
    //如果是第一次绘制
    if (!Chart) {
      this.init_echarts(); //初始化图表
    } else {
      this.setOption(Chart); //更新数据
    }
    var id = myUtils.get('id')
    http.datasee({
      data: {
        id: id
      },
      success: (res) => {
        console.log(res)
        var list = []
        var list1 = []
        var length = res.list.length;
        for (let i = 0; i < length; i++) {
          var coursename = res.list[i].coursename;
          var count = res.list[i].count;
          // count.push(count);
          list.push(coursename);
          list1.push(count)
          console.log(list1)
          this.setData({
            list: list,
            list1: list1
          })
        }
        dataList = res.data;
        this.init_echarts(); //               
        // }
      }
    });
  },
  //初始化图表
  init_echarts: function () {
    this.echartsComponnet.init((canvas, width, height) => {
      // 初始化图表
      Chart = echarts.init(canvas, null, {
        width: width,
        height: height
      });
      Chart.setOption(this.getOption());
      this.setOption(Chart);
      // 注意这里一定要返回 chart 实例，否则会影响事件处理等
      return Chart;
    });
  },
  setOption: function (Chart) {
    Chart.clear(); // 清除
    Chart.setOption(this.getOption()); //获取新数据
  },
  getOption: function () {
    // 指定图表的配置项和数据
    var option = {
      xAxis: {
        type: 'category',
        data: this.data.list
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: this.data.list1,
        type: 'bar'
      }]
    }
    return option;
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