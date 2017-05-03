class Stats extends Phaser.State {

	create() {
		this.totalScore = this.game.state.states['Main'].totalScore;
		this.enemyScore = this.game.state.states['Main'].enemiesPassed;
		this.coinScore = this.game.state.states['Main'].coinCounter;
		this.ammoScore = this.game.state.states['Main'].ammoCounter;

    this.game.stage.backgroundColor = '#DFF4FF';

		this.enemyScore = this.game.add.text(screen.width / 2, screen.height / 2, ("Enemies dodged: " + this.enemyScore), { font: "60px Arial", fill: "#fffff"});
		this.coinScore = this.game.add.text(screen.width / 2, screen.height / 2 + 70, ("Coins collected: " + this.coinScore), { font: "60px Arial", fill: "#fffff"});
		this.playerScore = this.game.add.text(screen.width / 2, screen.height / 2 + 80, ("Total Score: " + this.totalScore), { font: "60px Arial", fill: "#fffff"});
		// this.ammoScore = this.game.add.text(1000, 900, ("Bullets Fired: " + this.ammoScore), { font: "60px Arial", fill: "#fffff"});
		this.sendButton = this.game.add.button(screen.width / 2, screen.height / 2 + 100, 'send', this.sendScore, this);

		this.cornman = this.game.add.sprite(10, 130, 'cornman');
		this.cornman.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.add('right', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.play('left')
		this.game.add.tween(this.cornman).to( { x: this.cornman.x + 300 }, 2000, Phaser.Easing.Linear.None, true);

		this.headerImage = this.game.add.image(25, 10, 'playerStat', 'assets/playerstats-title.png');
		this.lowerImage = this.game.add.image(92, 120, 'taptocont', 'assets/taptocont.png');
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
