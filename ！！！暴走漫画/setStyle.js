/**
 * Created by Administrator on 2016/11/10.
 */
function setstyle(obj,name){
    if(obj.currentStyle){
        return obj.currentStyle[name]
    }else{
        return getComputedStyle(obj,false)[name]
    }
}
window.onload=function(){
    var oDiv=document.getElementsByTagName('div');
    oDiv.onclick=function(){
        alert(setstyle(oDiv,'width'));
    }
};
