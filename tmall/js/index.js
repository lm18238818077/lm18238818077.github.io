/*
* @Author: Administrator
* @Date:   2017-04-28 21:04:46
* @Last Modified by:   Administrator
* @Last Modified time: 2017-05-07 00:42:22
*/

'use strict';

$(function(){
	let banner=$('.banner')[0];
	let lun=$('.lun',banner)[0];
	let con=$('.con',banner)[0];
	let yuan=$('.yuan',banner)[0];
	let lis=$('li',lun);
	let lis1=$('li',yuan);
	let mbar=$('.mbar')[0];
	let lis2=$('a',mbar);
	let lis2a=$('li',mbar);
	let is=$('.iconfont',mbar)[0];
	let heis=$('.hei',mbar);
	let lis3=document.querySelectorAll('.zhi .con li')
	let lbars=$('.lbar')[0];
	let zhi=document.querySelector('.zhi .con .left>div:nth-child(1)')
	let zhison=document.querySelectorAll('.zhi .con .left .son')
	let zhisonimg=document.querySelectorAll('.zhi .con .left .son>img')
	let zhisonimgb=document.querySelector('.zhi .con .left>div:nth-child(1)>img')
	let zhileft=document.querySelector('.zhi .con .left>div:nth-child(1)')
	let jiantou=document.querySelectorAll('.zhi .con .left>img')
	let sonba=document.querySelectorAll('.zhi .con .left .sonba')[0]
	let lis4=document.querySelectorAll('.chao .xia>a:nth-child(1) li')
	let lefts=document.querySelector('.banner .con .left')
	let rights=document.querySelector('.banner .con .right')
    let besttop=$('.besttop')[0];
	let chaos=document.querySelectorAll('.chao')
	let uls=document.querySelectorAll('.chao .con .zi')
	let lbara=document.querySelectorAll('.lbar>.ming')
	let ch=window.innerHeight;
	console.log(uls)


	//箭头点击效果
	jiantou[1].onclick=function(){
		sonba.style.transform='translateX(-488px)'
		jiantou[1].style.display='none'
		jiantou[0].style.display='block'
	}
	jiantou[0].onclick=function(){
		sonba.style.transform='translateX(0px)'
		jiantou[0].style.display='none'
		jiantou[1].style.display='block'
	}




	//直播onmouseenter
	let m=0;
	for(let i=0;i<zhison.length;i++){
		for(let a=0;a<zhison.length;a++){
			if(a==0){
				continue;
			}
         	zhisonimg[a].style.opacity=0

		}

		zhileft.onmouseenter=function(){
         	zhisonimgb.style.transform=`scale(1.3, 1.3)`;
         	zhisonimgb.addEventListener('webkitTransitionEnd',function(){
         	zhisonimgb.style.transform=`scale(1, 1)`;
         	},false)

		}



		zhison[i].onmouseenter=function(){
			let j=i+79
			zhi.style.backgroundImage=`url(img/${j}.webp)`
         	zhisonimg[m].style.opacity=0

         	zhisonimg[i].style.opacity=1
         	m=i

         		
         	zhisonimg[i].style.transform=`scale(1.3, 1.3)`;
         	zhisonimg[i].addEventListener('webkitTransitionEnd',function(){
         	zhisonimg[i].style.transform=`scale(1, 1)`;

         	},false)
		}
		zhison[i].onmouseleave=function(){
         	zhisonimg[i].style.transform=`scale(1, 1)`;

		}

	
	}
	// 滚动触发事件
	let arr=[];
	chaos.forEach(function(value,index){
		arr.push(value.offsetTop)
	})

	for(let i=0;i<7;i++){
		lbara[i].onclick=function(){
			flag=false;
			animate(document.body,{scrollTop:arr[i]},function(){
				flag=true;
			})
		}
	}
	//最顶导航
    let flag1=true,flag=true;
        let n=0
console.log(heis)
    window.onscroll=function(){
         let tops=document.body.scrollTop;
         if(tops>600){
         	lbars.style.transform=`scale(1, 1)`;
              }
        if(tops>1000){
                if(flag1){     
                  flag1=!flag1;
                  besttop.style.transform=`translateY(50px)`
                }
              } 
        if(tops<600){
         	lbars.style.transform=`scale(0, 0)`;

              }
        if(tops<=1000){
                if(!flag1){
                  flag1=!flag1;
                  
                   besttop.style.transform=`translateY(-50px)`      
                }
              }

        //左颜色变化
		let arr1=[' #EA5F8D','#0AA6E8','#64C333','#F15453','#19C8A9','#F7A945','#000'];
		
        
       for(let i=0;i<7;i++){
       		if(!flag){
       			return;
       		}
       		if(tops+ch>arr[i]+200){
       			let chao=document.getElementsByClassName('chao')[i]
       			lbara[n].style.background=''
       			lbara[i].style.background=arr1[i];
       			n=i;
				let chaosimg=chao.getElementsByTagName('img')
				for(let i=0;i<chaosimg.length;i++){
					chaosimg[i].src=chaosimg[i].title;
				}
       		}
       }

   }


	



	//右面黑边栏
	for(let i=0;i<lis2.length;i++){
		if(i!=8){
			lis2[i].onmouseover=function(){
				lis2a[i].style.background='#C40000'
				is.style.color='#fff'
				heis[i].style.transform='translateX(30px)'
				heis[i].style.opacity=1
			}
			lis2[i].onmouseout=function(){
				lis2a[i].style.background=''
				is.style.color='red'
				heis[i].style.transform='translateX(0px)'
				heis[i].style.opacity=0
			}
		}
		 else{
			lis2[i].onmouseover=function(){
				heis[i].style.display='block'
				lis2a[i].style.background='#C40000'

			}
			lis2[i].onmouseout=function(){
				heis[i].style.display='none'
				lis2a[i].style.background=''

			}
		}		


	}
	//轮播图
	
         
            
         
	lefts.onclick=function(){
		moveDown();
	}
	rights.onclick=function(){
		move();
	}



	for(let i=0;i<lis.length;i++){
		lis1[i].onclick=function(){
			for(let j=0;j<lis.length;j++){
				lis[j].style.display='none'	
				lis1[j].style.background=''
			}
		lis[i].style.display='block'
		lis1[i].style.background='#fff'
		banner.style.background=arr2[i];

		index=i;
		}
		con.onmouseover=function(){
			clearInterval(t);
		}
		con.onmouseout=function(){
			t=setInterval(move,2000);
		}
	}



	
	let index=0;
	let arr2=['#CF1415','#18313F','#F43737','#BEF3F9','#E8E8E8','#E8E8E8']
	let t=setInterval(move,2000);
	function move(){
		index++;
		if(index==lis.length){
			index=0;
		}
		for(let i=0;i<lis.length;i++){
		lis[i].style.display='none';
		lis1[i].style.background=''
		banner.style.background=''
		}
	lis[index].style.display='block'
	lis1[index].style.background='#fff'
	banner.style.background=arr2[index];

	}


		function moveDown(){
		index--;
		if(index<0){
			index=lis.length-1;
		}
		for(let i=0;i<lis.length;i++){
		lis[i].style.display='none';
		lis1[i].style.background=''

		}
	lis[index].style.display='block'
	lis1[index].style.background='#fff'
	banner.style.background=arr2[index];

	}

	//轮播图完

	//直播向上下滑动
	setInterval(shang,3000)
	function shang(){
		let tops=parseInt(getComputedStyle(lis3[0],null).marginTop);
		if(tops==0){
		lis3[0].style.marginTop=`-40px`
		}
		else if(tops==-40){
		lis3[0].style.marginTop='0px'
		}
	}



	//潮流酷玩里上下循环
	setInterval(chao,3000)
	function chao(){
		for(let i=0;i<uls.length;i++){
			animate(uls[i],{top:-30},function(){
				let first=uls[i].firstElementChild;
				uls[i].appendChild(first);
				uls[i].style.top=0;
			})
		}
	}
	




	//左导航
	/*var pingg=window.innerWidth
	console.log(pingg);
	lbars.style.position='fixed'
	lbars.style.left=`${pingg/100}px`;
	lbars.style.bottom=`60px`;*/
	//动画
	// animate(box,{width:500},function(){})
	//  window.onload=function(){
 //        let box=document.querySelector('.box');
 //        animate(box,{width:500,height=500,top=500},callback)
 //        function animate(obj;attrObj){
 //            let speed=10;
 //            let t=setInterval(move,200);
 //            function move(){
 //                 for(let i in attrObj){
 //                    let currentV=parseInt(getComputedStyle(obj,null)[i]）+10;
 //                    if(currentV>=attrObj[i]){
 //                    	currentV>=attrObj[i];
 //                    	clearInterval(t);
 //                    	if(callback){
 //                    		callback()
 //                    	}	
 //                    }
 //                    obj.style[i]=currentV+'px';
 //                 }
 //            }
 //        }
 //    }


 		//浏览器滚动距离+可视区域=offsettop
/*	let ch=window.innerHeight;
	let zhis=document.querySelectorAll('.zhi');
	let arr=[];
	zhis.forEach(function(value,index){
		arr.push(value.offsetTop)
	})
	window.onscroll=function(){
		let tops=document.body.scrollTop;
		arr.forEach(function(value,index){
			if(tops+ch>value+150){
				let zhi=document.getElementsByClassName('zhi')[index];
				let imgs=zhi.getElementsByTagName('img')
				for(let i=0;i<imgs.length;i++){
					imgs[i].src=imgs[i].alt;
				}
			}
		})
		
	}*/


})