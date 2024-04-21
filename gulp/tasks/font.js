export const font = () => {
	return app.gulp.src( app.path.src.font )
	.pipe( app.gulp.dest( app.path.build.font ) )
}