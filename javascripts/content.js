$(function(){
    var maxDisplay = 10;
    
    var pages = new Array();
  
    pages = $.getJSON("articles.json",function(){
	alert("yo");
	for( var i = 0; pages.length >= i && maxDisplay > i; i++ ){
xsy	    $.get( pages[i].file, function(d) {
		$("#content").html( $("#content").html()+d);
	    });
	}
    });
});
