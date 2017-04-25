/**
 * Created by bjwsl-001 on 2016/10/31.
 */

/**功能点1：获取上一个页面传递的登录用户名**/
var s = location.search;
var loginName = s.substring(s.indexOf('=') + 1);
$(function () {
  $("#buyR9Link").click(function (e) {
    e.preventDefault();
    location.href = "R9sBlack.html?loginName=" + loginName;
  });
});
//实现用户登录结束
/*************页面跳转************/


//*********************************************************


//为顶部图片添加动画 进入页面图片从底部飞入
$('#top .topPic').addClass('animated fadeInUp');


//为页面添加滚动事件 实现随着页面滚动条的滚动 为图片添加动画效果
//高级函数封装方法 判断滚动条方向开始
function scroll(fn) {
  var beforeScrollTop = document.body.scrollTop,
    fn = fn || function () {
      };
  window.addEventListener("scroll", function () {
    var afterScorllTop = document.body.scrollTop,
      delta = afterScorllTop - beforeScrollTop;
    if (delta === 0) return false;
    fn(delta > 0 ? "down" : "up");
    beforeScrollTop = afterScorllTop;
  }, false);
}
//高级函数封装方法 判断滚动条方向结束
//判断滚动条方向函数调用 ---------->实现预期效果
var imgScroll_1 = $("#top img:nth-child(1)");//第一层图片id
var imgScroll_2 = $("#top img:nth-child(2)");//第一层图片id
var imgScroll_3 = $("#top img:nth-child(3)");//第一层图片id
var imgScroll_4 = $("#main .PicSty img:nth-child(1)");//第二层图片id
var imgScroll_5 = $("#main .PicSty img:nth-child(2)");//第二层图片id
var span_Num = $("#main .imgRotate span");//第三层文字的id
var opacity = 1, translate3dLeft_01 = 40;//第一层图片声明的变量
var topPic1 = 31, leftPic1 = 97;//第二层图片声明的变量
var topPic2 = 90, leftPic2 = 437;//第二层图片声明的变量
var spanNum=0;//第三层的数字自增
var three1=15,three2=-9,three3=10;
var threeImg1=$(".voocSty2>div>img:nth-child(1)"),
    threeImg2=$(".voocSty2>div>img:nth-child(2)"),
    threeImg3=$(".voocSty2>div>img:nth-child(3)");

