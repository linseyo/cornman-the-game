class Stats extends Phaser.State {

	create() {
		this.totalScore = this.game.state.states['Main'].totalScore;
		this.enemyScore = this.game.state.states['Main'].enemiesPassed;
		this.coinScore = this.game.state.states['Main'].coinCounter;
		this.ammoScore = this.game.state.states['Main'].ammoCounter;

    this.game.stage.backgroundColor = '#DFF4FF';

		let statsHeader = "STATS";
    let continuePhrase = "Tap to Continue";
    // let saved = "";
    // let score = function(){adds everything}
    this.statsHeaderText = this.game.add.text(650, 50, statsHeader, { font: "250px Revalia", textalign: "center"});
		this.continueText = this.game.add.text(820, 300, continuePhrase, { font: "50px Arial", textalign: "center"});
    // this.savedText = this.game.add.text(820,300, saved, { font: "50px Arial", textalign: "center"});


		this.enemyScore = this.game.add.text(1000, 600, ("Enemies dodged: " + this.enemyScore), { font: "60px Arial", fill: "#fffff"});
		this.coinScore = this.game.add.text(1000, 700, ("Coins collected: " + this.coinScore), { font: "60px Arial", fill: "#fffff"});

		this.playerScore = this.game.add.text(1000, 800, ("Total Score: " + this.totalScore), { font: "60px Arial", fill: "#fffff"});

		// this.ammoScore = this.game.add.text(1000, 900, ("Bullets Fired: " + this.ammoScore), { font: "60px Arial", fill: "#fffff"});
		this.sendButton = this.game.add.button(1000, 1000, 'send', this.sendScore, this);

	}

	sendScore() {
    $.ajax({
      // need to edit url accordingly
      url: "http://localhost:3000/scores",
      type: "post",
      dataType: "json",
      data: {
        username: "test",
        score: this.totalScore,
      },
      })
	}

  update() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('End');
    }

  }
}

export default Stats;
