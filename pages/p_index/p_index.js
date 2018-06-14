// pages/p_index/p_index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    musplaying: true,

    // swiper数据
    imgUrls: [
      // 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      // 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',


      // 'http://ooo0o.com/images/bgpic6.png',
      'http://ooo0o.com/images/bgpic7.png',
      'http://ooo0o.com/images/bgpic8.png',
    ],
    indicatorDots: true,
    autoplay: false,
    interval: 7000,
    duration: 1000,
    swipointcolor:'rgba(26,173,22,0.9)',
    swiactivepointcolor: 'rgba(0,0,0,1)',
    // swiper数据

  },
  // 页面跳转
  makeself:function(){
    wx.navigateTo({
      url: '../p_makeself/p_makeself',
    })
  },
  gotorobot:function(){
    wx.navigateTo({
      url: '../p_talktorobot/p_talktorobot',
    })
  },
  makeduilian: function () {
    wx.navigateTo({
      url: '../p_makeduilian/p_makeduilian',
    })
  },
  // 背景音乐切换
  bgmuschange:function(){
    var _this = this;
    console.log('listenerButtonPlay')
    if (_this.data.musplaying) {
      // musplaying==true正在播放
      _this.setData({
        musplaying: false
      })
      wx.pauseBackgroundAudio()
    } else {
      // musplaying==false停止播放
      _this.setData({
        musplaying: true
      })
      wx.playBackgroundAudio()
    }
  },
  // swiper方法集合
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.playBackgroundAudio({
      dataUrl: 'https://www.ooo0o.com/demo/music/fade.mp3',
      title: 'fade',
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (this.data.musplaying) {
      wx.playBackgroundAudio()
    }

    // this.bgmuschange();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    wx.stopBackgroundAudio();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.stopBackgroundAudio();
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