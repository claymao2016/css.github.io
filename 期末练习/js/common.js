this.bfd = this.bfd || {};
(function(){
    var Common = function()
    {
        this.init();
    };
    var p = Common.prototype;

    p.init = function()
    {
        this.$navContainer = $("#navContainer");
        this.$nav = $("#navContainer .navPanel .navUl .nav");
        this.$share = $("#navContainer .share");
        this.$shareToggle = $("#navContainer .share .shareToggle");
        this.$sharePanel = $("#navContainer .share .sharePanel");
        this.$shareItem = $("#navContainer .share .sharePanel li");
        //
        this.navOver = {"color":"#027eba"};
        this.navOut = {"color":"#FFFFFF"};
        this.initNav();
        this.initShare();
    };

    //-----------------------------nav-----------------------------------------//
    p.initNav = function()
    {
        var cur = this;
        this.$nav.mouseenter(function(){
            $(this).children(".navLink").removeClass('none_c').addClass('hover_c');
            $(this).children(".arrow").stop().fadeIn();
            $(this).children("ol").stop().fadeIn();
        });
        this.$nav.mouseleave(function(){
            $(this).children(".navLink").removeClass('hover_c').addClass('none_c');
            $(this).children(".arrow").stop().fadeOut();
            $(this).children("ol").stop().fadeOut();
        });
    };

    //-------------------------------share-----------------------------------//
    p.initShare = function()
    {
        var cur = this;

        this.$share.mouseenter(function(){
            cur.$sharePanel.fadeIn();
        });
        this.$share.mouseleave(function(){
            cur.$sharePanel.fadeOut();
        });
        this.$shareItem.each(function(i){
            $(this).data("id",i);
        });
        this.$shareItem.click(function(){
            cur.shareToClick($(this));
        });
    };
	
	 p.shareToClick = function($shareItem)
    {
        var id = $shareItem.data("id");
        if(id == 0) this.toShare("tsina");
        if(id == 1) this.toShare("weixin");
        if(id == 2) this.toShare("cqq");
        if(id == 3) this.toShare("tqq");
    };

    p.toShare=function(webid)
    {
        var url = encodeURIComponent(location.href);
        var title = encodeURIComponent(document.title);
        var pic = this.getCurrentPath()+"images/home/logo.png";
        pic = encodeURIComponent(pic);
        var summary = "蓝色光标数字营销机构—BlueDigital";
        window.open("http://www.jiathis.com/send/?webid="+webid+"&url="+url+"&title="+title+"&pic="+pic+"&summary="+summary);
    };

    p.getCurrentPath = function()
    {
        var path = location.href.replace(/(.+\/).*$/g, '$1');
        return(path);
    };

    p.getRootPath = function()
    {
        var path = location.href.replace(/(.+?:\/\/.+?\/).*$/g, '$1');
        return(path);
    };

    bfd.Common = Common;
})();


//-------------------------------------------------------------------------------------------------------//

/*  TxtScrollPanel  */

//-------------------------------------------------------------------------------------------------------//
(function()
{
    var TxtScrollPanel=function($dom,$interactionDom)
    {
        this.init($dom,$interactionDom);
    };

    var p=TxtScrollPanel.prototype;

    p.init=function($dom,$interactionDom)
    {
        this.$dom=$dom;
        this.$interactionDom = $interactionDom || $dom;
        this.$mask=this.$dom.children(".mask");
        this.$scrollPanel=this.$dom.children(".mask").children(".scrollPanel");
        this.$scrollBar=this.$dom.children(".scrollBar");
        this.$dragger=this.$dom.children(".scrollBar").children(".dragger");
        //
        this.isDown=false;
        this.mouseDownY=0;
        this.downY=0;

        this.reset();
    };

    p.reset = function()
    {
        this.$dragger.css("top",0);
        this.$scrollPanel.css("top",0);
        //
        if(this.$scrollPanel.height()> this.$mask.height())
        {
            this.initDragger();
            this.setDraggerHeight();
            this.initMouseWheel();
            //
            var cur = this;
            this.$interactionDom.mouseenter(function(){
                cur.$scrollBar.fadeIn();
            });
            this.$interactionDom.mouseleave(function(){
                cur.$scrollBar.fadeOut();
            });
        }
        else
        {
            this.$dom.unbind();
            this.$scrollBar.hide();
        }
    }

    p.initDragger = function()
    {
        var cur=this;
        this.$dragger.mousedown(function(event){
            cur.isDown=true;
            cur.mouseDownY=event.pageY;
            cur.downY=cur.$dragger.position().top;
            return false;
        });
        $(document).mouseup(function(event){
            cur.isDown=false;
        });
        $(document).mousemove(function(event){
            if(cur.isDown){
                event.preventDefault();
                var posY=event.pageY-cur.mouseDownY+cur.downY;
                cur.wheelStep(posY);
            }
        });
    };

    p.setDraggerHeight = function()
    {
        var per = this.$mask.height()/this.$scrollPanel.height();
        this.$dragger.css("height",this.$scrollBar.height()*per);
    }

    p.wheelStep = function(posY)
    {
        if(posY<0) posY=0;
        var bottomY=this.$scrollBar.height()-this.$dragger.height();
        if(posY>bottomY) posY=bottomY;
        this.$dragger.css("top",posY);

        //
        var per=this.$dragger.position().top/bottomY;
        this.$scrollPanel.css("top",-(this.$scrollPanel.height()-this.$mask.height())*per);
    }

    p.initMouseWheel = function()
    {
        var cur = this;
        this.$interactionDom.mousewheel(function(event, delta, deltaX, deltaY){
            var posY = cur.$dragger.position().top;
            posY += delta*(-10);
            cur.wheelStep(posY);
            return false;
        });
    }
    bfd.TxtScrollPanel=TxtScrollPanel;
})();



