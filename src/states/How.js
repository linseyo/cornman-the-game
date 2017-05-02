class How extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#DFF4FF';
    this.goBack = this.game.add.button(this.game.width-1700, this.game.height-300, 'go-back', this.back, this);
  }

  back() {
    this.game.state.start('Menu');
  }
}

export default How;
