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
  $("#qukLink").click(function () {
    $("#Code").css("display","block");
    });
  $("#finish").click(function (e) {
    e.preventDefault();
    location.href = "shoppingcar.html?loginName=" + loginName;
  });
});
//实现用户登录结束
/*************页面跳转************/


//取消模态框
$(".off").click(function (e) {
  e.preventDefault();
  $("#Code").css("display","none");
});
//页面进入方式
$('body').addClass('animated bounceIn');
//面向对象实现悬停小图片对应的大图片发生改变
var zoom={
  init:function(){
    $(".cutPic").on(
      "mouseover","li>img",this.changeImgs);
  },
  changeImgs:function(e){//根据小图片更换中图片
    //获得目标元素的src属性，保存在变量src中
    var src=$(e.target).attr("src");
    //查找src中最后一个.的位置i
    var i=src.lastIndexOf(".");
    //设置id为mImg的元素的src为:
    //src从开头-i 拼上-m  拼上src从i到结尾
    $("#mImg").attr(
      "src",src.slice(0,i)+"m"+src.slice(i));
  }
};
zoom.init();

//选中商品后边框的变化
$(".douClick").on("click","li a",function(){
  var $target=$(this);
  $target.css("border","1px solid #2AAD6F").parent().siblings("li").children("a").css("border","1px solid transparent");
});