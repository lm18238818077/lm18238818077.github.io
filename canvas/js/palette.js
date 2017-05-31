
function Palette(obj,ctx,mask){
    this.obj=obj;
    this.ctx=ctx;
    this.mask=mask;
    this.lineWidth=2;
    this.fillStyle='#ff4700'
    this.strokeStyle='red'
    this.type='fill'
    this.width=this.obj.width;
    this.height=obj.height;
    this.lineCap='round';
    this.history=[]
    this.bian=7
   this.r=20;
    this.w=40;
    console.log(this.height)
}
Palette.prototype={
    init:function(){
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.fillStyle=this.fillStyle;
        this.ctx.strokeStyle=this.strokeStyle;
        this.ctx.lineCap=this.lineCap;
        this.ctx.fillStyle=this.type;
    },
    chexiao:function(){
            let last=this.history.pop();
            this.ctx.putImageData(last,0,0)

    },
    baocun:function(){
        let data=canvas.toDataURL('image/png').replace('data:image/png','data:stream/octet');
        let img=new Image;
        img.src=data;
        location.href=data;
    },
    line:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                console.log(self.width)
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.init()
                self.ctx.beginPath();
                self.ctx.moveTo(dx,dy);
                self.ctx.lineTo(ox,oy);
                self.ctx.closePath()
                self.ctx.stroke();
                //self.ctx[self.type]()
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    circle:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                let r=Math.sqrt(Math.pow((ox-dx),2)+Math.pow((oy-dy),2))
                self.init()
                self.ctx.beginPath();
                self.ctx.moveTo(dx+r,dy);
                self.ctx.arc(dx,dy,r,0,Math.PI*2)
                self.ctx.closePath()
                self.ctx[self.type]()



            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    pencil:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.init()
            self.ctx.beginPath();
            self.ctx.moveTo(dx,dy);
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }


               self.ctx.lineTo(ox,oy)
                self.ctx.stroke();
            }
            self.mask.onmouseup=function(){
                self.ctx.closePath()
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
       ju:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;

            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.init()
                self.ctx.beginPath();
                self.ctx.moveTo(dx,dy);
                self.ctx.rect(dx,dy,ox-dx,oy-dy)
                self.ctx[self.type]()

            }
            self.mask.onmouseup=function(){
                self.ctx.closePath()
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    five:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;

            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                let rate=Math.PI/180;
                let r=(ox-dx)/2;
                let a=Math.sin(36*rate)*r*2
                let x=Math.sin(54*rate)* a,y=Math.cos(54*rate)* a;
                let c=r*Math.sin(54*rate);
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.init()
                self.ctx.beginPath();
                self.ctx.moveTo(dx+r,dy);//起点
                self.ctx.lineTo(dx+r+x,dy+y);//1
                self.ctx.lineTo(dx+r+a/2,dy+r+c);//2
                self.ctx.lineTo(dx+r-a/2,dy+r+c);//3
                self.ctx.lineTo(dx+r-x,dy+y);//4
                self.ctx.lineTo(dx+r,dy);//5
                self.ctx.closePath()
                self.ctx[self.type]()

            }
            self.mask.onmouseup=function(){
                self.ctx.closePath()
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    duobian:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                let agle = 360 /self.bian * Math.PI / 180;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                let r=Math.sqrt(Math.pow((ox-dx),2)+Math.pow((oy-dy),2))
                self.init()
                self.ctx.beginPath();
                ctx.moveTo(dx+r, dy)
                for (let i = 0; i < self.bian; i++) {
                    let x = dx + r * Math.cos(agle * i)
                    let y = dy + r * Math.sin(agle * i)
                    ctx.lineTo(x, y);
                }
                self.ctx.closePath()
                self.ctx[self.type]()

            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    dash:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.init()
                self.ctx.beginPath();
                self.ctx.moveTo(dx,dy);
                self.ctx.lineTo(ox,oy)
                self.ctx.setLineDash([3,10])
                self.ctx.closePath()
                self.ctx.stroke();
                //self.ctx[self.type]()
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    wujiao:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                let r=Math.sqrt(Math.pow((ox-dx),2)+Math.pow((oy-dy),2))
                let r1=r/3

                let agle = 360 /(self.bian*2) * Math.PI / 180;
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.init()
                self.ctx.beginPath();
                self.ctx.moveTo(dx+r,dy);
                for(let i=0;i<self.bian*2;i++){
                    if(i%2==0){
                        let x=dx+r*Math.cos(agle*i),y=dy+r*Math.sin(agle*i)
                        self.ctx.lineTo(x,y)
                    }else{
                        let x=dx+r1*Math.cos(agle*i),y=dy+r1*Math.sin(agle*i)
                        self.ctx.lineTo(x,y)

                    }
                }

                self.ctx.closePath()
                self.ctx[self.type]()

                //self.ctx[self.type]()
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    juround:function(){
        let self=this;
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.init()
                self.ctx.beginPath();
                //w=ox-dx,h=oy-dy,r
                //1(dx+r,dy)2(ox-r,dy)kong(dx,dy)3
                let r=Number(self.r)
                self.ctx.moveTo(dx+r,dy);
                self.ctx.lineTo(ox-r,dy);
                self.ctx.quadraticCurveTo(ox,dy,ox,dy+r);
                self.ctx.lineTo(ox,oy-r);
                self.ctx.quadraticCurveTo(ox,oy,ox-r,oy);
                self.ctx.lineTo(dx+r,oy);
                self.ctx.quadraticCurveTo(dx,oy,dx,oy-r);
                self.ctx.lineTo(dx,dy+r);
                self.ctx.quadraticCurveTo(dx,dy,dx+r,dy);





                self.ctx.closePath()
                self.ctx[self.type]()

                //self.ctx[self.type]()
            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    eraser:function(eraserbtn){   //橡皮
        this.eraserbtn=eraserbtn;
        let self=this;
        self.mask.onmousedown=function(){
            self.eraserbtn.style.display='block'
            console.log(self.eraserbtn)
            self.eraserbtn.style.width=self.w+'px';
            self.eraserbtn.style.height=self.w+'px'
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                console.log(ox)
               if(ox>=self.width-self.w+self.w/2){
                   ox=self.width-self.w+self.w/2;
               }
                if(ox<=self.w/2){
                    ox=self.w/2;
                }
                if(oy>=self.height-self.w+self.w/2){
                    oy=self.height-self.w+self.w/2;
                }
                if(oy<=self.w/2){
                    oy=self.w/2;
                }

                self.ctx.clearRect(ox-self.w/2,oy-self.w/2,self.w,self.w);
                self.init()
                self.eraserbtn.style.left=ox-self.w/2+'px'
                self.eraserbtn.style.top=oy-self.w/2+'px'
                console.log(self.w)

                //self.ctx[self.type]()
            }
            self.mask.onmouseup=function(){
                self.eraserbtn.style.display='none'
                self.mask.onmouseup=null;
                self.mask.onmousemove=null
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    tuoyuan:function(){       //椭圆
        let self=this
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            self.mask.onmousemove=function(e){
                let ox=e.offsetX,oy=e.offsetY;
                self.ctx.clearRect(0,0,self.width,self.height);
                if(self.history.length>0){
                    self.ctx.putImageData(self.history[self.history.length-1],0,0)
                }
                self.init()
                self.ctx.beginPath();
                self.ctx.moveTo(dx,(oy+dy)/2);
                self.ctx.quadraticCurveTo(dx,dy,(ox+dx)/2,dy)
                self.ctx.quadraticCurveTo(ox,dy,ox,(oy+dy)/2)
                self.ctx.quadraticCurveTo(ox,oy,(ox+dx)/2,oy)
                self.ctx.quadraticCurveTo(dx,oy,dx,(oy+dy)/2)
                self.ctx.closePath()
                self.ctx[self.type]()



            }
            self.mask.onmouseup=function(){
                self.history.push(self.ctx.getImageData(0,0,self.width,self.height));
                self.mask.onmouseup=null;
                self.mask.onmousemove=null;
            }

        }
        //撤销
        document.body.onkeydown=function(e){
            if(e.ctrlKey&&e.keyCode==90){
                let last=self.history.pop();
                self.ctx.putImageData(last,0,0)
            }
        }
    },
    select: function (clipbtn) {
        var self = this;
        self.init();
        self.clipbtn=clipbtn;
        self.mask.onmousedown = function (e) {
            var startx = e.offsetX;
            var starty = e.offsetY;
            var minx, miny, w, h;
            self.init();
            self.mask.onmousemove = function (e) {
                self.init();
                var endx = e.offsetX;
                var endy = e.offsetY;
                minx = startx > endx ? endx : startx;
                miny = starty > endy ? endy : starty;
                w = Math.abs(endx - startx);
                h = Math.abs(endy - starty);
                clipbtn.style.display="block";
                clipbtn.style.left= minx+'px';
                clipbtn.style.top= miny+'px';
                clipbtn.style.width= w+'px';
                clipbtn.style.height= h+'px';
            }
            self.mask.onmouseup = function (e) {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.temp = self.ctx.getImageData(minx, miny, w, h);
                self.ctx.clearRect(minx, miny, w, h)
                self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                self.ctx.putImageData(self.temp, minx, miny);
                self.drag(minx, miny, w, h, clipbtn);
            }
        }
    },
    drag: function (x, y, w, h, clipbtn) {
        var self = this;
        self.mask.onmousemove = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
            }
        }
        self.mask.onmousedown = function (e) {
            var ox = e.offsetX;
            var oy = e.offsetY;
            //鼠标相对于div左上角的位置
            var cx = ox - x;
            var cy = oy - y;
            if (ox > x && ox < w + x && oy > y && oy < h + y) {
                self.mask.style.cursor = "move";
            } else {
                self.mask.style.cursor = "default";
                return;
            }
            self.mask.onmousemove = function (e) {
                self.ctx.clearRect(0, 0, self.width, self.height);
                if (self.history.length != 0) {
                    self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                }
                var endx = e.offsetX;
                var endy = e.offsetY;
                var left = endx - cx;
                var top = endy - cy;
                if(left<0){
                    left=0;
                }
                if(left>self.width-w){
                    left=self.width-w
                }

                if(top<0){
                    top=0;
                }
                if(top>self.height-h){
                    top=self.height-h
                }
                clipbtn.style.left= left+'px';
                clipbtn.style.top=top+'px';
                x=left;
                y=top;
                self.ctx.putImageData(self.temp, left, top);
            }
            self.mask.onmouseup = function () {
                self.mask.onmouseup = null;
                self.mask.onmousemove = null;
                self.drag(x, y, w, h, clipbtn)
            }
        }

    },
    text:function(){
        let self=this
        self.mask.onmousedown=function(e){
            let dx=e.offsetX,dy=e.offsetY;
            let div=document.createElement('div');
            div.contentEditable=true
            div.style.cssText=`position:absolute;left:${dx}px;top:${dy}px;
                border:1px dashed #000000;min-width:50px;min-height:50px;outline:none;`;
            self.mask.appendChild(div)
            self.mask.onmousedown=null;
            self.area=div;
            self.area.onmousedown=function(e){
                let ox=e.clientX-this.offsetLeft,oy=e.clientY-this.offsetTop;
                self.area.onmousemove=function(e){
                    let mx=e.clientX,my=e.clientY;
                    let lefts=mx-ox,tops=my-oy;
                    console.log(oy)
                    if(lefts>=self.width-this.offsetWidth){
                        lefts=self.width-this.offsetWidth
                    }
                    if(lefts<=0){
                        lefts=0;
                    }
                    if(tops>=self.height-this.offsetHeight){
                        tops=self.height-this.offsetHeight
                    }
                    if(tops<=0){
                        tops=0;
                    }
                    self.area.style.left=lefts+'px'
                    self.area.style.top=tops+'px'
                    if (self.history.length != 0) {
                        self.ctx.putImageData(self.history[self.history.length - 1], 0, 0)
                    }
                }
                self.area.onmouseup=function(e){
                    self.history.push(self.ctx.getImageData(0, 0, self.width, self.height))
                    self.area.onmousemove=null;
                    self.area.onmouseup=null;
                }
                self.area.onblur=function(){
                    self.ctx.font='20px 苹方'
                    self.ctx.textBaseline='top';
                    self.ctx.fillText(this.innerText,this.offsetLeft,this.offsetTop);
                    this.parentNode.removeChild(this);
                    self.area=null;
                }

            }
        }
    }
}




