class Stats extends Phaser.State {

	create() {
		this.totalScore = this.game.state.states['Main'].totalScore;
		this.enemyScore = this.game.state.states['Main'].enemiesPassed;
		this.coinScore = this.game.state.states['Main'].coinCounter;
		this.ammoScore = this.game.state.states['Main'].ammoCounter;

    this.game.stage.backgroundColor = '#DFF4FF';

		this.headerImage = this.game.add.image(this.game.widthHalf, screen.height/4, 'playerStat', 'assets/playerstats-title.png');
		this.headerImage.anchor.setTo(0.5)


		this.enemyScore = this.game.add.text(this.game.widthHalf, (this.headerImage.y) + (this.headerImage.height/ 9), ("Enemies dodged: " + this.enemyScore), { font: "12px Arial", fill: "#fffff"});
		this.coinScore = this.game.add.text(this.game.widthHalf, (this.enemyScore.y) + 10, ("Coins collected: " + this.coinScore), { font: "12px Arial", fill: "#fffff"});
		this.playerScore = this.game.add.text(this.game.widthHalf, (this.coinScore.y) + 10, ("Total Score: " + this.totalScore), { font: "12px Arial", fill: "#fffff"});
		// this.ammoScore = this.game.add.text(1000, 900, ("Bullets Fired: " + this.ammoScore), { font: "60px Arial", fill: "#fffff"});
		this.sendButton = this.game.add.button(this.game.widthHalf, (this.playerScore.y) + (this.playerScore.height) + 10, 'send', this.sendScore, this);
		this.sendButton.anchor.setTo(0.5);
		this.sendButton.scale.setTo(this.game.aspectRatio / 2, this.game.aspectRatio / 2)

		this.enemyScore.anchor.setTo(0.5);
		this.coinScore.anchor.setTo(0.5);
		this.playerScore.anchor.setTo(0.5);

		this.headerImage.scale.setTo(this.game.aspectRatio / 1.5, this.game.aspectRatio / 1.5)

		this.lowerImage = this.game.add.image( this.game.widthHalf , (this.sendButton.y) + (this.sendButton.height) + 10, 'taptocont', 'assets/taptocont.png');
		this.lowerImage.anchor.setTo(0.5)
		this.lowerImage.scale.setTo(this.game.aspectRatio, this.game.aspectRatio)

		this.cornman = this.game.add.sprite(this.game.width /3 , (this.lowerImage.y) + (this.lowerImage.height) + 10, 'cornman');
		this.cornman.anchor.setTo(0.5)
		this.cornman.scale.setTo(this.game.aspectRatio / 1.5, this.game.aspectRatio / 1.5)
		this.cornman.animations.add('left', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.add('right', [0, 1, 2, 3, 4, 5, 6], 5, true);
		this.cornman.animations.play('left')
		this.game.add.tween(this.cornman).to( { x: this.cornman.x + 300 }, 2000, Phaser.Easing.Linear.None, true);
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
