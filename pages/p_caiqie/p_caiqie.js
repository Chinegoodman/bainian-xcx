// pages/p_caiqie/p_caiqie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    choseimgbtnstatus:true,
    imgoriginal:'',
    picw:'0',
    pich:'0',
    // 图片宽比高的比值
    wbih:1,
    originalwbih:0.59,

    // 根据宽高比的不同调用不同的图片样式
    imgwhstyle:'',


    // scrollview组件滚动时获取需要截取的起始坐标点
    scrollLeft:0,
    scrollTop:0,
  },
  // http://a.hiphotos.baidu.com/image/h%3D300/sign=71f6f27f2c7f9e2f6f351b082f31e962/500fd9f9d72a6059f550a1832334349b023bbae3.jpg
  choseimgfun:function(){
    var _this=this;
    _this.setData({
      choseimgbtnstatus: false
    })
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有

      success: function (res) {
        var tempFilePaths = res.tempFilePaths;
        _this.setData({
          imgoriginal: tempFilePaths[0]
        })
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success: function (res) {
            console.log(res.width)
            console.log(res.height)
            _this.setData({
              wbih: (res.width / res.height).toFixed(2)
            })
            if (_this.data.wbih > _this.data.originalwbih){
              console.log('宽高比要比预设的宽');
              _this.setData({
                // imgwhstyle: 'imgwhstyleH'
                'picw': 1005 * _this.data.wbih+'rpx',
                'pich':'1005rpx'
              })
            } else if (_this.data.wbih < _this.data.originalwbih) {
              console.log('宽高比要比预设的窄')
              _this.setData({
                // imgwhstyle: 'imgwhstyleW'
                'picw': '595rpx',
                'pich': (595 / _this.data.wbih).toFixed(0) + 'rpx',
              })
            }else{
              console.log('宽高比要和预设的一样')
              _this.setData({
                // imgwhstyle: 'imgwhstyleW'
                'picw': '595rpx',
                'pich': '1005rpx'
              })
            }
          }
        })
        // wx.uploadFile({
        //   url: 'https://example.weixin.qq.com/upload', //仅为示例，非真实的接口地址
        //   filePath: tempFilePaths[0],
        //   name: 'file',
        //   formData: {
        //     'user': 'test'
        //   },
        //   success: function (res) {
        //     // var data = res.data
        //     //do something

        //     // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        //     var tempFilePaths = res.tempFilePaths;
        //     _this.setData({
        //       imgoriginal: tempFilePaths
        //     })
        //   }
        // })
      }
    })
  },
  scrollfun:function(e){
    var _this=this;
    // console.log(e.detail);
    _this.setData({
      scrollLeft: e.detail.scrollLeft,
      scrollTop: e.detail.scrollTop,
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