
//请求页面头部
$("#pageStart").load("data/header.php");
$("#pageEnd").load("data/footer.php");
//请求页面头部

//加载页面时候的效果
$('body').addClass('animated zoomIn');
$(
  $('#myModal').modal('show')
);

/*广告图片数组*/
/*******************应用jquery面向对象的广告轮播
 var imgs = [
 {"i": 0, "img": "images/banner1.jpg"},
 {"i": 1, "img": "images/banner2.jpg"},
 {"i": 2, "img": "images/banner3.jpg"},
 {"i": 3, "img": "images/banner4.jpg"},
 {"i": 4, "img": "images/banner2.jpg"},
 ];
 var slider = {
  LIWIDTH: 0,//保存每个li的宽度,其实就是#slider的宽
  DURATION: 1000,//动画的总时间
  WAIT: 2000,//自动轮播之间的等待时间
  timer: null,//保存一次性定时器序号
  canAuto: true,//保存是否可以自动轮播
  init: function () {
    this.LIWIDTH = parseFloat(
      $("#slider").css("width")
    );
    this.updateView();
    //为id为indexs的ul添加鼠标进入事件代理，只有不是hover的li才能响应事件
    $("#indexs").on("mouseover", "li:not(.hover)", function (e) {
      //获得目标元素$target
      var $target = $(e.target);
      //调用move方法，传入要移动的个数：
      //目标元素的内容-目标元素的兄弟中class为hover的li的内容
      this.move($target.html()
      - $target.siblings(".hover").html());
    }.bind(this));
    //当鼠标进入slider时，将canAuto改为false
    //当鼠标移出slider时，将canAuto改为true
    $("#slider").hover(
      function () {
        this.canAuto = false;
      }.bind(this),
      function () {
        this.canAuto = true;
      }.bind(this)
    )
    this.autoMove();
  },
  autoMove: function () {//启动自动轮播
    //启动一次性定时器：
    this.timer = setTimeout(function () {
        if (this.canAuto) {
          this.move(1);//移动一个
        } else {
          this.autoMove();//继续等待
        }
      }.bind(this),
      this.WAIT
    );
  },
  move: function (n) {
    clearTimeout(this.timer);//停止一次性定时器
    this.timer = null;
    $("#imgs").stop(true);//停止动画，防止叠加
    //获得#imgs当前的left,转为浮点数
    var left = parseFloat($("#imgs").css("left"));
    if (n < 0) {//如果n<0，右移，先改数组，再移动
      n *= -1;//将n转为正数
      //先删除结尾的n个元素，拼接到开头
      imgs = imgs.splice(imgs.length - n, n).concat(imgs);
      this.updateView();//更新界面
      //修改#imgs的left为left-n*LIWIDTH
      $("#imgs").css("left", left - n * this.LIWIDTH);
      //启动动画，在DURATION时间内，left移动到0
      $("#imgs").animate({left: "0"}, this.DURATION, this.autoMove.bind(this));
    } else {//否则,左移，先移动，再改数组
      //让#imgs的ul在DURATION时间内，left变为-n*LIWIDTH
      $("#imgs").animate(
        {left: -n * this.LIWIDTH + "px"},
        this.DURATION,
        //在动画结束后调用endMove，替换this,传入参数n
        this.endMove.bind(this, n)
      );
    }
  },
  endMove: function (n) {
    //删除imgs开头的n个元素,再拼到结尾
    imgs = imgs.concat(imgs.splice(0, n));
    //更新页面
    this.updateView();
    //设置#imgs的left为0
    $("#imgs").css("left", 0);
    this.autoMove();//启动自动轮播
  },
  updateView: function () {//将数组中的元素更新到页面
    //遍历imgs数组中每个图片对象,同时声明空字符串html
    for (var i = 0, html = "", idxs = ""; i < imgs.length; i++) {
      html += "<li><img class='img-responsive' style='width:100% ;height:568px;' src=' " + imgs[i].img + " '></li>";
      idxs += "<li>" + (i + 1) + "</li>"
    }
    //设置id为imgs的内容为html,再设置其宽为LIWIDTH*img的元素个数
    $("#imgs").html(html)
      .css("width", this.LIWIDTH * imgs.length + "px");
    //设置id为indexs的内容为idxs
    $("#indexs").html(idxs);
    //获得indexs下的和imgs中第一个元素的i属性对应的li,设置其class为hover,选择兄弟中的class为hover的li，清除其class
    $("#indexs>li:eq(" + imgs[0].i + ")")
      .addClass("hover")
      .siblings(".hover").removeClass("hover");
  }
}
 slider.init();*/

//实现用户登录开始
var loginName = null;
/**功能点2：点击登录按钮，异步验证登录信息**/
$('#bt-login').click(function () {
  var $uname = $("#uname").val();
  var $upwd = $("#upwd").val();
  var inputData = "uname=" + $uname + "&upwd=" + $upwd;
  //异步提交请求，进行验证
  $.ajax({
    type: 'POST',
    url: 'data/login.php',
    data: inputData,
    success: function (txt, msg, xhr) {
      if (txt == 'ok') {  //登录成功
        $('#myModal').modal('hide');
        loginName = $('[name="uname"]').val();
        $('#succ').html('欢迎回来：' + loginName); //修改页头上的欢迎消息
      } else { //登录失败
        $('.modal .alert').html('登录失败！请重新输入：');
      }
    }
  });

  //实现用户登录结束
  /*************页面跳转************/
  $("#product").click(function (e) {
    e.preventDefault();
    location.href = "product.html?loginName=" + loginName;
  });
});
//*********************************************************


