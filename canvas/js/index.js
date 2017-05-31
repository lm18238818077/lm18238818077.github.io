


let canvas=document.querySelector('canvas')
let ctx=canvas.getContext('2d')
let line=document.querySelector('.icon-line')
let dash=document.querySelector('.icon-xuxian')
let circle=document.querySelector('.icon-circle')
let tuoyuan=document.querySelector('.icon-tuoyuan')
let pencil=document.querySelector('.icon-qianbi')
let ju=document.querySelector('.icon-juxing')
let five=document.querySelector('.icon-wubianxing')
let duobian=document.querySelector('.icon-liubianxing')
let miaobian=document.querySelector('.miaobian')
let miaobianbtn=document.querySelector('.icon-miaobian')
let youqi=document.querySelector('.youqi')
let youqibtn=document.querySelector('.icon-youqi')
let wujiao=document.querySelector('.icon-wujiaoxing');
let juround=document.querySelector('.icon-yuanjiaojuxing');
let eraserbtn=document.querySelector('.eraser')
let eraser=document.querySelector('.icon-eraser')
let mask=document.querySelector('.mask');
let caijian=document.querySelector('.icon-caijian')
let clipbtn=document.querySelector('.clip')//画布中
let wenzi=document.querySelector('.icon-wenzi')
let chexiao=document.querySelector('.icon-chexiao')
let baocun=document.querySelector('.icon-baocun')


let palette=new Palette(canvas,ctx,mask);
console.log(wenzi)
tuoyuan.onclick=function(){
    palette.tuoyuan();
}
youqi.onclick=function(){
    palette.type='fill'
}
miaobian.onclick=function(){
    palette.type='stroke'

}
line.onclick=function(){
    palette.line();
};
circle.onclick=function(){
    palette.circle();
}
pencil.onclick=function(){
    palette.pencil()
}
ju.onclick=function(){
    palette.ju()
}
juround.onclick=function(){
    palette.r=prompt('请输入圆角半径',5)
    palette.juround();
}
five.onclick=function(){
    palette.five()
}
duobian.onclick=function(){
    palette.bian=prompt('请输入边数',7)
    palette.duobian()
}
dash.onclick=function(){
    palette.dash();
}
miaobian.onchange=function(){
    palette.strokeStyle=miaobian.value;
    miaobianbtn.style.color=miaobian.value;
}
youqi.onchange=function(){
    palette.fillStyle=youqi.value;
    youqibtn.style.color=youqi.value;
}
wujiao.onclick=function(){
    palette.bian=prompt('请输入边数',7)
    palette.wujiao();
}
eraser.onclick=function(){
    palette.w=prompt('请输入橡皮大小',20)
    palette.eraser(eraserbtn);
}
caijian.onclick=function(){
    palette.select(clipbtn)
}
wenzi.onclick=function(){
    palette.text();
}
chexiao.onclick=function(){
    palette.chexiao();
}
baocun.onclick=function(){
    palette.baocun();
}



