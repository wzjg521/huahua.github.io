(function()
{
	var appmap = {'10199':{'appid':'1600000007','templid':1009},
				  '10204':{'appid':'1600000007','templid':1010},
				  '10310':{'appid':'1600000007','templid':1011}};
	
	var acturl = 'http://minigame.qq.com/cooperation/feed/feed_jump.html';
	var actpic = 'http://qqgame.qq.com/style/img/qqgame_logo.png';
	
	var isPostReady = false;
	var itemWaitList = [];
	
	/***
	***  初始化订阅组建
	***  param:{appid:游戏的appid}
	*/
	window.initFeed_qqgame = function(param)
	{
		gameid = param.appid;
		appid = appmap[gameid].appid;
		templid = appmap[gameid].templid;
		loadCss();
		$('<iframe src="http://minigame.qq.com/cooperation/feed/feed_iframe.html" frameborder="0" id="postDataIFrame_qqgame" style="display:none"></iframe>').appendTo(document.body);
		$('#postDataIFrame_qqgame').load(function(){
			isPostReady = true;
			for(var i=0,len=itemWaitList.length;i<len;i++){
				FeedAjax(6, itemWaitList[i]);
			}
		});
		if(param.itemid){
			window.addAnchor_qqgame(param.containerId, param.itemid);
		}
		$(document).delegate('.j-feedBtn','click',function(e){
			var itemid = $(this).attr('id');
			if($(this).hasClass('qqgame-feed-button')){
				window.addFeed_qqgame(itemid);
			}
			else if($(this).hasClass('qqgame-feed-cancel')){
				window.delFeed_qqgame(itemid);
			}
		});
		$(document).delegate('.j-closeDialog','click',function(e){
			var itemid = $(this).attr('itemid');
			$('#dialog_'+itemid).remove();
		});
		$.receiveMessage(function(e){
			if(!e.data){
				return;
			}
			var data;
			if(typeof  JSON!=="undefined"){
				data=JSON.parse(e.data);
			}else{
				data = str2JSON(e.data);
			}
			console.log(data)
			window.jsonpCallback_qqgame(data);
		});
	}
	
	/***
	***  添加主播和对应的订阅按钮 
	***  containerId:添加订阅组建的容器ID, 
	***  itemid:主播ID,
	*/
	window.addAnchor_qqgame = function(containerId, itemid){
		var feedHTML = '<div class="qqgame-container" id="contianer_'+itemid+'"><div class="qqgame-feed"><a id="'+itemid+'" href="#" class="qqgame-feed-button j-feedBtn">订阅</a></div></div>';
		$('#'+containerId).html(feedHTML);
		if(isPostReady){
			FeedAjax(6, itemid);
		}else{
			itemWaitList.push(itemid);
		}
	}
	
	var isShowDialog = 'ISSHOWFEEDDIALOG';
	
	/***
	***  添加主播订阅
	***  itemid:主播ID
	*/
	window.addFeed_qqgame = function(itemid){
		$("#"+itemid).attr("class", "qqgame-feed-loading");
		FeedAjax(4,itemid);
	}
	
	/***
	***  取消主播订阅
	***  itemid:主播ID
	*/
	window.delFeed_qqgame = function(itemid){
		$("#"+itemid).attr("class", "qqgame-feed-loading");
		FeedAjax(5,itemid);
	}
	
	/***
	***  批量主播订阅
	***  itemlist:主播ID集合
	*/
	window.other_addFeed_qqgame = function(itemlist){
		if(!itemlist || itemlist.length <= 0){
			return;
		}
		for(var i=0,len=itemlist.length;i<len;i++){
			FeedAjax(4,itemlist[i]);
		}
	}
	
	/***
	***  群发订阅消息
	***  itemid:主播ID
	***  msg:消息
	*/
	window.sendFeedMsg_qqgame = function(itemid,msg){
		if(!msg || msg == ''){
			FeedAjax(3,itemid);
			return;
		}
		var obj = {};
		obj.act_desc = msg;
		obj.act_url = acturl+'?appid='+gameid+'&itemid='+itemid;
		obj.act_pic = actpic;
		var param;
		if(typeof  JSON!=="undefined"){
			param=encodeURIComponent(JSON.stringify(obj));
		}else{
			param = encodeURIComponent(json2String(obj));
		}
		FeedAjax(7, itemid, param);
	}
	
	function loadCss(){
		var fileref=document.createElement("link"); 
		fileref.setAttribute("rel", "stylesheet"); 
		fileref.setAttribute("type", "text/css"); 
		fileref.setAttribute("href", "http://minigame.qq.com/style/tga/feed.css"); 
		document.getElementsByTagName("head")[0].appendChild(fileref); 
	}
	
	window.jsonpCallback_qqgame = function(data){
		if(data.result==0){
			var itemid = data.itemid;
			switch(data.cmd){
				case 3:window.sendFeedMsg_qqgame(itemid,data.rsp.data.desc);break;
				case 4:
					if(data.rsp_ret != 0){
						$("#"+itemid).attr("class", "qqgame-feed-button j-feedBtn");
						return;
					}
					if($("#"+itemid).length > 0){
						$("#"+itemid).attr("class", "qqgame-feed-cancel j-feedBtn");
						var isShow = isShowDialog + '' + itemid;
						console.log(111)
						if(!getCookie(isShow) || getCookie(isShow) != 1){
							var nodes = '<div class="qqgame-dialog" id="dialog_'+itemid+'">\
											<a href="#" class="qqgame-dialog-close j-closeDialog" itemid="'+itemid+'">关闭</a>\
											<div class="qqgame-dialog-body">\
												<i class="qqgame-dialog-icon"></i>\
												<div class="qqgame-dialog-msg">\
													<h2 class="qqgame-dialog-msg-title">订阅成功</h2>\
													<p class="qqgame-dialog-msg-text">您可以收到该房间的最新动态了！</p>\
												</div>\
											</div>\
											<div class="qqgame-dialog-foot">\
												<a href="#" class="qqgame-dialog-btn j-closeDialog" itemid="'+itemid+'">确 定</a>\
											</div>\
										</div>'
							$("#contianer_"+itemid).append(nodes);
							setCookie(isShow, 1, 365);
						}
					}
					break;
				case 5:
					if(data.rsp_ret != 0){
						$("#"+itemid).attr("class", "qqgame-feed-cancel j-feedBtn");
						return;
					}
					$("#"+itemid).attr("class", "qqgame-feed-button j-feedBtn");
					break;
				case 6:
					console.log(data.rsp_ret)
					if(data.rsp_ret != 0){
						$("#"+itemid).attr("class", "qqgame-feed-button j-feedBtn");
					}else{
						$("#"+itemid).attr("class", "qqgame-feed-cancel j-feedBtn");
					}
					break;
			}
		}
	}

	function FeedAjax(cmd,itemid,param)
	{
		var obj = {'cmd':cmd,'param':param,'appid':appid,'templid':templid,'itemid':itemid};
		var data;
		if(typeof  JSON!=="undefined"){
			data=JSON.stringify(obj);
		}else{
			data = json2String(obj);
		}
		$.postMessage(data, 'http://minigame.qq.com', $('#postDataIFrame_qqgame')[0].contentWindow);
		return;
	}
	
	function getCookie(name){
		if(document.cookie.length>0)
		{
			var c_start=document.cookie.indexOf(name + "=")
			if (c_start!=-1)
			{ 
				c_start=c_start + name.length+1 
				c_end=document.cookie.indexOf(";",c_start)
				if (c_end==-1) c_end=document.cookie.length
				return unescape(document.cookie.substring(c_start,c_end));
			} 
		}
		return "";
	}
	
	function setCookie(c_name,value,expiredays)
	{
		var exdate=new Date()
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie = c_name + "=" + escape (value) +"; expires="+exdate.toGMTString()+"; path=/ ; domain="+location.host;
	}
	
	function str2JSON(str){
		eval('var __pt_json='+str);
		return __pt_json;
	}
	
	function json2String(obj)
	{
		var t = typeof (obj);
		if (t != "object" || obj === null) {

			if (t == "string") obj = '"'+obj+'"';
			return String(obj);

		}else{
			// recurse array or object
			var n, v, json = [], arr = (obj && obj.constructor == Array);
			for (n in obj) {
				v = obj[n]; t = typeof(v);
				if (t == "string") v = '"'+v+'"';
				else if (t == "object" && v !== null) v = this.json2String(v);
				json.push((arr ? "" : '"' + n + '":') + String(v));
			}
			return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
		}
	}
})();