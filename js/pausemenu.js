var pausemenuState = {

    create: function () {

        //game.physics.startSystem(Phaser.Physics.ARCADE);
        //cursors = game.input.keyboard.createCursorKeys();




        //imagepausemenu = game.add.sprite(320, 320, 'imagepausemenu');


        //console.log(spaceKey);
        //this.togglePause();
    },
    togglePause: function () {

        //console.log(game.physics.arcade.isPaused);
        game.physics.arcade.isPaused = (game.physics.arcade.isPaused) ? false : true;
        console.log('pauseaction');

        if (game.physics.arcade.isPaused) {
            // pausebild
            game.paused = true;
            imagepausemenu = game.add.text(690, 250, ' Game Paused \n Press Backspace to continue.', {font: '50px carrier_command', fill: '#FFFFFF'});
            imagepausemenu.anchor.set(0.5);
            imagepausemenu.setShadow(3, 3, 'rgba(0,0,0,0.5)', 15);
            imagepausemenu.anchor.setTo(1.1, 0.2);
        } else {
            // kein pausebild
            game.paused = false;
            imagepausemenu.visible = false;

        }
    }


};