$(function(){
    var maxDisplay = 10;

    $.getJSON("jblog.json",function(blog){
	for( var i = 0; blog.articles.length >= i && blog.maxDisplayArticles > i; i++ ){
	    $.get( blog.articles[i].file, function(d) {
		$("#content").html( $("#content").html()+d);
	    });
	}
	
    }).fail(function(err){
	alert("Error loading content.");
    });;

});
