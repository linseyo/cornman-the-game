class Stats extends Phaser.State {

	create() {
		this.totalScore = this.game.state.states['Main'].totalScore;
		this.enemyScore = this.game.state.states['Main'].enemiesPassed;
		this.coinScore = this.game.state.states['Main'].coinCounter;
		this.ammoScore = this.game.state.states['Main'].ammoCounter;

    this.game.stage.backgroundColor = '#DFF4FF';

		this.enemyScore = this.game.add.text(screen.width / 3, screen.height / 3, ("Enemies dodged: " + this.enemyScore), { font: "12px Arial", fill: "#fffff"});
		this.coinScore = this.game.add.text(screen.width / 3, screen.height / 3 + 10, ("Coins collected: " + this.coinScore), { font: "12px Arial", fill: "#fffff"});
		this.playerScore = this.game.add.text(screen.width / 3, screen.height / 3 + 20, ("Total Score: " + this.totalScore), { font: "12px Arial", fill: "#fffff"});
		// this.ammoScore = this.game.add.text(1000, 900, ("Bullets Fired: " + this.ammoScore), { font: "60px Arial", fill: "#fffff"});
		this.sendButton = this.game.add.button(screen.width / 3, screen.height / 3 + 30, 'send', this.sendScore, this);
		// this.sendButton.scale.setTo(screen.width / 4, screen.height / 4);

		this.cornman = this.game.add.sprite( screen.width / 2 + 10 , screen.width / 2 + 10, 'cornman');
		// this.cornman.scale.setTo( screen.width / 2, screen.height / 2 );
		this.cornman.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.add('right', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.play('left')
		this.game.add.tween(this.cornman).to( { x: this.cornman.x + 300 }, 2000, Phaser.Easing.Linear.None, true);

		this.headerImage = this.game.add.image( screen.width / 4 , screen.width / 2, 'playerStat', 'assets/playerstats-title.png');

		this.lowerImage = this.game.add.image( screen.width / 4 , screen.width / 2, 'taptocont', 'assets/taptocont.png');
		// this.lowerImage.scale.setTo(screen.width / 3, screen.height / 3 );
		// this.headerImage.scale.setTo(screen.width / 3, screen.height / 3 );
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
