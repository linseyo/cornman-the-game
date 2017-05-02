class Stats extends Phaser.State {

	create() {
		this.totalScore = this.game.state.states['Main'].totalScore;
		this.enemyScore = this.game.state.states['Main'].enemiesPassed;
		this.coinScore = this.game.state.states['Main'].coinCounter;
		this.ammoScore = this.game.state.states['Main'].ammoCounter;

    this.game.stage.backgroundColor = '#DFF4FF';

		let statsHeader = "player stats";
    let continuePhrase = "Tap to Continue";
    // let saved = "";
    // let score = function(){adds everything}
    this.statsHeaderText = this.game.add.text(650, 50, statsHeader, { font: "250px Slackey", textalign: "center"});
		this.continueText = this.game.add.text(1000, 1200, continuePhrase, { font: "50px Slackey", textalign: "center"});
    // this.savedText = this.game.add.text(820,300, saved, { font: "50px Arial", textalign: "center"});
		this.enemyScore = this.game.add.text(1000, 600, ("Enemies dodged: " + this.enemyScore), { font: "60px Slackey", fill: "#fffff"});
		this.coinScore = this.game.add.text(1000, 700, ("Coins collected: " + this.coinScore), { font: "60px Slackey", fill: "#fffff"});

		this.playerScore = this.game.add.text(1000, 800, ("Total Score: " + this.totalScore), { font: "60px Slackey", fill: "#fffff"});

		// this.ammoScore = this.game.add.text(1000, 900, ("Bullets Fired: " + this.ammoScore), { font: "60px Arial", fill: "#fffff"});
		this.sendButton = this.game.add.button(1000, 1000, 'send', this.sendScore, this);

		this.cornman = this.game.add.sprite(800, 1000, 'cornman');
		this.cornman.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.add('right', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.play('left')


		this.headerImage = this.game.add.image(100, 100, 'cm-title', 'assets/cm-title-darksub.png')

	}

	sendScore() {
    let request = $.ajax({
      url: "http://cornman-api.herokuapp.com/scores",
      type: "post",
      crossDomain: true,
      xhrFields: { withCredentials: true },
      // dataType: "json",
      data: {
        username: "test",
        score: this.totalScore,
      },
      });
    request.done((response) => {

    })
    request.fail((response) => {

    });
	}

  update() {
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('End');
    }

  }
}

export default Stats;
