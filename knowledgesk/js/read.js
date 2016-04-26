$(function(){
	var obj = {}, arr = [], random = 1, names = $('.knowledge_list').find('.click_num').attr('id');

	if(names == 'ask_answer'){
		random = 8;
	}else if(names == 'brand_know'){
		random = 5;
	}else if(names == 'eye_know'){
		random = 7;
	}else if(names == 'sale_know'){
		random = 2;
	}else{
		return
	}

	$(".click_num li").each(function(i){
		var nums = $(this).index();
		if(localStorage['ok'+names]){
			var again = JSON.parse(localStorage['ok'+names]);
		    $(this).find('em').html(again.arr[i]);
		    if(again.arr.length == $(".click_num li").length) return; 
		}
		var randomIndex = Math.floor(Math.random()*80);
		var prevRandom =randomIndex;
		randomIndex = Math.floor(Math.random()*80);
		if(randomIndex - prevRandom < 20){
			randomIndex = Math.floor(Math.random()*80);
		}
		
		$(this).find('em').html(DateDiff(random)*randomIndex + nums);
		arr.push($(this).find('em').html());
		obj.arr = arr;
		localStorage.setItem(('ok'+names),JSON.stringify(obj));
	});

	$(".click_num li").click(function(){
		var index = $(this).index();
		var num = JSON.parse(localStorage['ok'+names]);
		num.arr[index] = Number(num.arr[index]) + 1;
		localStorage.setItem(('ok'+names),JSON.stringify(num));
	})		 
})

//计算今天距离2015/10/27有几天，返回天数
function DateDiff(num) {
    var oDate1 = "2015/10/27", iDays;
    oDate1 = new Date(oDate1).getTime();  
    var today = new Date().getTime();
    iDays = parseInt(Math.abs(today - oDate1) / 1000 / 60 / 60 / 24); //把相差的毫秒数转换为天数
    return (num + iDays)*3;
}