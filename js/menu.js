var menuState = {
    create: function() {
        /*var nameLabel = game.add.text(80, 80, 'Game Name', {font: '50px Arial', fill: '#ffffff'});

        var startLabel = game.add.text(80, game.world.height-80, 'press the "S" key to start', {font: '25px Arial', fill: '#ffffff'});

        var skey = game.input.keyboard.addKey(Phaser.Keyboard.S);*/

        //document.getElementById('gameDiv').style.backgroundImage = 'coin.png';

        var startscreen = game.add.sprite(0,0,'startscreen');
        startscreen = game.add.bitmapText(170, 250, 'carrier_command','Game Name',32);
        startscreen = game.add.bitmapText(190, 350, 'carrier_command','Start Game',23);

        //startscreen.onclick =
        /*skey.onDown.addOnce(this.start, this);  #bbae68 */

    },

    start: function() {
        game.state.start('play');
    }

};