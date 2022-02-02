import replace from "gulp-replace";
import webpHtmlNoSvg from "gulp-webp-html-nosvg";
import versionNumber from "gulp-version-number";
import htmlMin from "gulp-htmlmin";

export const html = () => {
	return app.gulp.src( app.path.src.html )
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpHtmlNoSvg()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				versionNumber({
					"value": "%DT%",
					"append": {
						"key": "_v",
						"cover": 0,
						"to": [
							"css",
							"js"
						]
					},
					"output": {
						"file": "gulp/version.json"
					}
				})
			)
		)
		.pipe( app.gulp.dest( app.path.build.full.html ) )
		.pipe(
			app.plugins.if(
				app.isBuild,
				replace( ".min.css?_v", ".css?_v" )
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				replace( ".css?_v", ".min.css?_v" )
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				replace( ".min.js?_v", ".js?_v" )
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				replace( ".js?_v", ".min.js?_v" )
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				htmlMin({
					collapseWhitespace: true,
					removeComments: true
				})
			)
		)
		.pipe( app.gulp.dest( app.path.build.min.html ) )
		.pipe( app.plugins.browserSync.stream() );
}