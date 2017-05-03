class End extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#d2d9da';

		this.headerImage = this.game.add.image(300, 225, 'gameover-title', 'assets/gameover-title.png');


    this.restartButton = this.game.add.button(650, 700, 'restart', this.restartGame, this);
    this.mainMenuButton = this.game.add.button(1050, 700, 'main-menu', this.goToMenu, this);


		this.endCow = this.game.add.sprite(1800, 1000, 'cow');
		this.endCow.animations.add('walk')
		this.endCow.animations.play('walk', 3, true);
		this.game.add.tween(this.endCow).to( { x: this.endCow.x - 3000 }, 20000, Phaser.Easing.Linear.None, true);
	}

  restartGame() {
    this.game.state.start('Main');
  }

  goToMenu() {
    this.game.state.start('Menu');
  }
}

export default End;
