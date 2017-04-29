class End extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    let text = "Game Over"
    this.startText = this.game.add.text(this.game.width/2, this.game.height/2, text, { font: "50px Arial", textalign: "center"});

    this.restartButton = this.game.add.button(0, 0, 'restart', this.restartGame, this);
    this.mainMenuButton = this.game.add.button(50, 50, 'main-menu', this.goToMenu, this);
  }

  restartGame() {
    this.game.state.start('Main');
  }

  goToMenu() {
    this.game.state.start('Menu');
  }
}

export default End;
