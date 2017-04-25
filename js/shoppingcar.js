/**功能点1：获取上一个页面传递的登录用户名**/
var s = location.search;
var loginName = s.substring(s.indexOf('=') + 1);
$(function () {
  $.ajax({
    type: "GET",
    success: function () {
      $('#succ').html("欢迎回来：" + loginName);
    }
  })
});
//实现用户登录结束
  /*************页面跳转************/


//*********************************************************
  /**功能点2：异步加载公用的页头和页尾**/
  $('#pageStart').load('data/header.php');
  $("#pageEnd").load('data/footer.php');

  /**功能点3：使用AngularJS添加**/
  //声明模块
  var app = angular.module('myApp', ['ng']);
  //声明控制器
  app.controller('myCtrl', function ($scope) {
    //初始化模型数据
    $scope.productList = [
      {imgUrl: "R9smini1.png", price: 2799, name: "R9s 黑色版", number: 1},
      {imgUrl: "small01.jpg", price: 99, name: "OPPO自拍杆", number: 1},
      {imgUrl: "small02.jpg", price: 199, name: "蓝牙耳机Q13", number: 1}
    ];
    //从购物车删除数据
    $scope.delete = function (index) {
      $scope.productList.splice(index, 1);
    };
    $scope.add = function () {
      angular.forEach($scope.productList,
        function (value, key) {
          value.number++;
        });
    };
    $scope.toSmall = function () {
      angular.forEach($scope.productList,
        function (value, key) {
          value.number--;
          if (value.number < 0) {
            value.number = 0
          }
        });
    };

    //总计的计算方法
    $scope.calTotal = function () {
      var totalNum = 0;
      angular.forEach($scope.productList,
        function (value, key) {
          totalNum += (value.number * value.price);
        });
      return totalNum;
    };
//            向购物车中添加商品
    $scope.addptr1 = function () {
      $scope.productList.push({imgUrl: "R01.png", price: 1799, name: "R9s 金色版", number: 1});
    };
    $scope.addptr2 = function () {
      $scope.productList.push({imgUrl: "find01.png", price: 1200, name: "Find7 标准版", number: 1});
    };
    $scope.addptr3 = function () {
      $scope.productList.push({imgUrl: "N3.png", price: 1799, name: "N3", number: 1});
    };
    $scope.addptr4 = function () {
      $scope.productList.push({imgUrl: "N1mini.png", price: 1799, name: "N1mini", number: 1});
    }

  });
