$(function() {
    var goodEle = $('.good_num');
    var commitNum = $('.commit_num');
    var commit_dialog = $('#comment_dialog');
    var hideCommit = commit_dialog.find('.comment_hide');
    var backCommit = commit_dialog.find('.comment_back');
    var commitList = $('#scrolist');
    var myScroll, pullUpEl, pullUpOffset, generatedCount = 1;
    document.addEventListener('touchmove', function(e) {
        e.preventDefault();
    }, false);
    var bodyScroll = new iScroll('page_scroll');

    

    goodEle.click(function() {
        // $.ajax({
        //   type: 'post',
        //   url: 'http://send.good.num',
        //   data: {
        //     user: 'hua', //用户名称，或者uId
        //     videoId: 1234 //此用户点赞的视频Id
        //   }
        // })
        $(this).addClass('active');
        var goodCount = $(this).find('.video_count');
        goodCount.html(parseInt(goodCount.html()) + 1);
    })

    commitNum.click(function() {
        bodyScroll.destroy();
        bodyScroll = null;
        commitList.html('');
        commit_dialog.show();
        loadData();
        loaded();
    })
    hideCommit.click(function() {
        myScroll.destroy();
        bodyScroll = new iScroll('page_scroll');
        
        commit_dialog.hide();
    })
    backCommit.click(function() {
        myScroll.destroy();
        bodyScroll = new iScroll('page_scroll');
        commit_dialog.hide();
    })


    function pullUpAction() {
        generatedCount++;
        setTimeout(function() {
            var el, li, i;
            el = $('#scrolist');
            // $.ajax({
            //    type: "GET",
            //    url: "LoadMore.ashx",
            //    data: { page: generatedCount },
            //    dataType: "json",
            //    success: function (data) {
            //     var json = data;
            //     $(json).each(function () {
            //      li = document.createElement('li');
            //      li.innerHTML = '<img src="' + this.src + '"/>';
            //      el.append(li);
            //     })
            //    }
            // });
            for (var i = 0; i < 6; i++) {
                li = document.createElement('li');
                li.innerHTML = 'huahua' + i;
                el.append(li);
            };

            myScroll.refresh();
        }, 1000);
    }

    function loaded() {
        pullUpEl = document.getElementById('pullUp');
        pullUpOffset = pullUpEl.offsetHeight;
        myScroll = new iScroll('wraper', {
            onRefresh: function() {
                if (pullUpEl.className.match('loading')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                }
            },
            onScrollMove: function() {
                if (this.y < (this.maxScrollY - 5) && !pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'flip';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开加载...';
                    this.maxScrollY = this.maxScrollY;
                } else if (this.y > (this.maxScrollY + 5) && pullUpEl.className.match('flip')) {
                    pullUpEl.className = '';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
                    this.maxScrollY = pullUpOffset;
                }
            },
            onScrollEnd: function() {
                if (pullUpEl.className.match('flip')) {
                    pullUpEl.className = 'loading';
                    pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';
                    pullUpAction(); // Execute custom function (ajax call?)
                }
            }
        });

        setTimeout(function() {
            document.getElementById('wraper').style.left = '0';
        }, 800);
    }

    function loadData() {
        // $.ajax({
        //    type: "GET",
        //    url: "LoadMore.ashx",
        //    data: { page: generatedCount },
        //    dataType: "json",
        //    beforeSend: function () {
        //         commitList.html('loding......');
        //    },
        //    success: function (data) {
        //         var json = data;
        //         $(json).each(function () {
        //          li = document.createElement('li');
        //          li.innerHTML = '<img src="' + this.src + '"/>';
        //          el.append(li);
        //         })
        //    }
        // });
        var data = {
            'total' : 20,
            'list' : [{
                    'avaster':'./images/avaster.jpg',
                    'name':'huahua',
                    'time':'03-10 10:23',
                    'content':'评论的内容11'
                },
                {
                    'avaster':'./images/avaster.jpg',
                    'name':'huahua',
                    'time':'03-10 10:23',
                    'content':'评论的内容22'
                },
                {
                    'avaster':'./images/avaster.jpg',
                    'name':'huahua',
                    'time':'03-10 10:23',
                    'content':'评论的内容33'
                },
                {
                    'avaster':'./images/avaster.jpg',
                    'name':'huahua',
                    'time':'03-10 10:23',
                    'content':'评论的内容44'
                },
                {
                    'avaster':'./images/avaster.jpg',
                    'name':'huahua',
                    'time':'03-10 10:23',
                    'content':'评论的内容55'
                },
                {
                    'avaster':'./images/avaster.jpg',
                    'name':'huahua',
                    'time':'03-10 10:23',
                    'content':'评论的内容66'
                }
            ]
        }
        for (i in data) {
            commitList.html('loding......');
           $.each(data.list, function(index, item) {
                commitList.append(createDom(item));
            })
        }
    }
    function createDom (data) {
        var liDom = $('<li>'),
            userFaceDom = $('<div>', {'class':'user_face'}),
            avasterDom = $('<img>', {'src':data.avaster, 'alt':data.name}),
            commentDom = $('<div>', {'class':'comment_content'}),
            userNameDom = $('<div>', {'class':'user_name'}),
            commentTimeDom = $('<div>', {'class':'comment_time'}),
            userCommentDom = $('<div>', {'class':'user_comment'});
        userFaceDom.html(avasterDom);
        userNameDom.html(data.name);
        commentTimeDom.html(data.time);
        userCommentDom.html(data.content);

        liDom.append(userFaceDom);
        liDom.append(commentDom);
        commentDom.append(userNameDom);
        commentDom.append(commentTimeDom);
        commentDom.append(userCommentDom);
        return liDom;
    }

})
