var D = document,
    w = window,
    T = setTimeout,
    C, // canvas
    R, // canvas context
    W, // world
    P, // player
    V, // camera,
    K = {}, // keyboard
    PI = Math.PI,
    raf = (function(){
        return  w.requestAnimationFrame       ||
                w.webkitRequestAnimationFrame ||
                w.mozRequestAnimationFrame    ||
                function(c){
                    T(c, 1000 / 60);
                };
    })();