$(window).scroll(function () {
    var dis = document.body.scrollTop;

    if (dis >= 0 && dis <= 1400) {
      scroll(function (direction) {
        if (direction == "down") {
          //第一张图片的透明度效果开始
          opacity -= 0.002;
          imgScroll_1.css("opacity", opacity);
          if (opacity <= 0) {
            opacity = 0;
            imgScroll_1.css("opacity", 0);
          }
          //第一张图片的透明度效果结束
          //第二张图片的3D效果开始
          translate3dLeft_01 -= 0.01;
          imgScroll_2.css("transform", "translate3d(-50%," + translate3dLeft_01 + "%,0px) scale(1)");
          imgScroll_3.css("transform", "translate3d(-50%," + translate3dLeft_01 + "%,0px) scale(1)");
          if (translate3dLeft_01 < 0) {
            translate3dLeft_01 = 0;
            imgScroll_2.css("transform", "translate3d(-50%,0%,0px) scale(1)");
            imgScroll_3.css("transform", "translate3d(-50%,0%,0px) scale(1)");
          }
          //第二张图片的3D效果结束
        }
        if (direction == "up") {
          //第一张图片的透明度效果开始
          opacity += 0.002;
          imgScroll_1.css("opacity", opacity);
          if (opacity >= 1) {
            opacity = 1;
            imgScroll_1.css("opacity", 1);
          }
          //第一张图片的透明度效果结束
          //第二张图片的3D效果开始
          translate3dLeft_01 += 0.01;
          imgScroll_2.css("transform", "translate3d(-50%," + translate3dLeft_01 + "%,0px) scale(1)");
          imgScroll_3.css("transform", "translate3d(-50%," + translate3dLeft_01 + "%,0px) scale(1)");
          if (translate3dLeft_01 > 40) {
            translate3dLeft_01 = 40;
            imgScroll_2.css("transform", "translate3d(-50%,40%,0px) scale(1)");
            imgScroll_3.css("transform", "translate3d(-50%,40%,0px) scale(1)");
          }
          //第二张图片的3D效果结束
        }
      })
    }
    //***********************实现导航条的固定定位**********************
    if (dis >= 2000) {
      $("#main .nav").css("position", "fixed");
      $("#main .nav").css("left", "19.2%");
      $("#main .nav").css("background", "#fff");
      $("#main .nav").css("z-index", "100");
    } else {
      $("#main .nav").css("position", "inherit");
      $("#main .nav").css("left", "0");
    }
    //***********************实现导航条的固定定位结束**********************
    //***********************第二层图片的动画效果开始**********************
    if (dis >= 1700 && dis <= 3000) {
      scroll(function (direction) {
        if (direction == "down") {
          //第一张图片的top left效果开始
          topPic1 += 0.03;
          leftPic1 -= 0.01;
          imgScroll_4.css("top", topPic1);
          imgScroll_4.css("left", leftPic1);
          if (topPic1 >= 200) {
            topPic1 = 200;
            imgScroll_4.css("top", 200);
          }
          if (leftPic1 <= 25) {
            leftPic1 = 25;
            imgScroll_4.css("left", 25);
          }
          //第一张图片的top left效果结束
          //第二张图片的top left效果开始
          topPic2 -= 0.03;
          leftPic2 += 0.01;
          imgScroll_5.css("top", topPic2);
          imgScroll_5.css("left", leftPic2);
          if (topPic2 <= -31) {
            topPic2 = -31;
            imgScroll_5.css("top", -31);
          }
          if (leftPic2 >= 510) {
            leftPic2 = 510;
            imgScroll_5.css("left", 510);
          }
          //第二张图片的top left效果结束
        }
        if (direction == "up") {
          //第一张图片的效果开始
          topPic1 -= 0.03;
          leftPic1 += 0.01;
          imgScroll_4.css("top", topPic1);
          imgScroll_4.css("left", leftPic1);
          if (topPic1 <= 31) {
            topPic1 = 31;
            imgScroll_4.css("top", 31);
          }
          if (leftPic1 >= 97) {
            leftPic1 = 97;
            imgScroll_4.css("left", 97);
          }
          //第一张图片的效果结束
          //第二张图片的3D效果开始
          topPic2 += 0.03;
          leftPic2 -= 0.01;
          imgScroll_5.css("top", topPic2);
          imgScroll_5.css("left", leftPic2);
          if (topPic2 >= 90) {
            topPic2 = 90;
            imgScroll_5.css("top", 90);
          }
          if (leftPic2 <= 437) {
            leftPic2 = 437;
            imgScroll_5.css("left", 437);
          }
          //第二张图片的3D效果结束
        }
      })
    }
    //实现充电文字的自增动画效果  ***************0----->100%***************

    if (dis >= 3100&&dis<=3150) {
      var timer=setInterval(function(){
        spanNum++;
        span_Num.html(Math.floor(spanNum) +"%");
        if(spanNum>=100){
          spanNum=99;
          clearInterval(timer);
          timer=null;
        }
      },100);
      //实现充电文字的自增动画效果  ***************0----->100%***************
    }
    //**********结束**********

    //第三层的动画效果开始
    if (dis >= 4600 && dis <= 5600) {
      scroll(function (direction) {
        if (direction == "down") {
          //第一张图片的效果开始
          three1 += 0.004;
          threeImg1.css("transform", "translate3d(0%," + three1 + "%,0px) scale(1)");
          if (three1 >= 45) {
            three1  = 45;
            threeImg1.css("transform", "translate3d(0%,45%,0px) scale(1)");
          }
          //第一张图片的透明度效果结束
          //第二张图片的3D效果开始
          three2 += 0.004;
          threeImg2.css("transform", "translate3d(56%," + three2 + "%,0px) scale(1)");
          if (three2 >=21) {
            three2 = 21;
            threeImg2.css("transform", "translate3d(56%,21%,0px) scale(1)");
          }
          //第二张图片的3D效果结束
          //第三张图片的3D效果开始
          three3 += 0.004;
          threeImg3.css("transform", "translate3d(72%," + three3 + "%,0px) scale(1.2)");
          if (three3 >=40) {
            three3 = 40;
            threeImg3.css("transform", "translate3d(72%,40%,0px) scale(1.2)");
          }
          //第三张图片的3D效果结束
        }
        if (direction == "up") {
          three1 -= 0.004;
          threeImg1.css("transform", "translate3d(0%," + three1 + "%,0px) scale(1)");
          if (three1 <= 15) {
            three1  = 15;
            threeImg1.css("transform", "translate3d(0%,15%,0px) scale(1)");
          }
          //第一张图片的透明度效果结束
          //第二张图片的3D效果开始
          three2 -= 0.004;
          threeImg2.css("transform", "translate3d(56%," + three2 + "%,0px) scale(1)");
          if (three2 <=-9) {
            three2 = -9;
            threeImg2.css("transform", "translate3d(56%,-9%,0px) scale(1)");
          }
          //第二张图片的3D效果结束
          //第三张图片的3D效果开始
          three3 -= 0.004;
          threeImg3.css("transform", "translate3d(72%," + three3 + "%,0px) scale(1.2)");
          if (three3 <=10) {
            three3 = 10;
            threeImg3.css("transform", "translate3d(72%,10%,0px) scale(1.2)");
          }
        }
      })
    }
    //第三层的动画效果结束


  }
//***********************第二层图片的动画效果结束**********************
);
span_Num.html("100%");


