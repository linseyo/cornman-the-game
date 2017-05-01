class Stats extends Phaser.State {

	create() {
		this.totalScore = this.game.state.states['Main'].totalScore
    this.game.stage.backgroundColor = '#DFF4FF';

		let statsHeader = "STATS"
    let continuePhrase = "Tap to Continue"
    this.statsHeaderText = this.game.add.text(650, 50, statsHeader, { font: "250px Revalia", textalign: "center"});
		this.continueText = this.game.add.text(820, 300, continuePhrase, { font: "50px Arial", textalign: "center"});

		this.playerScore = this.game.add.text(20, 20, "Your score: " + this.totalScore, { font: "60px Arial", fill: "#fffff"});


	}

  update() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('End');
    }
  }
}

export default Stats;
