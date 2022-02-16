import del from "del";
import rename from "gulp-rename";
import fileConcat from "gulp-concat";
import browserSync from "browser-sync";
import newer from "gulp-newer";
import ifPlugin from "gulp-if";

export const plugins = {
	fileConcat: fileConcat,
	browserSync: browserSync,
	rename: rename,
	newer: newer,
	if: ifPlugin,
	del: del
}