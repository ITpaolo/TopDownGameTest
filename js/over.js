var overState = {
    create: function() {
        var overLabel = stateText = game.add.text(game.world.centerX,game.world.centerY,' ', { font: '84px Arial', fill: '#F2F2F2' });
                        stateText.anchor.setTo(1.1, 0.2);
                        stateText.visible = false;
                        stateText.text=" GAME OVER \n Click to restart";
                        stateText.visible = true;

                        //the "click to restart" handler
                        this.game.input.onTap.addOnce(function() {
                        this.game.state.restart('menu');}, this);
    },

    restart: function() {
        game.state.start('menu');
    }
};