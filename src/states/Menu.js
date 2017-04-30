class Menu extends Phaser.State {

  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.menuBackground = this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'menu-background');
    this.menuBackground.scale.setTo(3.06, 3.06)
    this.menuBackground.autoScroll(0, -20);
    this.menuBackground.alpha = 0.5;

    let title = "CORNMAN"
    this.titleText = this.game.add.text(200, 300, title, { font: "300px Revalia", textalign: "center"});
    this.startButton = this.game.add.button(850, 700, 'start-game', this.startGame, this);

    this.cow = this.game.add.sprite(1490, 170, 'cow-menu');
    this.cow.animations.add('walk');
    this.cow.animations.play('walk', 3, true);
  }

  startGame() {
    this.game.state.start('Main')
  }

}

export default Menu;
