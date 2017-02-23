var gulp = require("gulp"),
	connect = require("gulp-connect"),
	cssMinify = require("gulp-minify-css"),  //css压缩
	rename = require("gulp-rename"), //重命名
	Proxy = require("gulp-connect-proxy"),
	//合并文件
	concat =require("gulp-concat"),
	//压缩js
	uglify =require("gulp-uglify"),
	rev =require("gulp-rev"),
	scss =require("gulp-less");
//解析css
	gulp.task("css",function(){
		gulp.src("./app/dev/public/css/*.scss")
		.pipe(scss())
		.pipe( gulp.dest("./app/dev/public/css/"))
		.pipe( cssMinify() )
		.pipe(rename("index.min.css"))
		.pipe( gulp.dest("./app/dev/public/css/"))
	})
//压缩js
///*


	gulp.task("reload",function(){
		gulp.src([
			"./app/dev/public/css/*.css",
			"./app/dev/*.html",
			"./app/dev/**/*.html",
			"./app/dev/**/**/*.html",
			"./app/dist/*.js"
			])
		.pipe(connect.reload())
	})


	//开启服务器
	gulp.task("webserver",function(){
		connect.server({
			port : "2222",
			livereload : true,
			root: "./app/dev/",
			middleware:function(connect,opt){
				opt.route = "server/data/";
				var proxy = new Proxy(opt);
				return [proxy]
			}
		})
	})

	gulp.watch([
	"./app/dev/public/css/*.scss",
	"./app/dev/public/less/*.scss",
	"./app/dev/public/less/**/*.scss",
	"./app/dev/public/less/**/**/*.scss",
	],["css","reload"])//关联文件

	gulp.watch([
	"./app/dev/**/**/*.html",
	"./app/dev/**/*.html",
	"./app/dev/*.html"
	],["reload"])

	gulp.watch([
	"./app/dev/*.js",
	"./app/dev/**/*.js",
	"./app/dev/**/**/*.js",
	],["reload"])//关联文件


	gulp.task("default",["css","webserver"])