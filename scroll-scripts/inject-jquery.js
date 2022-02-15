javascript: (function (e, s) {
    e.src = s;
    e.onload = function () {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(
    document.createElement('script'),
    'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js'
);
