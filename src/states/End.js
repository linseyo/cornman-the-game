class End extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    let text = "Game Over"
    this.startText = this.game.add.text(880, 300, text, { font: "50px Arial", textalign: "center"});

    this.restartButton = this.game.add.button(650, 600, 'restart', this.restartGame, this);
    this.mainMenuButton = this.game.add.button(1050, 600, 'main-menu', this.goToMenu, this);

		console.log(this.game.width)
	}

  restartGame() {
    this.game.state.start('Main');
  }

  goToMenu() {
    this.game.state.start('Menu');
  }
}

export default End;
