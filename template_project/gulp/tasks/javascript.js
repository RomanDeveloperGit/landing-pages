import uglify from "gulp-uglify-es";

export const js = () => {
	return app.gulp.src( app.path.src.js, { sourcemaps: app.isDev } )
		.pipe( app.gulp.dest( app.path.build.full.js ) )
		.pipe(
			app.plugins.if(
				app.isBuild,
				uglify.default()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.plugins.rename({
					extname: ""
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.plugins.rename({
					extname: ""
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				app.plugins.rename({
					extname: ".min.js"
				})
			)
		)
		.pipe( app.gulp.dest( app.path.build.min.js ) )
		.pipe( app.plugins.browserSync.stream() );
}