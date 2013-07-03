$(function(){
    var maxDisplay = 10;
    
    $.getJSON("jblog.json",function(blog){
	var articles = blog.content.articles;
	for( var i = 0; articles.length > i && blog.content.maxArticles > i; i++ ){
	    $.get( blog.content.articles[i].file, function(d) {
		$("#content").html( $("#content").html()+d);
	    });
	}
	
    }).fail(function(err){
	alert("Error loading content.");
    });;

});
