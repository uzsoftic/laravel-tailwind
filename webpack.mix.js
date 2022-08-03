const mix = require("laravel-mix");

mix.js("resources/js/app.js", "public/js")
    .vue() //new
    //.sass('resources/sass/app.scss', 'public/css');
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);
