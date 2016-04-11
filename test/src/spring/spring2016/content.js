goog.provide('spring.spring2016.Content');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');

goog.require('pt.api.JsonpApi');
// goog.require('goog.dom.classlist');
// goog.require('goog.style');
// goog.require('goog.events');

// goog.require('goog.array');
// goog.require('goog.fx.dom');
// goog.require('goog.fx.easing');
// goog.require('goog.fx.css3');
// goog.require('goog.ui.Dialog');

goog.scope(function() {
	var _ = spring.spring2016;
	var JsonpApi=pt.api.JsonpApi;
	_.Content = function() {
		this.lotterNum = 0; //抽奖次数 默认是 0 ；
		this.getRedValue();



	};
	_.Content.prototype.getRedValue = function() {
		var redUpValue=new JsonpApi('http://star.api.plu.cn/thanksgiving/inventory');
		redUpValue.load().then(function(json){
			this.lotterNum=parseInt(json['result']);
			alert(this.lotterNum);
		},null,this).thenCatch(function(error){
			console.log(error);
			//alert('获取失败！');
		});
	}

});