class How extends Phaser.State {
  create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    this.instruction = this.game.add.sprite(500, -60, 'instruction');

    this.instruction.animations.add('show');
		this.instruction.animations.play('show', 3, true);

    this.goBack = this.game.add.button(130, 900, 'go-back', this.back, this);
  }

  back() {
    this.game.state.start('Menu');
  }
}

export default How;
