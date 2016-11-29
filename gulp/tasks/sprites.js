'use strict';

module.exports = function() {
   $.gulp.task('sprites', function() {
    return $.gulp.src("./source/css/*.css")
    .pipe($.sprite({
            baseUrl:         "./source/images",
            spriteSheetName: "sprite.png",
            spriteSheetPath: "/dist/images"
      }))
    $.gulp.img.pipe($.gulp.dest("./build/image"))
    $.gulp.css.pipe($.gulp.dest("./build/css"));

  });
};
