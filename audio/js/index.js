window.onload=function(){
    let song=document.querySelector('.song')
    let author=document.querySelector('.author')
    let img=document.querySelector('.middle img')
    let lyric=document.querySelector('.lyric')
    let gesong=document.querySelector('.gesong')
    let geshou=document.querySelector('.geshou')
    let ctime=document.querySelector('.ctime')
    let ztime=document.querySelector('.ztime')
    let son=document.querySelector('.box>.son')
    let playbtn=document.querySelector('.play');
    let prebtn=document.querySelector('.pre')
    let nextbtn=document.querySelector('.next')
    let volumnbtn=document.querySelector('.volumn');
    let audio=document.querySelector('audio');
    let box=document.querySelector('.box');
    let body=document.querySelector('body')
    let yuan =document.querySelector('.box .yuan')
    console.log(lyric)
    let index=0


    renter(database[index]);
//console.log(database.length)
    //按钮事件
    playbtn.onclick=function(){
        if(audio.paused){
            audio.play();
            playbtn.classList.toggle('icon-play')
        }else{
            audio.pause();
            playbtn.classList.toggle('icon-play')
        }

    }
    nextbtn.onclick=function(){
        index++;
        if(index>=database.length-1){
            index=database.length-1;
        }
        renter(database[index]);
        audio.play();
    }
    prebtn.onclick=function(){
        index--;
        if(index<0){
            index=0;
        }
        renter(database[index]);
        audio.play();
    }
    volumnbtn.onclick=function(){
        volumnbtn.classList.toggle('icon-yinliang')
        if(audio.volume!=0){
             audio.volume=0
         }else{
            audio.volume=1
         }

    }





    //audio时间事件
    let i=x=0
    audio.ontimeupdate=function(){
        let current=time(audio.currentTime);
        let zongtime=time(audio.duration);
        let string=''
        yuan.style.left=audio.currentTime/audio.duration*500-4+'px'
        son.style.width=audio.currentTime/audio.duration*100+'%';
        ctime.innerText=current;
        ztime.innerText=zongtime;
        //歌词写入
        //var database = [
        //    {
        //        id: "0", songs: "阴天", name: "莫文蔚", src: "music/阴天.mp3",
        //          alltime:"04:02", photo: "images/mww.jpg", lyrics: [
        //        {time: "00:02", lyric: "阴天"},
        lyric.innerHTML=''
        database[index]['lyrics'].forEach(function(value,index){
            if(value.time==current){
                x=i=index
            }
        })
        if(x<2){
            i=0
        }else{
            i=x-2
        }

        for(let j=i;j<database[index]['lyrics'].length;j++){
            if(j==x){
                string+=`<li class="hot">
                ${database[index]['lyrics'][j]['lyric']}
             </li>`
            }else{
                string+=`<li>
                ${database[index]['lyrics'][j]['lyric']}
             </li>`
            }
        }
        lyric.innerHTML=string;


        //继续播放
        if(audio.ended){
            index++;
            if(index>=database.length-1){
                index=database.length-1;
            }
            renter(database[index]);
            audio.play();
        }

    }

    //红色进度条
    box.onclick=function(e){
        let rwidth=e.offsetX;
        let hwidth=box.offsetWidth;
        let bili=rwidth/hwidth;
        current=time(audio.currentTime=audio.duration*bili);
        console.log(bili)
    }


    //audio 播放当前时间转换函数
    function time(obj){
        let m=Math.floor(obj/60)>=10?Math.floor(obj/60):'0'+Math.floor(obj/60)
        let s=Math.floor(obj%60)>=10?Math.floor(obj%60):'0'+Math.floor(obj%60)
        //00:00   判断《10的情况
        return `${m}:${s}`

    }


    //初始化
    //{id: "0", songs: "阴天", name: "莫文蔚", src: "music/阴天.mp3",
    // alltime:"04:02", photo: "images/mww.jpg", lyrics:

    function renter(obj){
        let string=''
        song.innerText=obj.songs
        author.innerText=obj.name;
        audio.src=obj.src;
        img.src=obj.photo;
        geshou.innerText=obj.name;
        gesong.innerText=obj.songs;
        //ctime.innerText=current;
        ztime.innerText=obj.alltime;
        body.style.backgroundImage=`url(images/${Math.floor(Math.random()*6)+1}.jpg)`
        obj.lyrics.forEach(function(value,index){
            string+=`<li>${value['lyric']}</li>`
        })
        lyric.innerHTML=''
        lyric.innerHTML=string;
    }



}