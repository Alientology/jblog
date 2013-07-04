var fs = require("fs");

var blogName = process.argv[2];
if (typeof blogName == "undefined"){
    console.log("node update.js <blogname>");
    console.log("Same as the .json file");
    return;
}

var blog = require("./" + blogName)
var articledir = "./articles/";
var articles = new Array();
fs.readdir(blog.articledir,function(err,files){
    for(var i=0; files.length > i; i++){
	var stat = fs.statSync(blog.articledir + files[i]);
	var article = {};
	article.file = articledir + files[i];
	article.atime = stat.atime;
	article.mtime = stat.mtime;
	article.ctime = stat.ctime
	articles.push(article);
    }
    blog.articles = articles;
    fs.writeFileSync(blogName + ".json",JSON.stringify(blog,null,4));
});

