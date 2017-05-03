class How extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.instruction = this.game.add.sprite(this.game.widthHalf, this.game.heightHalf - 45, 'instruction');
    this.instruction.anchor.setTo(0.5);

    this.instruction.animations.add('show');
		this.instruction.animations.play('show', 3, true);

    this.goBack = this.game.add.button(this.game.widthHalf, this.game.height - 60, 'go-back', this.back, this);
    this.goBack.anchor.setTo(0.5);
  }

  back() {
    this.game.state.start('Menu');
  }
}

export default How;