//-------------------------------------------------------------------------------------------------------//

/*  HScrollPanel  */

//-------------------------------------------------------------------------------------------------------//
(function(){
    var HScrollPanel = function()
    {

    };

    var p= HScrollPanel.prototype;

    p.initDom= function($dom,$mask,$prev,$next)
    {
        this.$dom = $dom;
        this.$mask = $mask || this.$dom.children(".mask");
        this.$scrollPanel = this.$mask.children(".scrollPanel");
        this.$item = this.$scrollPanel.children("li");
        this.$prev = $prev || this.$dom.children(".prev");
        this.$next = $next || this.$dom.children(".next");
    };

    p.init = function(numOfPage,$dom,$mask,$prev,$next)
    {
        this.initDom($dom,$mask,$prev,$next);
        //
        var cur = this;
        this.scrollId = 0;
        this.groupNum = Math.ceil(this.$item.length/numOfPage);
        var cur = this;
        cur.checkPrev();
        cur.checkNext();
        //
        this.$prev.mouseenter(function(){
            var target = "0px -63px";
            $(this).css("backgroundPosition",target);
        });
        this.$prev.mouseleave(function(){
            var target = "0px 0px";
            $(this).css("backgroundPosition",target);
        });
        this.$prev.click(function(){
            console.log("==================");
            var targetX;
            if($(this).data("enable"))
            {
                cur.scrollId--;
                targetX = -cur.$mask.width()*cur.scrollId;
                TweenLite.to(cur.$scrollPanel, 0.5, {left:targetX});
                cur.checkPrev();
                cur.checkNext();
                cur.scroll();
            }
            else
            {
                targetX = -cur.$mask.width()*cur.scrollId;
                TweenLite.to(cur.$scrollPanel, 0.3, {left:targetX+250});
                TweenLite.to(cur.$scrollPanel, 0.2, {delay:0.3,left:targetX});
            }
        });
        //
        this.$next.mouseenter(function(){
            var target = "0px -63px";
            $(this).css("backgroundPosition",target);
        });
        this.$next.mouseleave(function(){
            var target = "0px 0px";
            $(this).css("backgroundPosition",target);
        });
        this.$next.click(function(){
            var targetX;
            if($(this).data("enable"))
            {
                cur.scrollId++;
                targetX= -cur.$mask.width()*cur.scrollId;
                TweenLite.to(cur.$scrollPanel, 0.5, {left:targetX});
                cur.checkPrev();
                cur.checkNext();
                cur.scroll();
            }
            else
            {
                targetX = -cur.$mask.width()*cur.scrollId;
                TweenLite.to(cur.$scrollPanel, 0.3, {left:targetX-250});
                TweenLite.to(cur.$scrollPanel, 0.2, {delay:0.3,left:targetX});
            }
        });
    };

    p.checkPrev = function()
    {
        if(this.scrollId <= 0)
        {
            target= "0px 0px";
            this.$prev.css({"cursor":"default"});
            this.$prev.data("enable",false);
        }
        else
        {

            this.$prev.css({"cursor":"pointer"});
            this.$prev.data("enable",true);
        }
    };

    p.checkNext = function()
    {
        if(this.scrollId >= this.groupNum-1)
        {
            this.$next.css({"cursor":"default"});
            this.$next.data("enable",false);
        }
        else
        {

            this.$next.css({"cursor":"pointer"});
            this.$next.data("enable",true);
        }
    };

    p.scroll=function()
    {
        //console.log(this.scrollId);
    };
    bfd.HScrollPanel = HScrollPanel;
})();