class End extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    let gameOver = "GAME OVER"
    this.overText = this.game.add.text(100, 300, gameOver, { font: "300px Revalia", textalign: "center"});

    this.restartButton = this.game.add.button(650, 700, 'restart', this.restartGame, this);
    this.mainMenuButton = this.game.add.button(1050, 700, 'main-menu', this.goToMenu, this);
	}

  restartGame() {
    this.game.state.start('Main');
  }

  goToMenu() {
    this.game.state.start('Menu');
  }
}

export default End;
