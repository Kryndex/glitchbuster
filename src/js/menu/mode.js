function ModeMenu(){
    Menu.call(this);

    this.button(button(nomangle('desktop'), 500), 0, 420, function(){
        shittyMode = false; // need to switch from undefined
        G.mainMenu();
    });
    this.button(button(nomangle('mobile'), 500), 0, 560, function(){
        G.setResolution(0.5);
        shittyMode = true;
        G.mainMenu();
    });

    this.animateButtons();

    var titleX = (CANVAS_WIDTH - 270) / 2;
    this.button(cache(270, 55, function(r){
    	drawText(r, 'quality', 0, 5, 10, '#444');
    	drawText(r, 'quality', 0, 0, 10, '#fff');
    }), titleX, titleX);
}
