class Stats extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    let text = "U ded, tap to continue"
    this.startText = this.game.add.text(this.game.width/2, this.game.height/2, text, { font: "50px Arial", textalign: "center"});
	}

  update() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('End');
    }
  }
}

export default Stats;
