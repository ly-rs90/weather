var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rjs = require('gulp-requirejs');
var concat = require('gulp-concat');
var glob = require('glob');
var cleanCss = require('gulp-clean-css');
var replace = require('gulp-replace');


// 打包压缩amd文件
gulp.task('build-js', function () {
    var views = glob.sync('views/**/*.js').map(function (value) {
        return value.replace('.js', '');
    });
    rjs({
        baseUrl: './',
        out: 'app.js',
        insertRequire: ['app'],
        deps: ['app'],
        include: ['libs/almond/almond.js'].concat(views)
    }).pipe(uglify()).pipe(gulp.dest('./deploy'));
});

// css优化
gulp.task('build_css', function () {
    return gulp.src('static/css/**/*.css')
        .pipe(cleanCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('./deploy/static/css'));
});

// images
gulp.task('build_image', function () {
    return gulp.src('static/images/**/*.*')
        .pipe(gulp.dest('./deploy/static/images'));
});

// index.html
gulp.task('build_html', function () {
    return gulp.src('./index.html')
        .pipe(replace('\"libs/requirejs/require.js\" data-main=\"app\"', "\'app.js\'"))
        .pipe(replace('\"libs/echarts/dist/echarts.js\"', '\"libs/echarts/echarts.min.js\"'))
        .pipe(gulp.dest('./deploy'));
});

// libs
gulp.task('build_libs', function () {
    gulp.src('libs/echarts/dist/echarts.min.js')
        .pipe(gulp.dest('./deploy/libs/echarts'));
    gulp.src('libs/echarts/map/js/jinhua.js')
        .pipe(gulp.dest('./deploy/libs/echarts/map/js'));
    gulp.src('libs/webix/**/*.*')
        .pipe(gulp.dest('./deploy/libs/webix'));
});

// chrome插件
gulp.task('build_plugin', function () {
    return gulp.src('installers/**/*.*')
        .pipe(gulp.dest('./deploy/installers'));
});

// server
gulp.task('build_server', function () {
    return gulp.src('./**/*.py')
        .pipe(gulp.dest('./deploy'));
});

gulp.task('default', [
    'build-js',
    'build_css',
    'build_image',
    'build_html',
    'build_libs',
    'build_server',
    'build_plugin'
]);

