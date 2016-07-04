this.bfd = this.bfd || {};
(function(){
    var Main = function()
    {
        this.init();
    };
    var p = Main.prototype;
    p.cirNavAry = ["methodology","service","solution","client","about","career","contact"];

    p.init = function()
    {
        this.$mainPart = $(".mainPart").not("#guide");
        this.$navContainer = $("#navContainer");
        this.$methodology = $("#methodology");
        this.$methodology_bottom = $("#methodology .bottom");
        this.$methodology_consumer = $("#methodology .consumer");
        this.$methodology_content = $("#methodology .content");
        this.$methodology_channel = $("#methodology .channel");
        this.$methodology_commerce =$("#methodology .commerce");
        this.$methodology_commerce_text =$("#methodology .commerce_text");
        this.$methodologyData = $("#methodology .data");
        this.$consumerBall = $("#consumerBall");
        this.$contentBall = $("#contentBall");
        this.$channelBall = $("#channelBall");
        this.$commerceBall = $("#commerceBall");
        this.$methodologyDetail = $("#methodologyDetail");
        this.$methodologyClose = $("#methodologyDetail .contentPanel .close");
        //
        this.$service = $("#service");
        //
        this.$solution = $("#solution");
        this.$solution_1 = $("#solution .level_1");
        this.$solution_2 = $("#solution .level_2");
        this.$solution_3 = $("#solution .level_3");
        this.$solution_4 = $("#solution .level_4");
        //
        this.$client = $("#client");
        this.$client_contentPanel = $("#client .contentPanel");
        this.$client_level_1 = $("#client .level_1");
        this.$client_sub1 = $("#client .sub .sub1");
        this.$client_sub2 = $("#client .sub .sub2");
        this.$client_sub3 = $("#client .sub .sub3");
        this.$client_sub4 = $("#client .sub .sub4");
        this.$client_sub5 = $("#client .sub .sub5");
        //
        this.$about = $("#about");
        this.$about_1 = $("#about .level_1");
        this.$about_2 = $("#about .level_2");
        this.$about_3 = $("#about .level_3");
        this.$about_4 = $("#about .level_4");
        this.$pgy_about_2 = this.$about_2.children('.pgy_about_2');
        //
        this.$career = $("#career");
        this.$career_1 = $("#career .level_1");
        this.$career_2 = $("#career .level_2");
        this.$career_3 = $("#career .level_3");
        this.$career_4 = $("#career .level_4");
        this.$career_5 = $("#career .level_5");
        this.$career_6 = $("#career .level_6");
        this.$career_7 = $("#career .level_7");
        this.$career_8 = $("#career .level_8");
		this.huxi(this.$career_5);
		this.huxi(this.$career_6);
		this.huxi(this.$career_7);
		this.huxi(this.$career_8);
        //
        this.$contact = $("#contact");
        this.$contact_1 = $("#contact .level_1");
        this.$contact_2 = $("#contact .level_2");
        this.$contact_3 = $("#contact .level_3");
        //
        this.$cirPanel = $("#cirPanel");
        this.$cirNav = $("#cirPanel li");
		//
		this.$level_1_logo = $("#guide").children('.level_1').children('.level_1_logo');
		this.$scrollDown_down = $("#guide .level_2 .scrollDown");
		this.$text_down = $("#guide .level_2 .txt");
        //
        this.initObject();
        this.initScroll();
        this.initGuide();
        this.initMethodology();
        this.initHash();
        this.initCirNav();
        //
		this.c4();
        //
    };
	//---------------------4c hover-----------------
	p.c4 = function(){
		var cur = this;
		$('#consumerBall').mouseenter(function(){
			auto_img_big(cur.$methodology_consumer,'175px','210px',-5)
		})
		$('#consumerBall').mouseleave(function(){
			auto_img_big(cur.$methodology_consumer,'165px','200px',0)
		})
		$('#commerceBall').mouseenter(function(){
			auto_img_big(cur.$methodology_commerce,'568px','504px',-5)
		})
		$('#commerceBall').mouseleave(function(){
			auto_img_big(cur.$methodology_commerce,'558px','494px',0)
		})
		$('#contentBall').mouseenter(function(){
			auto_img_big(cur.$methodology_content,'140px','157px',-5)
		})
		$('#contentBall').mouseleave(function(){
			auto_img_big(cur.$methodology_content,'130px','147px',0)
		})
		$('#channelBall').mouseenter(function(){
			auto_img_big(cur.$methodology_channel,'176px','212px',-5)
		})
		$('#channelBall').mouseleave(function(){
			auto_img_big(cur.$methodology_channel,'166px','202px',0)
		})
		function auto_img_big(obj,width,height,lt){
			if(!obj.children('.img').is(":animated")){
			//	var left = parseFloat(obj.css('left'))+lt+'px';
			//	var top = parseFloat(obj.css('top'))+lt+'px';
				//obj.animate({left:left,top:top},100)
				//obj.children('img').stop().animate({width:width,height:height,left:lt+'px',top:lt+'px'},270,'swing');
				//TweenLite.to(obj, 0.2, {left:left,top:top});
				TweenLite.to(obj.children('img'), 0.214, {width:width,height:height,left:lt+'px',top:lt+'px'});
			}	
		}
	}
    //--------------------------------------------guide---------------------------------------------//
    p.initGuide = function()
    {
        this.$scrollDown = $("#guide .scrollDown");
        this.$scrollDown.click(function(){
            TweenLite.to($("html,body"), 0.5, {scrollTop: document.body.clientHeight });
        });
    }

    //------------------------------------------methodology------------------------------------------//
    p.initMethodology = function()
    {
        var cur = this;
        //
        this.$consumerBall.click(function(){
            cur.updateDetail(0);
        });
        this.$contentBall.click(function(){
            cur.updateDetail(1);
        });
        this.$channelBall.click(function(){
            cur.updateDetail(2);
        });
        this.$commerceBall.click(function(){
            cur.updateDetail(3);
        });

        this.$methodologyClose.click(function(){
            cur.$methodologyDetail.fadeOut();
        });
    };

    p.updateDetail = function(i)
    {
        this.$methodologyDetail.fadeIn();
        this.$methodologyDetail.children(".contentPanel").children(".intro").html(this.$methodologyData.children(".intro").eq(i).html());
        this.$methodologyDetail.children(".contentPanel").children(".thumb").children("img").attr("src",this.$methodologyData.children(".thumb").eq(i).text());
    };

    p.initObject = function()
    {
        //
        this.initObjectFun(this.$methodology_bottom);
        this.initObjectFun(this.$methodology_consumer);
        this.initObjectFun(this.$methodology_content);
        this.initObjectFun(this.$methodology_channel);
        this.initObjectFun(this.$methodology_commerce);
        this.initObjectFun(this.$methodology_commerce_text);
		
		//
		this.initObjectFun(this.$level_1_logo);
		this.initObjectFun(this.$scrollDown_down);
		this.initObjectFun(this.$text_down);
        //
        this.initObjectFun(this.$solution_1);
        this.initObjectFun(this.$solution_2);
        this.initObjectFun(this.$solution_3);
        this.initObjectFun(this.$solution_4);
        //
        //this.$client_contentPanel.css("top",)
        this.initObjectFun(this.$client_level_1);
        this.initPosFun(this.$client_contentPanel,0,-800);
        this.initPosFun(this.$client_sub1,-700,-600-300);
        this.initPosFun(this.$client_sub2,-300,-600+300);
        this.initPosFun(this.$client_sub3,0,500);
        this.initPosFun(this.$client_sub4,300,-600-300);
        this.initPosFun(this.$client_sub5,700,-600+300);
        //
        this.initObjectFun(this.$about_1);
        this.initObjectFun(this.$about_2);
        this.initObjectFun(this.$pgy_about_2);
        this.initObjectFun(this.$about_3);
        this.initObjectFun(this.$about_4);
        //
        this.initObjectFun(this.$career_1);
        this.initObjectFun(this.$career_2);
        this.initObjectFun(this.$career_3);
        this.initObjectFun(this.$career_4);
        this.initObjectFun(this.$career_5);
        this.initObjectFun(this.$career_6);
        this.initObjectFun(this.$career_7);
        this.initObjectFun(this.$career_8);
        //
        this.initObjectFun(this.$contact_1);
        this.initObjectFun(this.$contact_2);
        this.initObjectFun(this.$contact_3);
        //
    };

    p.initPosFun = function($dom,tempX,tempY)
    {
        tempX = tempX || 0;
        tempY = tempY || 0;
        $dom.data("endX",parseFloat($dom.css("left")));
        $dom.data("startX",parseFloat($dom.css("left"))+tempX);
        $dom.data("tempX",tempX);

        $dom.data("endY",parseFloat($dom.css("top")));
        $dom.data("startY",parseFloat($dom.css("top"))+tempY);
        $dom.data("tempY",tempY);
        //
        $dom.css({"left":$dom.data("startX"),"top":$dom.data("startY")});
    };

    p.posMoveFun = function($dom,$domParent)
    {
        //父级到窗口上边缘的距离
        var tempY = $(document).scrollTop()-$domParent.position().top;
        var per = Math.max(-tempY/800,0);
        var targetX = $dom.data("endX")+$dom.data("tempX")*per;
        var targetY = $dom.data("endY")+$dom.data("tempY")*per;
        $dom.css({"left":targetX,"top":targetY});
    }

    p.initObjectFun = function($dom)
    {
        $dom.data("posY",parseFloat($dom.css("top")));
    };

    p.moveFun = function($dom,$domParent,ease)
    {
        //父级到窗口上边缘的距离
        var tempY = $(document).scrollTop()-$domParent.position().top;
        var targetY = $dom.data("posY")+tempY*ease;
        $dom.css("top",targetY);
    };

    //------------------------------------scroll--------------------------------------//
    p.initScroll = function()
    {
        var cur = this;
        $(window).bind("scroll",function(){
            if($(document).scrollTop() >= document.body.clientHeight)
            {
                cur.navPanelAppear();
				cur.$cirPanel.fadeIn();
            }
            else
            {
                cur.navPanelDisappear();
				cur.$cirPanel.fadeOut();
            }
            //
            cur.moveFun(cur.$methodology_bottom,cur.$methodology,0.6);
            cur.moveFun(cur.$methodology_consumer,cur.$methodology,0.3);
            cur.moveFun(cur.$methodology_content,cur.$methodology,0.25);
            cur.moveFun(cur.$methodology_channel,cur.$methodology,0.1);
            cur.moveFun(cur.$methodology_commerce,cur.$methodology,0.4);
            cur.moveFun(cur.$methodology_commerce_text,cur.$methodology,0.4);
			//
			cur.moveFun(cur.$level_1_logo,$("#guide"),-0.2);
			cur.moveFun(cur.$scrollDown_down,$("#guide"),0.8);
			cur.moveFun(cur.$text_down,$("#guide"),-0.6);
            //
            cur.moveFun(cur.$solution_1,cur.$solution,0.5);
            cur.moveFun(cur.$solution_2,cur.$solution,0.4);
            cur.moveFun(cur.$solution_3,cur.$solution,0.3);
            cur.moveFun(cur.$solution_4,cur.$solution,0.2);
            //
            cur.posMoveFun(cur.$client_contentPanel,cur.$client);
            cur.posMoveFun(cur.$client_sub1,cur.$client);
            cur.posMoveFun(cur.$client_sub2,cur.$client);
            cur.posMoveFun(cur.$client_sub3,cur.$client);
            cur.posMoveFun(cur.$client_sub4,cur.$client);
            cur.posMoveFun(cur.$client_sub5,cur.$client);
            //cur.moveFun(cur.$client_level_1,cur.$client,-0.3);

            //
            cur.moveFun(cur.$about_1,cur.$about,0.5);
            cur.moveFun(cur.$about_2,cur.$about,-0.3);
            cur.moveFun(cur.$pgy_about_2,cur.$about,0.6);
            cur.moveFun(cur.$about_3,cur.$about,-0.1);
            cur.moveFun(cur.$about_4,cur.$about,0.2);
            //
            cur.moveFun(cur.$career_1,cur.$career,0.5);
            cur.moveFun(cur.$career_2,cur.$career,-0.2);
            cur.moveFun(cur.$career_3,cur.$career,0.3);
            cur.moveFun(cur.$career_4,cur.$career,0.2);
            cur.moveFun(cur.$career_5,cur.$career,0.3);
            cur.moveFun(cur.$career_6,cur.$career,0.4);
            cur.moveFun(cur.$career_7,cur.$career,0.618);
            cur.moveFun(cur.$career_8,cur.$career,0.2);
            //
            cur.moveFun(cur.$contact_1,cur.$contact,0.5);
            cur.moveFun(cur.$contact_2,cur.$contact,0.4);
            cur.moveFun(cur.$contact_3,cur.$contact,0.2);
            //
            cur.updateCirNav($(document).scrollTop());
        });
    };

    p.navPanelAppear = function()
    {
        var cur = this;
        TweenLite.to(this.$navContainer, 0.5,{
            top: 0,
            opacity: 1,
            onStart:function(){
                cur.$navContainer.show();
            }
        });
    };
	//-----------------huxi-----------
	p.huxi = function(obj1){
		var cur = this;
		var obj = obj1.children('.fg');
		obj.load(function(){
		var w = parseInt(obj.width());
		var h = parseInt(obj.height());
		var i =1;
		var t = true;
		var y = true;
		var ss = setInterval(function(){
			if(t){//width:w-i+'px',height:h-i+'px',marginTop:i+'px',marginLeft:i+'px',
				obj.css({opacity:1-0.1*i});
				i++;
				if(i>10){
					t=false;
					i=1;
				}
			}

			if(!t){//width:w-3+i+'px',height:h-3+i+'px',marginTop:3-i+'px',marginLeft:3-i+'px',
				obj.css({opacity:0.1*i});
				i++;
				if(i>10){
					t=true;
					i=1;
				}
			}
			//if(y>=20){
				//clearInterval(ss);
			//}
			y++;
		},70)	
		})
	}
    p.navPanelDisappear = function()
    {
        var cur = this;
        TweenLite.to(this.$navContainer, 1,{
            top: -50,
            opacity: 0,
            onComplete:function(){
                cur.$navContainer.hide();
            }
        });
    };
    //
    p.initCirNav = function()
    {
        var cur = this;
        this.$cirNav.each(function(i){
            $(this).data("id",i);
        });
        this.$cirNav.click(function(){
            var id = $(this).data("id");
            location.hash = "_"+cur.cirNavAry[id];
        });
		this.$cirNav.mouseenter(function(){
			$(this).children('.text').stop().animate({width:'70px',left:'-78px'},10)
		})
		this.$cirNav.mouseleave(function(){
			$(this).children('.text').stop().animate({width:'0px',left:'10px'},10)
		})
    };

    p.updateCirNav = function(posY)
    {
        var cur = this;
        this.$mainPart.each(function(i){
            var startY = $(this).position().top;
            var endY = $(this).position().top+800;
            if(posY >= startY && posY< endY)
            {
                 cur.$cirNav.eq(i).removeClass("cir_out").addClass("cir_over");
            }
            else
            {
                cur.$cirNav.eq(i).removeClass("cir_over").addClass("cir_out");
            }
        });
    };
    //
    p.initHash = function()
    {
        var cur = this;
        $(window).bind("hashchange",function(event){
            var hashStr = location.hash;
            var targetY = 0;
            if(hashStr == "#_methodology")
            {
                targetY = cur.$methodology.position().top;
            }
            if(hashStr == "#_service")
            {
                targetY = cur.$service.position().top;
            }
            if(hashStr == "#_solution")
            {
                targetY = cur.$solution.position().top;
            }
            if(hashStr =="#_client")
            {
                targetY = cur.$client.position().top;
            }
            if(hashStr =="#_about")
            {
                targetY = cur.$about.position().top;
            }
            if(hashStr =="#_career")
            {
                targetY = cur.$career.position().top;
            }
            if(hashStr =="#_contact")
            {
                targetY = cur.$contact.position().top;
            }
            TweenLite.to($("html,body"), 1, {scrollTop: targetY });
        });
        $(window).triggerHandler("hashchange");
    }

    bfd.Main = Main;
})();