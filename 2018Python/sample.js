$(window).load(function () {
    $.get('./itemlist.csv',function(data){
        var csv = $.csv()(data);
        var itemlist = '';
 
        $(csv).each(function(index){
                itemlist += '<li class="list-item">';
                itemlist += '<p class="date">' + this[0] + '</p>';
                itemlist += '<p class="title"><a href="' + this[1] + '">' + this[2] + '</a></p>';
                itemlist += '<p class="body">' + this[3] + '</p>';
                itemlist += '</li>';
	})
	$("#itemlist").append(itemlist);
    });
});
