'use strict';

<<<<<<< HEAD
//import module gulpで使用するモジュールの読み込み
=======
// import module
>>>>>>> 0d3012942639b384b9e2d2fe4648c46c6b49eb97
const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');
const pug = require('gulp-pug');

<<<<<<< HEAD
//gulpタスク
const { series,task,src,dest,watch } = gulp;

//読み込み・出力用のフォルダパスの指定
=======
//gulp task
const { series,task,src,dest,watch } = gulp;

/*
in-out dir settings
*/

>>>>>>> 0d3012942639b384b9e2d2fe4648c46c6b49eb97
const cssSrcPath = './src/sass';
const cssDestPath = './public/css';
const jsSrcPath = './src/js';
const jsDestPath = './public/js'
const pugSrcPath = './src/pug';
const pugDestPath = './public/';

//run task sass
task('sass',(done)=>{
    console.log('///// sassのタスク実行 /////');
    src(cssSrcPath + '/*.scss')
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(sass({
<<<<<<< HEAD
        outputStyle: 'expanded'    // or compressed <- CSSの圧縮
=======
        outputStyle: 'expanded'    // or compressed
>>>>>>> 0d3012942639b384b9e2d2fe4648c46c6b49eb97
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(autoprefixer())
    .pipe(dest(cssDestPath));
    done();
});

<<<<<<< HEAD
// run task pug
=======
>>>>>>> 0d3012942639b384b9e2d2fe4648c46c6b49eb97
task('pug',(done)=>{
    console.log('***** pugのタスク実行 *****');
    src([`${pugSrcPath}/*.pug` , `!${pugSrcPath}/_*.pug`])
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    .pipe(pug({
        pretty: true
    }))
    .pipe(dest(pugDestPath));
    done();
});

<<<<<<< HEAD
//run task js
=======
>>>>>>> 0d3012942639b384b9e2d2fe4648c46c6b49eb97
task('js',(done)=>{
    console.log('>>>>>>>> jsのタスク実行 <<<<<<<<<');
    src(jsSrcPath + '/*.js')
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    //授業では特に触れない為、各自でモジュールを追加して環境を組む
    .pipe(dest(jsDestPath));
    done();
});

<<<<<<< HEAD
//run task watch
=======
>>>>>>> 0d3012942639b384b9e2d2fe4648c46c6b49eb97
task('watch',(done)=>{
    console.log('+++++ watchの実行 +++++');
    watch(`${pugSrcPath}/*.pug`,task('pug'));
    watch(`${cssSrcPath}/*.scss`,task('sass'));
    watch(`${jsSrcPath}/*.js`,task('js'));
    done();
});

<<<<<<< HEAD
//Taskの実行
=======
>>>>>>> 0d3012942639b384b9e2d2fe4648c46c6b49eb97
task('default',series('sass','pug','js'));