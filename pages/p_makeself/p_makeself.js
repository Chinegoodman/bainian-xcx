// pages/p_makeself/p_makeself.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    yourname:"某某某",
    hisname:'TA某某某',
    // zhufuyu: '恭贺新年',
    zhufuyu: '',
    mubanstatus:'预设',
    // 预设背景图片路径
    // mubanysbgpic: 'http://ooo0o.com/images/bgpic10.png',
    mubanysbgpic: [
      {
        url: 'http://ooo0o.com/images/bgpic7.png',
        status: true
      },
      {
        url: 'http://ooo0o.com/images/bgpic8.png',
        status: false
      },
      {
        url: 'http://ooo0o.com/images/bgpic9.png',
        status: false
      },
      {
        url: 'http://ooo0o.com/images/bgpic10.png',
        status: false
      },
      {
        url: 'http://ooo0o.com/images/bgpic1.png',
        status: false
      },
    ],
    mubanysbgpicselectindex: 0,

    mubanzdybgpic: 'http://ooo0o.com/images/bgpic13.png',
    
    // 音乐数据
    musarray: {
      title:[
        'fade', 'Summit', 'ForLove', 'MeandMyBrokenHeart','Nebula'
      ],
      url:[
        'https://www.ooo0o.com/demo/music/fade.mp3',
        'https://www.ooo0o.com/demo/music/Summit.mp3',
        'https://www.ooo0o.com/demo/music/ForLove.mp3',
        'https://www.ooo0o.com/demo/music/MeandMyBrokenHeart.mp3',
        'https://www.ooo0o.com/demo/music/Nebula.mp3',
      ]
    },
    mus_index: 0,

    // textarea字数限制
    textarealast:100,
    textarealimit:100,

    // 模板单选数据
    radioitems: [
      { 'tips': '预设', status: 'true' },
      { 'tips':'自定义'}
    ],

    // 模板自定义背景图片显示状态
    mubancutstatus:false,
    // 背景音乐默认是暂停状态
    musplaying:false,
  },
  // 自定义模板背景图的点击事件
  mubanzdyclick:function(){
    // wx.navigateTo({
    //   url: '../p_caiqie/p_caiqie',
    // })
    wx.showToast({
      title: '这是测试版未添加',
      icon: 'none',
      image: '',
      duration: 2000,
      mask: true,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  // 底部得生成祝福点击事件
  zhufudone:function(){
    
  },
  // 判断textarea里的字数进行限制和提示
  textareachange:function(){

  },
  // 模板单选选择器事件
  radioChange: function (e) {
    var _this=this;
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    if (_this.data.mubanstatus!=e.detail.value){
      // 48行是错误的赋值方法!!!
      // _this.data.mubanstatus = e.detail.value;
      _this.setData({
        'mubanstatus': e.detail.value
      })
    }
  },
  // 模板单选选择器事件bgpic
  radioChangemubanysbgpic: function (e) {
    var _this = this;
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    // if (_this.data.mubanysbgpicselectindex != e.detail.value) {
    //   // 48行是错误的赋值方法!!!
    //   // _this.data.mubanstatus = e.detail.value;
    //   _this.setData({
    //     'mubanysbgpicselectindex': e.detail.value
    //   })
    // }
    _this.setData({
      'mubanysbgpicselectindex': e.detail.value
    })
  },


  // 音乐选择器事件
  bindPickerChange: function (e) {
    wx.pauseBackgroundAudio();
    var _this=this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      mus_index: e.detail.value
    })
    wx.playBackgroundAudio({
      dataUrl: _this.data.musarray.url[_this.data.mus_index],
    })
    this.setData({
      musplaying: true
    })
  },
  // 背景音乐切换
  bgmuschange: function () {
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
    wx.pauseBackgroundAudio()
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
    wx.pauseBackgroundAudio();
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    wx.pauseBackgroundAudio();
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