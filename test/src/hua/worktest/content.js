goog.provide('hua.worktest.Content');

goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('goog.dom.classlist');
goog.require('goog.style');

goog.require('goog.array');
goog.require('goog.fx.dom');
goog.require('goog.style');
goog.require('goog.fx.Animation');
goog.require('goog.fx.Transition');
goog.require('goog.fx.easing');
goog.require('goog.fx.css3');
goog.require('goog.ui.Dialog');

goog.scope(function() {
	var _ = hua.worktest;
	_.Content = function() {
		this.giftListDom = goog.dom.getElement('gift_list');
		this.animateDom = goog.dom.getElement('gift_new');
		this.initAanimate();
	}

	_.Content.prototype.initAanimate = function() {
		this.createGiftDom()
		this.animateLeft();
	}
	_.Content.prototype.createGiftDom = function() {
	    var element = goog.dom.createDom('div', {
	      'className': 'gift_item'
	    });
	    goog.dom.append(this.giftListDom, element);
	}
	_.Content.prototype.animateLeft = function() {
		var listH = goog.style.getSize(this.giftListDom).height;
		var listW = goog.style.getSize(this.giftListDom).width;
	    var animate = new goog.fx.dom.Slide(this.animateDom, [-listW, listH + 4], [0, listH + 4], 800, 0.6); 
		animate.play();
		animate.onEnd = this.animateBottom();
	}
	_.Content.prototype.animateBottom = function() {
		var listH = goog.style.getSize(this.giftListDom).height;
		var itemH = goog.style.getSize(this.animateDom).height;
		var animate = new goog.fx.dom.ResizeHeight(this.giftListDom, listH, listH - itemH, 800, 0.6); 
		animate.play();
	}
	_.Content.prototype.animateRight = function() {
		var listH = goog.style.getSize(this.giftListDom).height;
		var listW = goog.style.getSize(this.giftListDom).width;
	    var animate = new goog.fx.dom.Slide(this.giftListDom, [-listW, listH], [0, listH], 800, 0.6); 
		animate.play();
	}

})