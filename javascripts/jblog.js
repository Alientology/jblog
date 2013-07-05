$(function(){
    var maxDisplay = 10;
    $.getJSON("jblog.json",function(blog){
	for( var i = 0; blog.articles.length >= i && blog.maxDisplayArticles > i; i++ ){
	    var article =  $.ajax({
		type : 'GET',
		async : false,
		url : blog.articles[i].file,
	    }).responseText;
	    
	    $("#content").append(
		$("<div></div>").append(article)
	    );
	}
	
    }).fail(function(err){
	$("content").append("Error loading content.");
    });;

});
