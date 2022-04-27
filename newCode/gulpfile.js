const { src, dest, watch, series, parallel} = require('gulp');
// const $ = require('gulp-load-plugins')()
// const cssnano = require('cssnano');
const browsersync = require('browser-sync').create();
const less = require('gulp-less');

const files = {
  lessPath: 'less/*.less',
  jsPath: 'js/*.js'
}

function lessTask(){
  return src(files.lessPath)
    .pipe(less())
    .pipe(dest('css')
  );
}

function jsTask(){
  return src(files.jsPath)
    .pipe(dest('dist')
  );
}

function browsersyncServe(cb){
  browsersync.init({
    server: {
      baseDir: '.'
    }
  })
  cb();
}

function browsersyncReload(cb){
  browsersync.reload();
  cb();
}
function watchTask(){
  watch('*.html', browsersyncReload);
  watch([files.lessPath, files.jsPath], series(lessTask, jsTask, browsersyncReload))
}
exports.default = series(
  lessTask,
  browsersyncServe,
  watchTask
)


// var gulp = require('gulp');
// var less = require('gulp-less');
// var browserSync = require('browser-sync');
// var reload      = browserSync.reload;

// gulp.task('less', function() {
//     return gulp.src('less/*.less')
//         // .pipe(watchLess('less/*.less'))
//         .pipe(less())
//         .pipe(gulp.dest('css'))
//         .pipe(reload({stream: true}));
// });


// gulp.task('watch', function() {
//   gulp.watch('less/*.less', gulp.series('less'));
// });

// function bs(cb) {
//     browsersync.init({
//       server: {
//         baseDir: '.'
//       }    
//     });
//     cb()
// }



// // Default Task
// gulp.task('web',  gulp.series('less','watch',bs),()=>{ });


