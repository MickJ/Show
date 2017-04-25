/**
 * Created by bjwsl-001 on 2016/10/30.
 */
$("#pageStart").load("data/header.php");
$("#pageEnd").load("data/footer.php");


/**功能点1：获取上一个页面传递的登录用户名**/
var s = location.search;
var loginName = s.substring(s.indexOf('=') + 1);
$(function () {
  $.ajax({
    type:"GET",
    success: function (txt, msg, xhr) {
      $('#succ').html("欢迎回来："+loginName);
    }
  });
  $("#R9Link").click(function (e) {
    e.preventDefault();
    location.href = "R9_detail.html?loginName=" + loginName;
  });
});
//实现用户登录结束
/*************页面跳转************/


//*********************************************************



//通过angularJS加载 页面所需要的数据 开始
//声明模块
  var app = angular.module("myApp", ["ng"]);

//声明控制器
  app.controller("myCtrl", function ($scope) {
    //**************R系列图片信息通过angularJS 加载到页面上**************
    $scope.RimagesList = [
      {imgurl: 'images/R01.png', proName: 'R9s', say: '这一刻,更清晰'},
      {imgurl: 'images/R02.png', proName: 'R9', say: '超窄边框|1600万像素|闪充'},
      {imgurl: 'images/R03.png', proName: 'R9 Plus', say: '指纹识别 | 4120mAh大电池 | 闪充'}
    ];
    //**************A系列图片信息通过angularJS 加载到页面上**************
    $scope.AimagesList = [
      {imgurl: 'images/R03.png', proName: 'A59s金', say: '即将上市'},
      {imgurl: 'images/R02.png', proName: 'A59金', say: '正面指纹一触倾心'},
      {imgurl: 'images/R01.png', proName: 'A37', say: '全新美颜4.0'}
    ];
    //**************Find系列图片信息通过angularJS 加载到页面上**************
    $scope.FindimagesList = [
      {imgurl: 'images/find01.png', proName: 'Find7 标准版', say: '2K屏|1300万像素'},
      {imgurl: 'images/find02.png', proName: 'Find7 轻装版', say: '超清像素|闪充'}
    ];
    //**************N系列图片信息通过angularJS 加载到页面上**************
    $scope.NimagesList = [
      {imgurl: 'images/N3.png', proName: 'N3', say: '1600万旋转摄像头|闪充'},
      {imgurl: 'images/N1mini.png', proName: 'N1mini', say: '1600万旋转摄像头|个性多彩'}
    ];
    $scope.NBimagesList = [
      {imgurl: 'images/tese01.jpg'},
      {imgurl: 'images/tese02.jpg'}
    ];
    $scope.product = [
      'images/product01.jpg',
      'images/product_text01.png',
      'images/product02.jpg',
      'images/product_text02.png',
      'images/product03.jpg',
      'images/product_text03.png'
    ];


    //为按钮添加add方法 实现增添图片数据功能
    $scope.add1 = function () {
      $scope.RimagesList.push({imgurl: 'images/N3.png', proName: 'N3', say: '1600万旋转摄像头|闪充'});
    }
    $scope.add2 = function () {
      $scope.AimagesList.push({imgurl: 'images/N3.png', proName: 'N3', say: '1600万旋转摄像头|闪充'});
    }
    $scope.add3 = function () {
      $scope.FindimagesList.push({imgurl: 'images/N3.png', proName: 'N3', say: '1600万旋转摄像头|闪充'});
    }
    $scope.add4 = function () {
      $scope.NimagesList.push({imgurl: 'images/N3.png', proName: 'N3', say: '1600万旋转摄像头|闪充'});
    }

  });


//通过angularJS加载 页面所需要的数据 结束


//页面元素悬停时的动画效果
//构造一个函数 传入id 和想要的动画效果
  var animate = function (id, val) {
    id.hover(
      function () {
        $(this).addClass("animated " + val);
      },
      function () {
        $(this).removeClass("animated " + val);
      });
  };

//**********************为php加载出来的页面元素添加动画效果********************************
  var animt = $('.tese img');
  animate(animt, "swing");
//待解决  无法找到页面元素
//**********************为php加载出来的页面元素添加动画效果*******************************


  /*********当页面滚动到某一位置时添加动画效果***********/
  $('body').addClass('animated rollIn');
  $(window).scroll(function () {
    var dis = document.body.scrollTop;
    if (dis >= 300) {
      $('#main .onload img').addClass('animated rollIn');
    }
    if (dis >= 600) {
      $('#main .onload2 img').addClass('animated slideInLeft');
    }
    if (dis >= 1000) {
      $('#main .onload3 img').addClass('animated bounceInLeft');
    }
    if (dis >= 1400) {
      $('#main .onload4 img').addClass('animated slideInRight');
    }
  });
