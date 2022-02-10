import createrZIP from "gulp-zip";

export const zip = () => {
	app.plugins.del( `./${app.path.rootFolder}.zip` );

	return app.gulp.src( `${app.path.buildFolder}/**/*.*` )
		.pipe( createrZIP( `${app.path.rootFolder}.zip` ) )
		.pipe( app.gulp.dest( "./" ) );
}