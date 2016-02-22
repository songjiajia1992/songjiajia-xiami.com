var oDiv = document.getElementById("list");
var oLis = oDiv.getElementsByTagName("li");
var oDivs = oDiv.getElementsByTagName("div");
function sort(nIndex) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = null;
        oDivs[i].className = null;
    }
    oLis[nIndex].className = "select";
    oDivs[nIndex].className = "select";
}
for (var i = 0; i < oLis.length; i++) {
    oLis[i].zhufeng = i;
    oLis[i].onclick = function () {
        sort(this.zhufeng)
    }
}
var banner = document.getElementById("banner");
var bannerList = banner.getElementsByTagName("li");
var tip = document.getElementById("tip");
var tipList = tip.getElementsByTagName("li");

var step = 0;
var autoTimer = null;
function autoMove() {
    step++;
    if (step > 4) {
        banner.style.left = 0 + "px";
        step = 1;
    }
    animate(banner, {left: -step * 740}, 500);
    change();
}
autoTimer = window.setInterval(autoMove, 3000);
function change() {
    var temp = step >= tipList.length ? 0 : step;
    for (var i = 0; i < tipList.length; i++) {
        tipList[i].className = i === temp ? "select" : null;
    }
}
for (var i = 0; i < tipList.length; i++) {
    ~function (i) {
        tipList[i].i = i;
        tipList[i].onclick = function () {
            window.clearInterval(autoTimer);
            animate(banner, {left: -this.i * 740}, 500);
            step = this.i;
            autoTimer = window.setInterval(autoMove, 3000);
            change();
        }
    }(i);
}

var left5Inner = document.getElementById("left5-inner");
var left5Btn = document.getElementById("left5-btn");
var left5BtnLeft = document.getElementById("left5-btn-left");
var left5BtnRight = document.getElementById("left5-btn-right");
var left5Step = 0;
left5BtnRight.onclick = function () {
    left5Step++;
    if (left5Step > 1) {
        left5Step=1;
        return;
    }
    animate(left5Inner, {left: -left5Step * 750}, 500);
};
left5BtnLeft.onclick = function () {
    left5Step--;
    if (left5Step < 0) {
        left5Step=0;
        return;
    }
    animate(left5Inner, {left: -left5Step * 750}, 500);
};

var left4Inner = document.getElementById("left4-inner");
var left4Btn = document.getElementById("left4-btn");
var left4BtnLeft = document.getElementById("left4-btn-left");
var left4BtnRight = document.getElementById("left4-btn-right");
var left4Step = 0;
left4BtnRight.onclick = function () {
    left4Step++;
    if (left4Step > 1) {
        left4Step=1;
        return;
    }
    animate(left4Inner, {left: -left4Step * 750}, 500);
};
left4BtnLeft.onclick = function () {
    left4Step--;
    if (left4Step < 0) {
        left4Step=0;
        return;
    }
    animate(left4Inner, {left: -left4Step * 750}, 500);
};
