class Stats extends Phaser.State {

	create() {
    this.game.stage.backgroundColor = '#DFF4FF';

		let statsHeader = "STATS";
    let continuePhrase = "Tap to Continue";
    let saved = "";
    // let score = function(){adds everything}
    this.statsHeaderText = this.game.add.text(650, 50, statsHeader, { font: "250px Revalia", textalign: "center"});
		this.continueText = this.game.add.text(820, 300, continuePhrase, { font: "50px Arial", textalign: "center"});
    this.savedText = this.game.add.text(820,300, saved, { font: "50px Arial", textalign: "center"});
	}

  update() {
    if(this.game.input.activePointer.justPressed()) {
      $.ajax({
        url: "http://localhost:3000/scores",
        type: "post",
        dataType: "json",
        data: {
          username: "test",
          score: this.totalScore,
        },
        success: () => {
          this.saved = "Saved Successfully!";
        }
      })
      this.game.state.start('End');
    }
  }
}

export default Stats;
