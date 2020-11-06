<template>
    <div>
        <canvas id="myCanvas"></canvas>
        <div class="control-ops control">
            <button type="button" class="btn btn-primary" "javascript:clearArea();return false;">清空画板</button>
            <button type="button" class="saveimg" "javascript:saveImageInfo();return false;">保存</button>		
        </div>
    </div>
</template>
<script>
import $ from "jquery";
export default {
    mounted() {
        var image='';
    var mousePressed = false;
    var lastX, lastY;
    var ctx = document.getElementById('myCanvas').getContext("2d");
    var c = document.getElementById("myCanvas");
    //		console.log(c)
    //		console.log(c2)
    var control = document.getElementsByClassName("control")[0];
    var saveimgs = document.getElementsByClassName("saveimgs")[0];
    window.onload = function(){
         var _width = $('#canvas-box').width();
		 $('#myCanvas').attr('width', _width);  //适配移动端宽度给canvas
        InitThis();
    }
 
    function saveImageInfo(){
        image = c.toDataURL("image/png"); //得到生成后的签名base64位  url 地址
		console.log(image); 
    }
 

    function InitThis() {
//			触摸屏
        c.addEventListener('touchstart', function (event) {
            if (event.targetTouches.length == 1) {
                event.preventDefault();// 阻止浏览器默认事件，重要
                var touch = event.targetTouches[0];
                mousePressed = true;
                Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, false);
            }
 
        },false);
 
        c.addEventListener('touchmove', function (event) {
            if (event.targetTouches.length == 1) {
                event.preventDefault();// 阻止浏览器默认事件，重要
                var touch = event.targetTouches[0];
                if (mousePressed) {
                    Draw(touch.pageX - this.offsetLeft, touch.pageY - this.offsetTop, true);
                }
            }
 
        },false);
 
        c.addEventListener('touchend', function (event) {
            if (event.targetTouches.length == 1) {
                event.preventDefault();// 阻止浏览器默认事件，防止手写的时候拖动屏幕，重要
//      			var touch = event.targetTouches[0];
                mousePressed = false;
            }
        },false);
        /*c.addEventListener('touchcancel', function (event) {
            console.log(4)
            mousePressed = false;
        },false);*/
 
 
 
//		   鼠标
        c.onmousedown = function (event) {
            mousePressed = true;
            Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, false);
        };
 
        c.onmousemove = function (event) {
            if (mousePressed) {
                Draw(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, true);
            }
        };
 
        c.onmouseup = function (event) {
            mousePressed = false;
        };
    }
 
    function Draw(x, y, isDown) {
        if (isDown) {
            ctx.beginPath();
			ctx.strokeStyle ='#ff6000'; //颜色
            ctx.lineWidth = 3;   //线宽
            ctx.lineJoin = "round";
            ctx.moveTo(lastX, lastY);
            ctx.lineTo(x, y);
            ctx.closePath();
            ctx.stroke();
        }
        lastX = x; lastY = y;
    }
 
    function clearArea() {
        // Use the identity matrix while clearing the canvas
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
    },
    methods: {

    }
}
</script>
<style scoped>
#myCanvas{
			width: 90%;
			height: 150px;
			border-radius: 10px;
			margin: 10px 5% 5px 5%;
			color:#ff6000;
			background-color: #ffffff;
		}
		.btn-primary{
			background-color:#5aa6e8;
			color: #ffffff;
			padding: 2px 5px;
			border-radius: 6px;
			margin-left: 5%;
			font-size: 12px;
		}
</style>