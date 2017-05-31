/*
* @Author: Administrator
* @Date:   2017-05-07 14:25:19
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-15 09:11:10
*/

'use strict';
$(function(){
	let navyi=document.querySelector('.nav .yiji');
    let lis1=document.querySelectorAll('.nav .yiji>li')
    let naver=document.querySelector('.nav .erji')
    let navsan=document.querySelectorAll('.nav .yiji .sanji')
	let ming=document.querySelector('.mingwai .ming');
    let bar =document.querySelector('.bar')
	let bar1=document.querySelector('.bar .bar1');
	let bar2=document.querySelector('.bar .bar2');
    let i1=document.querySelector('.bar .icon-jiantouarrow487');
    let i2=document.querySelector('.bar .icon-jiantou-copy');
    let zhispan=document.querySelectorAll('.zhi .zhi1 .cha')
    let zhizhi2=document.querySelectorAll('.zhi .zhi2');
    let daspan=document.querySelectorAll('.da .zhi1 .cha ');
    let dazhi2=document.querySelectorAll('.da .zhi2');
    let peispan=document.querySelectorAll('.pei .zhi1 .cha ');
    let peizhi2=document.querySelectorAll('.pei .zhi2');
    let bar3=document.querySelector('.wei .bar1');
    let bar4=document.querySelector('.wei .bar2');
    let changul=document.querySelector('.wei .chang');
    let i3=document.querySelector('.wei .bar1 .iconfont');
    let i4=document.querySelector('.wei .bar2 .iconfont');
    let btnl=document.querySelectorAll('.nei .reul>li>.btnl');
    let btnr=document.querySelectorAll('.nei .reul>li>.btnr');
    let sonul=document.querySelectorAll('.nei .reul>li>.son');
    let banner=document.querySelectorAll('.banner>a')
    let bannerbest=document.querySelector('.banner')
    let cricleli=document.querySelectorAll('.banner .cricle>li');
    let banbtnl=document.querySelector('.banner .btnl')
    let banbtnr=document.querySelector('.banner .btnr')
    let neicircle=document.querySelectorAll('.nei .circle>li')

    console.log(navsan)

	//导航下拉菜单

    for(let i=0;i<navsan.length;i++){
        lis1[i].onmouseenter=function(){
            navsan[i].style.display='block'
            naver.style.height=`225px`;

        }
    }
    for(let i=0;i<navsan.length;i++){
        lis1[i].onmouseleave=function(){
            navsan[i].style.display='none'
            naver.style.height=`0`;

        }
    }

//banner左右滑动
    let t1;


    for(let i=0;i<banner.length;i++){
        if(i==0){
            continue;
        }
        banner[i].style.opacity=0;
    }
    let bnum=0,index=0;

    t1=setInterval(bannermove,2000)
    function bannermove(){
        index++;
        if(index==banner.length){
            index=0;
        }
        cricleli[bnum].style.background=''
        banner[bnum].style.opacity=0
        banner[index].style.opacity=1
        cricleli[index].style.background='rgba(255,255,255,.7)'
        bnum=index
    }

    function bannermovel(){
        index--;
        if(index<0){
            index=banner.length-1;
        }
        cricleli[bnum].style.background=''
        banner[bnum].style.opacity=0
        banner[index].style.opacity=1
        cricleli[index].style.background='rgba(255,255,255,.7)'
        bnum=index
    }
    //左右点击
    banbtnl.onclick=function(){
        bannermovel();
    }
    banbtnr.onclick=function(){
        bannermove();
    }
    bannerbest.onmouseenter=function(){
        clearInterval(t1)
    }
    bannerbest.onmouseleave=function(){
        t1=setInterval(bannermove,2000)

    }
    //轮播点点击
    for(let i=0;i<cricleli.length;i++){
        cricleli[i].onclick=function(){
            for(let j=0;j<cricleli.length;j++){
                banner[j].style.opacity=0;
                cricleli[j].style.background=''
            }
            banner[i].style.opacity=1;
            cricleli[i].style.background='rgba(255,255,255,.7)'
        }
    }


//明星栏左右滑动
    let flag=true;
    bar.onmouseenter=function(){
        clearInterval(t);
    }
    bar.onmouseleave=function(){
        t=setInterval(mingmove,4000)
    }
	bar1.onclick=function(){

            mingmove()


	}
	bar2.onclick=function() {

        mingmove()


    }
    let t;
    t=setInterval(mingmove,4000)
    function mingmove(){
        let lefts=parseInt(getComputedStyle(ming,null).marginLeft);
        if(lefts==0){
            ming.style.marginLeft='-1200px';
            i2.style.color='#B0B0B2';
            i1.style.color='#dfdfdf';
            bar2.style.cursor='pointer'
            bar1.style.cursor=''

        }
        if(lefts==-1200){
            ming.style.marginLeft='0px';
            i1.style.color='#B0B0B2';
            i2.style.color='#dfdfdf';
            bar1.style.cursor='pointer'
            bar2.style.cursor=''
        }

    }
    //智能硬件hover

        for(let j=0;j<zhispan.length;j++) {
            if(j==0){
                continue;
            }
            zhizhi2[j].style.display = 'none';
            zhispan[j].style.color='#424242'

        }
    let n=0;
        for(let i=0;i<zhispan.length;i++){

            zhispan[i].onmouseenter=function(){
                zhispan[n].style.color='#424242'
                zhispan[i].style.color='#FF6709'
                zhizhi2[n].style.display='none'
                zhizhi2[i].style.display='block'
                 n=i;

            }
        }

    //搭配hover
    for(let j=0;j<daspan.length;j++) {
        if(j==0){
            continue;
        }
        dazhi2[j].style.display = 'none';
        daspan[j].style.color='#424242'

    }
    let m=0;
    for(let i=0;i<daspan.length;i++){

        daspan[i].onmouseenter=function(){
            daspan[m].style.color='#424242'
            daspan[i].style.color='#FF6709'
            dazhi2[m].style.display='none'
            dazhi2[i].style.display='block'
            m=i;

        }


    }
    //配件
    for(let j=0;j<peispan.length;j++) {
        if(j==0){
            continue;
        }
        peizhi2[j].style.display = 'none';
        peispan[j].style.color='#424242'

    }
    let l=0;
    for(let i=0;i<peispan.length;i++){

        peispan[i].onmouseenter=function(){
            peispan[l].style.color='#424242'
            peispan[i].style.color='#FF6709'
            peizhi2[l].style.display='none'
            peizhi2[i].style.display='block'
            l=i;

        }


    }

    //为你推荐


    let o=0;
    bar3.onmouseenter=function(){
        if(o<=-3700){
            return;
        }
        i3.style.color='#ff4700'
    }
    bar3.onmouseleave=function(){
        i3.style.color=''
    }
    bar3.onclick=function(){
        o-=1240;
        if(o<=-3720){
            o=-3720
            i3.style.color='#dfdfdf'

        }
        changul.style.transform=`translateX(${o}px)`
        i4.style.color='#B0B0B2'
        bar4.style.cursor='pointer'



    }

    bar4.onclick=function(){
        o+=1240;
        if(o>=0){
            o=0

            i4.style.color='#dfdfdf'
            bar4.style.cursor=''
        }
        changul.style.transform=`translateX(${o}px)`
        i3.style.color='#B0B0B2'
        bar4.style.cursor='pointer'

    }


    //内容

    for(let i=0;i<btnl.length;i++){
        btnl[i].addEventListener('click',function(){
            neimover(i)
        })
    }
    for(let i=0;i<btnl.length;i++){
        btnr[i].addEventListener('click',function(){
            neimovel(i)
        })
    }
    function  neimovel(i){
            animate(sonul[i],{left:-296},function(){
                let firstnei=sonul[i].firstElementChild;
                sonul[i].appendChild(firstnei);
                sonul[i].style.left=0;
            })
    }
    function neimover(i){
                let fitstnei=sonul[i].firstElementChild;
                let lastnei=sonul[i].lastElementChild;
                sonul[i].insertBefore(lastnei,fitstnei);
                sonul[i].style.left=`-296px`
                animate(sonul[i],{left:0},function(){
                })
        }





	})



