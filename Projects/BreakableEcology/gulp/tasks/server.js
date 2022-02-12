export const server = ( done ) => {
	app.plugins.browserSync.init({
		server: {
			baseDir: `${app.path.build.min.html}`
		},
		notify: false,
		open: false,
		port: 3000
	});
}