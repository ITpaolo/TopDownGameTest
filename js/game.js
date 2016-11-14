var game = new Phaser.Game(640, 640, Phaser.CANVAS, 'gameDiv', {
    preload: this.preload,
    create: this.create,
    update: this.update,
    render: this.render,
    collectCherry: this.collectCherry,
    collectCoin: this.collectCoin,
    collectStar: this.collectStar,
    collectCrate: this.collectCrate
});

game.state.add('boot', bootState);
game.state.add('load', loadState);
game.state.add('menu', menuState);
game.state.add('play', playState);
game.state.add('win', winState);
game.state.add('over', overState);

game.state.start('boot');

