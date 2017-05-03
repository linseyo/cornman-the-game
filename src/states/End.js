class End extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#878787';

		this.headerImage = this.game.add.image(100, 100, 'gameover-title', 'assets/gameover-title.png');


    this.restartButton = this.game.add.button(650, 700, 'restart', this.restartGame, this);
    this.mainMenuButton = this.game.add.button(1050, 700, 'main-menu', this.goToMenu, this);


		this.endCow = this.game.add.sprite(1800, 500, 'cow');
		this.endCow.animations.add('walk')
		this.endCow.animations.play('walk', 3, true);
	}

  restartGame() {
    this.game.state.start('Main');
  }

  goToMenu() {
    this.game.state.start('Menu');
  }
}

export default End;
