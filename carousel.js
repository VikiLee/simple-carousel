/**
*轮播插件
*/
;(function($){
    $.fn.carousel = function(option){
        var defaultOption = {
            prevBtn: "",
            speed: "normal",
            nextBtn: ""
        },
        config = $.extend({}, defaultOption, option),
        $this = $(this);
        if(config.speed === "normal"){
            config.speed = 3000;
        }else if(config.speed === "fast"){
            config.speed = 1000;
        }else if(config.speed === "slow"){
            config.speed = 5000;
        }else if(typeof parseInt(config.speed) === "number"){
            config.speed = config.speed;
        }

        config.onClass = "on";//表示当前播放到的图片

        var pic_len = $this.find("li").length - 1,//轮播图片数
            ct; //计时id

        var S = {
            init: function(){
                ct = setInterval(this.carouselNext, config.speed);
                this.registEvent();
            },
            registEvent: function(){
                var that = this;
                $(config.nextBtn).on("click", function(){
                    clearInterval(ct);
                    that.carouselNext();
                    ct = setInterval(that.carouselNext, config.speed);
                })

                $(config.prevBtn).on("click", function(){
                    clearInterval(ct);
                    that.carouselPrev();
                    ct = setInterval(that.carouselPrev, config.speed);
                })
            },
            carouselNext: function(){
                var $currentLi = $this.find("li." + config.onClass),
                    index = $currentLi.index(),
                    $nextCurrentLi = null;
                $currentLi.stop().animate({
                    opacity: "0"
                }, 300, function(){
                    $currentLi.removeClass(config.onClass);
                    if(index === pic_len){//最后一张
                        $nextCurrentLi = $this.find('li:first');
                    }else{//其他
                        $nextCurrentLi = $currentLi.next();
                    }
                    $nextCurrentLi.addClass(config.onClass).stop().animate({
                        opacity: "1"
                    }, 300);
                });
            },
            carouselPrev: function(){
                var $currentLi = $this.find("li." + config.onClass),
                    index = $currentLi.index(),
                    $prevCurrentLi = null;
                $currentLi.stop().animate({
                    opacity: "0"
                }, 300, function(){
                    $currentLi.removeClass(config.onClass);
                   if(index === 0){//第一张
                        $prevCurrentLi = $this.find('li:last');
                    }else{//其他
                        $prevCurrentLi = $currentLi.prev();
                    }
                    $prevCurrentLi.addClass(config.onClass).stop().animate({
                        opacity: "1"
                    }, 300);
                });
            }
        }
        S.init();
    }
})(jQuery);