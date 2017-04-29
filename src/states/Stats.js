class Stats extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#DFF4FF';

		let statsHeader = "STATS"
    let continuePhrase = "Tap to Continue"
    this.statsHeaderText = this.game.add.text(650, 50, statsHeader, { font: "250px Revalia", textalign: "center"});
		this.continueText = this.game.add.text(820, 300, continuePhrase, { font: "50px Arial", textalign: "center"});
	}

  update() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('End');
    }
  }
}

export default Stats;
