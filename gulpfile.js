const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack'); 
const webpackConfig = require('./webpack.config.js');
const htmlmin = require('gulp-htmlmin');
const fileinclude = require('gulp-file-include');
const svgSprite = require('gulp-svg-sprite');
const browserSync = require('browser-sync').create();
const pngquant = require('imagemin-pngquant');
const { src } = require('gulp');

const paths = {
    root: './dist',
    scripts: {
        src: './src/js/**/*.js',
        dest: './dist/js/'
    }
}

// слежка
function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch("src/**/**/**/*.html").on('change', gulp.parallel(html));
    // gulp.watch("src/**/**/**/*.html").on('change', gulp.parallel(projects));
    gulp.watch("src/fonts/**/*").on('all', gulp.parallel(fonts));
    gulp.watch("src/img/**/*.svg").on('all', gulp.parallel(icons));
    gulp.watch("src/img/**/*").on('all', gulp.parallel(images));
    gulp.watch("src/**/**/*.html").on('change', gulp.parallel(fileInclude));
    gulp.watch("src/js/**/*.js", gulp.parallel(copyJs));
    gulp.watch("src/assets/**/*.*", gulp.parallel(copyAssets));
    gulp.watch("src/**/**/*.scss", gulp.parallel(styles));
    gulp.watch("src/scss/**/*.scss", gulp.parallel(styles));
    gulp.watch("src/js/modules/**.js", gulp.parallel(scripts));
}

// следим за build и релоадим браузер
function server() {
    browserSync.init({
        server: paths.root
    });
    browserSync.watch(paths.root + '/**/**/*.*', browserSync.reload);
}

// очистка
function clean() {
    return del(paths.root);
}

// html

function fileInclude() {
    return gulp.src(['src/**/**/*.html'])
        .pipe(fileinclude({
            prefix: '@',
            basepath: '@file'
        }))
        .pipe(browserSync.stream());
}

function html() {
    return gulp.src(["src/pages/**/*.html", "src/index.html"])
        .pipe(fileinclude({
                    prefix: '@',
                    basepath: '@file'
                }))
        .pipe(htmlmin({ collapseWhitespace: true,
                        removeComments: true }))
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
}

// function projects() {
//     return gulp.src("src/projects/**/*.html")
//         .pipe(fileinclude({
//                     prefix: '@',
//                     basepath: '@file'
//                 }))
//         .pipe(htmlmin({ collapseWhitespace: true,
//                         removeComments: true }))
//         .pipe(gulp.dest("dist/projects"))
//         .pipe(browserSync.stream());
// }

//fonts

function fonts() {
    return gulp.src("src/fonts/**/*")
        .pipe(gulp.dest("dist/fonts"))
        .pipe(browserSync.stream());
}

//img-icons

function images() {
    return gulp.src("src/img/**/*")
        .pipe(imagemin(
            {
                interlaced: true,
                progressive: true,
                // svgoPlugins: [{removeViewBox: false}],
                use: [pngquant(
                    {
                        quality: '100'
                    }
                )]
            }
        ))
        .pipe(gulp.dest("dist/img"))
        .pipe(browserSync.stream());
}

function icons() {
    return gulp.src("src/img/**/*.svg")
        .pipe(imagemin([imagemin.gifsicle({interlaced: true}),
                        imagemin.svgo({
                            plugins: [
                                {removeViewBox: true},
                                {cleanupIDs: false},
                                {removeAttrs: {
                                    attrs: ['fill', 'stroke', 'style']
                                }}
                            ]
                        }) 
                    ]))
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                },
            },
            shape: {
                id: {
                    separator: '',
                },
                dimension: { // Dimension related options
                    // precision: 2, // Floating point precision
                    // attributes: true, // Width and height attributes on embedded shapes
                }
            },
        }))
        .pipe(gulp.dest('./dist/img'))
        // .pipe(gulp.dest("dist/img/icons"))
        .pipe(browserSync.stream());
}

//assets

function copyAssets() {
    return gulp.src("./src/assets/**/*.*")
    // return gulp.src(["./src/assets/**/*.*", "./src/js/libs/*.js"])
                .pipe(gulp.dest("dist/assets"))
                // .on("end", browserSync.reload);
}

function copyJs() {
    return gulp.src("./src/js/libs/*.js")
    // return gulp.src(["./src/assets/**/*.*", "./src/js/libs/*.js"])
                .pipe(gulp.dest("dist/js/libs"))
                // .on("end", browserSync.reload);
}

// scss

function styles() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
}
// webpack
function scripts() {
    return gulp.src(paths.scripts.src)
        .pipe(gulpWebpack(webpackConfig, webpack))
        .pipe(gulp.dest(paths.scripts.dest));
}

exports.scripts = scripts;
exports.clean = clean;

gulp.task('default', gulp.series(
    clean,
    fileInclude,
    gulp.parallel(styles, html, fonts, icons, images, copyAssets, copyJs, scripts),
    gulp.parallel(watch, server)
));