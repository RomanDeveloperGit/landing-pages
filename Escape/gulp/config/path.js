import * as nodePath from "path";
const rootFolder = nodePath.basename( nodePath.resolve() );

const buildFolder = "./dist";
const srcFolder = "./src";

export const path = {
	build: {
		min: {
			html: `${buildFolder}/min/`,
			css: `${buildFolder}/min/css/`,
			js: `${buildFolder}/min/js/`,
			images: `${buildFolder}/min/images/`,
			fonts: `${buildFolder}/min/fonts/`
		},
		full: {
			html: `${buildFolder}/full/`,
			css: `${buildFolder}/full/css/`,
			js: `${buildFolder}/full/js/`,
			images: `${buildFolder}/full/images/`,
			fonts: `${buildFolder}/full/fonts/`
		}
	},
	src: {
		html: `${srcFolder}/*.html`,
		css: `${srcFolder}/css/**/*.css`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,ico}`,
		svg: `${srcFolder}/images/**/*.svg`
	},
	watch: {
		html: `${srcFolder}/*.html`,
		css: `${srcFolder}/css/**/*.css`,
		js: `${srcFolder}/js/**/*.js`,
		images: `${srcFolder}/images/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		fonts: `${srcFolder}/fonts/**/*.{otf,ttf,woff,woff2}`
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: ''
}