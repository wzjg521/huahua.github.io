goog.provide('spring2015.pc.GiftSpring');

goog.require('goog.dom');
goog.require('goog.array');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('pt.api.JsonpApi');
goog.require('pt.ui.sidenav.Scroll2');
goog.require('pt.ui.LotteryRecord');
goog.require('pt.ui.topbar.SmallTopbar');


goog.scope(function() {
    var _ = spring2015.pc;
    var JsonpApi = pt.api.JsonpApi;

    _.GiftSpring = function() {
        new pt.ui.topbar.SmallTopbar();

        this.getLotteryNum();
        this.getRedValue();
        this.addPack();

        //dialog close
        goog.events.listen(goog.dom.getElement('dialog_close'), goog.events.EventType.CLICK, this.dialogClose, null, this);

        //ok_btn
        goog.events.listen(goog.dom.getElement('ok_btn'), goog.events.EventType.CLICK, this.dialogClose, null, this);

        //lottery history
        new pt.ui.LotteryRecord('cpvl2upw').decorate(goog.dom.getElement('lottery_list'));

        //lottery
        goog.events.listen(goog.dom.getElement('luck_btn'), goog.events.EventType.CLICK, this.Lottery, null, this);

        //QTb
        goog.events.listen(goog.dom.getElement('get_Tb'), goog.events.EventType.CLICK, this.GetTb, null, this);


    };

    //lottery
    _.GiftSpring.prototype.Lottery = function() {
            var jsonp = new JsonpApi('http://vote.longzhu.com/api/lottery/cpvl2upw');
            jsonp.load().then(function(json) {
                var code = parseInt(json['code']);
                if (code == -1) {
                    if (!this.isLogin_) {
                        window['LoginManager']['login']();
                        return;
                    }
                } else if (code == -2) {
                    this.dialogShow({
                        'dialog_txt': '亲，活动还未开始哦~',
                        'dialog_reward': '',
                        'dialog_tip': '',
                        'dialog_reward_flag': true,
                        'dialog_tip_flag': true
                    });
                } else if (code == -3) {
                    this.dialogShow({
                        'dialog_txt': '',
                        'dialog_reward': '',
                        'dialog_tip': '需要消费100个【猴赛磊】<br>才能进行抽奖哦~',
                        'dialog_reward_flag': true,
                        'dialog_txt_flag': true
                    });
                } else if (code > 0) {
                    if (code == 6) {
                        this.dialogShow({
                            'dialog_txt': '谢谢参与  再接再厉',
                            'dialog_reward': '',
                            'dialog_tip': '',
                            'dialog_reward_flag': true,
                            'dialog_tip_flag': true
                        });
                    } else {
                        this.dialogShow({
                            'dialog_txt': '恭喜您获得',
                            'dialog_reward': json["message"],
                            'dialog_tip': '我们将在活动结束后通过邮件与您联系<br>如有问题请联系客服'
                        });
                    }
                }
                this.getLotteryNum();
            }, null, this).thenCatch(function(error) {});
        }
        //get Tb
    _.GiftSpring.prototype.GetTb = function() {
        var jsonp = new JsonpApi('http://star.api.plu.cn/bestroom/DrawFestivalTCoin');
        jsonp.load().then(function(json) {
            var errorcode = parseInt(json['errorcode']);
            var success = parseInt(json['success']);
            if (errorcode == -902) {
                if (!this.isLogin_) {
                    window['LoginManager']['login']();
                    return;
                }
            } else if (errorcode == -901) {
                this.dialogShow({
                    'dialog_txt': '亲，活动还未开始哦~',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (errorcode == -903) {
                this.dialogShow({
                    'dialog_txt': '亲，您已经领取过了哦~',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (errorcode == -904) {
                this.dialogShow({
                    'dialog_txt': '领取失败',
                    'dialog_reward': '',
                    'dialog_tip': '还未达到领取条件',
                    'dialog_reward_flag': true
                });
            } else if (errorcode == -905) {
                this.dialogShow({
                    'dialog_txt': '领取失败',
                    'dialog_reward': '',
                    'dialog_tip': '您没有开通房间，请申请',
                    'dialog_reward_flag': true
                });
            } else if (errorcode == 1) {
                this.dialogShow({
                    'dialog_txt': 'T币领取成功',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (errorcode == -906) {
                this.dialogShow({
                    'dialog_txt': '领取失败',
                    'dialog_reward': '',
                    'dialog_tip': '领取名额已满',
                    'dialog_reward_flag': true
                });
            }
        }, null, this).thenCatch(function(error) {});
    };

    //add_pack
    _.GiftSpring.prototype.addPack = function() {
        var jsonp = new JsonpApi('http://star.api.plu.cn/redenvelope/EventRedList');
        jsonp.load().then(goog.bind(function(json) {
            if (json.length > 0) {
                goog.array.forEach(json, function(item) {
                    var envtype = parseInt(item["msg"]["type"]);
                    var imgsrc = "";
                    if (envtype == 2) {
                        imgsrc = item["msg"]["user"]["avatar"];
                    } else {
                        imgsrc = "http://r.plures.net/s/2922f1b5fk0/imagesbin/spring2015/pc/face.png";
                    }

                    var packId = item["msg"]["redEnvelopeId"];

                    var phoneBg = goog.dom.getElement('phone_bg');
                    var dl = goog.dom.createElement('dl');

                    var dt = goog.dom.createElement('dt');
                    goog.dom.appendChild(dl, dt);

                    var span = goog.dom.createDom('span', 'tip_title txt_hide');
                    if (envtype == 3) {
                        span.innerHTML = '【猴赛磊】累计1.000.000喽!';
                    } else if (envtype == 4) {
                        span.innerHTML = '每晚20:00记得抢红包哦~~';
                    } else if (envtype == 2) {
                        span.innerHTML = item["msg"]["user"]["username"] + '送出了一个新年红包';
                    }
                    goog.dom.append(dt, span);

                    var dd = goog.dom.createElement('dd');
                    goog.dom.appendChild(dl, dd);

                    var face = goog.dom.createDom('div', 'face');
                    var img = goog.dom.createElement('img');
                    img.setAttribute("src", imgsrc);
                    goog.dom.append(face, img);
                    goog.dom.appendChild(dd, face);

                    var red_pack = goog.dom.createDom('div', 'red_pack');
                    red_pack.setAttribute('packid', packId);
                    goog.dom.appendChild(dd, red_pack);

                    goog.dom.appendChild(phoneBg, dl);
                }, this);

                //scroll
                this.scroll_ = new pt.ui.sidenav.Scroll2('stage');

                this.initScrollLocation();

                //red_pack click
                if (goog.dom.getElementsByClass('red_pack')) {
                    var redPack = goog.dom.getElementsByClass('red_pack');
                    goog.array.forEach(redPack, function(elem) {
                        goog.events.listen(elem, goog.events.EventType.CLICK, this.handleClick, false, this);
                    }, this);
                }
            }
        }, this)).thenCatch(function(error) {

        });
    };

    //click pack
    _.GiftSpring.prototype.handleClick = function(e) {
        var jsonp = new JsonpApi('http://star.api.plu.cn/redenvelope/drawevent');
        var currentId = e.currentTarget.getAttribute('packid');
        var data = {
            "id": currentId
        };
        jsonp.load(data).then(function(json) {
            var results = parseInt(json['result']);
            if (results == -1) {
                if (!this.isLogin_) {
                    window['LoginManager']['login']();
                    return;
                }
            } else if (results == -2) {
                this.dialogShow({
                    'dialog_txt': '您已经领取过了哦~',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (results == -3) {
                this.dialogShow({
                    'dialog_txt': '来晚一步红包抢完了',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (results == -4) {
                this.dialogShow({
                    'dialog_txt': '红包已经过期了',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (results == -5) {
                this.dialogShow({
                    'dialog_txt': '红包不存在',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (results == -6) {
                this.dialogShow({
                    'dialog_txt': '用户不存在',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (results == -7) {
                this.dialogShow({
                    'dialog_txt': '等级不足',
                    'dialog_reward': '',
                    'dialog_tip': '',
                    'dialog_reward_flag': true,
                    'dialog_tip_flag': true
                });
            } else if (results > 0) {
                this.dialogShow({
                    'dialog_txt': '恭喜您获得',
                    'dialog_reward': json['content']['count'] + '个' + json['content']['title'],
                    'dialog_tip': '',
                    'dialog_tip_flag': true
                });
            }
        }, null, this).thenCatch(function(error) {});
    };

    //dialog close
    _.GiftSpring.prototype.dialogClose = function() {
        var dialog = goog.dom.getElement('dialog');
        var dialog_histroy = goog.dom.getElement('lottery-prize');
        dialog.style.display = 'none';
        dialog_histroy.style.display = 'none';
    };
    //dialog show
    _.GiftSpring.prototype.dialogShow = function(option) {
        var options = option || {};
        var dialog_txt_flag = options['dialog_txt_flag'] ? 1 : 0;
        var dialog_reward_flag = options['dialog_reward_flag'] ? 1 : 0;
        var dialog_tip_flag = options['dialog_tip_flag'] ? 1 : 0;
        var dialog = goog.dom.getElement('dialog');
        var dialog_txt = goog.dom.getElementByClass('dialog_txt', dialog);
        var dialog_reward = goog.dom.getElementByClass('dialog_reward', dialog);
        var dialog_tip = goog.dom.getElementByClass('dialog_tip', dialog);

        if (dialog_txt_flag == 1) {
            dialog_txt.style.display = 'none';
        } else {
            dialog_txt.style.display = 'block';
        }
        if (dialog_reward_flag == 1) {
            dialog_reward.style.display = 'none';
        } else {
            dialog_reward.style.display = 'block';
        }
        if (dialog_tip_flag == 1) {
            dialog_tip.style.display = 'none';
        } else {
            dialog_tip.style.display = 'block';
        }
        dialog_txt.innerHTML = options['dialog_txt'];
        dialog_reward.innerHTML = options['dialog_reward'];
        dialog_tip.innerHTML = options['dialog_tip'];
        dialog.style.display = 'block';

        var dialog_box = goog.dom.getElementByClass('dialog_box', dialog);
        var dialog_content = goog.dom.getElementByClass('dialog_content', dialog);
        var dialog_box_h = dialog_box.offsetHeight;
        var topCha = parseInt((dialog_content.offsetHeight - parseInt(dialog_box_h)) / 2);
        dialog_box.style.marginTop = topCha + 'px';
    };

    //获取抽奖次数
    _.GiftSpring.prototype.getLotteryNum = function() {
        var jsonp = new JsonpApi('http://vote.longzhu.com/api/getChanceNumber/cpvl2upw');
        jsonp.load().then(function(json) {
            var lotteryNum = goog.dom.getElement('lotter_num');
            if (parseInt(json['code']) == 1) {
                lotteryNum.innerHTML = parseInt(json['lottery_chance']);
            } else {
                lotteryNum.innerHTML = 0;
            }
        }).thenCatch(function(error) {});
    };

    //获取红包值
    _.GiftSpring.prototype.getRedValue = function() {
        var jsonp = new JsonpApi('http://star.api.plu.cn/spring2016act/inventory');
        jsonp.load().then(function(json) {
            var redWrap = goog.dom.getElement('red_up');
            if (json['result']) {
                var ResultUp = json['result'];
                if (ResultUp <= 1000000) {
                    ResultUp = 1;
                } else if (ResultUp <= 2000000) {
                    ResultUp = 2;
                } else if (ResultUp <= 3000000) {
                    ResultUp = 3;
                } else if (ResultUp <= 4000000) {
                    ResultUp = 4;
                } else if (ResultUp <= 5000000) {
                    ResultUp = 5;
                } else if (ResultUp <= 6000000) {
                    ResultUp = 6;
                } else if (ResultUp <= 7000000) {
                    ResultUp = 7;
                } else if (ResultUp <= 8000000) {
                    ResultUp = 8;
                } else if (ResultUp <= 9000000) {
                    ResultUp = 9;
                } else if (ResultUp <= 10000000 || ResultUp > 10000000) {
                    ResultUp = 10;
                }
                for (var i = ResultUp; i > 0; i--) {
                    var upValue = goog.dom.getElementByClass('value' + i, redWrap);
                    goog.dom.classlist.add(upValue, 'up' + i);
                }
            }
        }).thenCatch(function(error) {});
    };

    //dialog close
    _.GiftSpring.prototype.initScrollLocation = function() {
        goog.dom.getElement('stage-scroll').scrollTop = 9999999;
    };

});
