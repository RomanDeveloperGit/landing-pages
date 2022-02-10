import groupCssMediaQueries from "gulp-group-css-media-queries";
import webpCss from "gulp-webpcss";
import autoprefixer from "gulp-autoprefixer";
import cleanCss from "gulp-clean-css";

export const css = () => {
	return app.gulp.src( app.path.src.css, { sourcemaps: app.isDev } )
		.pipe(
			app.plugins.if(
				app.isBuild,
				webpCss({
					webpClass: ".webp",
					noWebpClass: ".no-webp"
				})
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				groupCssMediaQueries()
			)
		)
		.pipe(
			app.plugins.if(
				app.isBuild,
				autoprefixer({
					grid: true,
					overrideBrowserslist: ["last 3 versions"],
					cascade: false
				})
			)
		)
		.pipe( app.gulp.dest( app.path.build.full.css ) )
		.pipe(
			app.plugins.if(
				app.isBuild,
				cleanCss()
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
					extname: ".min.css"
				})
			)
		)
		.pipe( app.gulp.dest( app.path.build.min.css ) )
		.pipe( app.plugins.browserSync.stream() );
}