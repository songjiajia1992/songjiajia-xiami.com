var animate = (function () {
    var flag = "getComputedStyle" in window;
    var getCss = function (curEle, attr) {
        var val = null;
        reg = null;
        if (flag) {
            val = window.getComputedStyle(curEle, null)[attr];
        } else {
            if (attr === "opacity") {
                val = curEle.currentStyle["filter"];
                //alpha(opacity=11.11)
                reg = /^alpha\(opacity=(\d+(?:\.\d+)?)\)$/;
                val = reg.test(val) ? reg.exec(val)[1] / 100 : 1;
            } else {
                val = curEle.currentStyle[attr];
            }
        }
        reg = /^-?\d+(\.\d+)?(em|pt|px)?$/;
        return reg.test(val) ? parseFloat(val) : val;
    }
    var setCss= function (curEle,attr,value) {
        var reg=/^(width|height|top|bottom|left|rignt|((margin|padding)(top|bottom|left|rignt)?))$/i;
        if(attr==="opacity"){
            curEle["style"]["opacity"]=value;
            curEle["style"]["filter"]="alpha(opacity='"+value*100+"')";
            return;
        }
        if(attr==="float"){
            curEle["style"]["cssFloat"]=value;
            curEle["style"]["styleFloat"]=value;
            return;
        }
        if(reg.test(attr)){
            curEle["style"][attr]=isNaN(value)?value:value+"px";
            return;
        }
        curEle["style"][attr]=value;
    }

    var zhufengEffect={
        Linear:function(t,b,c,d){
            return c*t/d+b;
        }
    }

    return function(curEle,options,duration,deefct,callback){
        var fnEffect=zhufengEffect.Linear;

        var times= 0,interval=15,oBegin={},oChange={};
        for(var key in options){
            if(options.hasOwnProperty(key)){
                oBegin[key]=getCss(curEle,key);
                oChange[key]=options[key]-oBegin[key];
            }
        }

        function move(){
            window.clearTimeout(curEle.timer);
            times+=interval;
            if(times>duration){
                for(var key in options){
                    setCss(curEle,attr,options[attr]);
                    return;
                }

            }
            for(var attr in oChange){
                if(oChange.hasOwnProperty(attr)){
                    var temp=fnEffect(times,oBegin[attr],oChange[attr],duration);
                    setCss(curEle,attr,temp);
                }
            }
            curEle.timer=window.setTimeout(move,interval);
        }
        move();




    }






})();
