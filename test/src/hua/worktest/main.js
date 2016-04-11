goog.provide('hua.worktest.main');

goog.require('hua.worktest.Content');

goog.scope(function() {
	var _ = hua.worktest;
	_.main = function() {
		new hua.worktest.Content();
	}
})