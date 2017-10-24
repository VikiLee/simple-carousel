# simple-carousel
#### 基于jquery的简单轮播组件
###### html
```html
<div class="carousel" id="carousel_index">
                    <!--.on:当前图片-->
                    <ul>
                        <li class="on">
                            <img src="images/light.png" width="440" height="300" alt="xxx">
                            <p class="tit">xxx</p>
                            <p class="txt">
                            xxx
                            </p>
                        </li>
                        <li class="pic_next">
                            <img src="images/vip.png" width="440" height="300" alt="xxx">
                            <p class="tit">xxx</p>
                            <p class="txt">
                             xxx
                            </p>
                        </li>
                        <li>
                            <img src="images/intelligent.png" width="440" height="300" alt="xxx">
                            <p class="tit">xxx</p>
                            <p class="txt">
                             xxx
                            </p>
                        </li>
                    </ul>
                    <!--左右翻页箭头-->
                    <div class="btn_arrow_wp">
                        <a href="javascript:;" class="btn_prev">上一页</a>
                        <a href="javascript:;" class="btn_next">下一页</a>
                    </div>
                </div>
```
######  js
```javascript
$("#carousel_index").carousel({
        prevBtn: ".btn_prev",
        nextBtn: ".btn_next"
    }); 
```
###### api
| name  | description  |type   |
| ------------ | ------------ | ------------ |
|   prevBtn|  上一页的按钮id或者class类 |  String |
|  nextBtn |  上一页的按钮id或者class类 | String  |
|  speed |  轮播速度，值可以是字符串或者数字，字符串可以是normal,fast和slow | String/Number  |
