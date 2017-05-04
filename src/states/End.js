class End extends Phaser.State {
  constructor() {
    super();
    this.topTenJSON;
    this.printOut;

  }

  preload(){
    this.game.load.json('topTen', 'http://cornman-api.herokuapp.com/scores');
  }

	create() {

    this.topTenJSON = this.game.cache.getJSON('topTen');
    this.printOut = this.game.add.group();
    this.game.time.events.add(1000, this.ajaxRequest, this);

    this.game.add.tween(this.printOut).to( { y: -900 }, 2000, Phaser.Easing.Linear.None, true);

    this.game.stage.backgroundColor = '#DFF4FF';
		this.headerImage = this.game.add.image(this.game.widthHalf, 0, 'gameover-title', 'assets/gameover-title.png');
		this.headerImage.anchor.setTo(0.5)
		this.headerImage.scale.setTo(this.game.aspectRatio / 3, this.game.aspectRatio / 3)
		this.game.add.tween(this.headerImage).to( { y: this.game.heightHalf }, 3000, Phaser.Easing.Bounce.Out, true);

    this.restartButton = this.game.add.button(330, 360, 'restart', this.restartGame, this);
		this.restartButton.anchor.setTo(0.5)
		this.restartButton.scale.setTo(this.game.aspectRatio / 1.25, this.game.aspectRatio / 1.25)
		this.restartButton.alpha = 0;
    this.mainMenuButton = this.game.add.button(330 + (this.restartButton.width) + 25, 360, 'main-menu', this.goToMenu, this);
		this.mainMenuButton.anchor.setTo(0.5)
		this.mainMenuButton.scale.setTo(this.game.aspectRatio / 1.25, this.game.aspectRatio / 1.25)
		this.mainMenuButton.alpha = 0;
		this.game.add.tween(this.restartButton).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true, 0, 1000, true);
		this.game.add.tween(this.mainMenuButton).to( { alpha: 1 }, 3000, Phaser.Easing.Linear.None, true, 0, 1000, true);


		this.endCow = this.game.add.sprite( this.game.widthHalf + (this.headerImage.width / 3), (this.game.heightHalf) + (this.headerImage.height / 1.5) + 20, 'cow');
		this.endCow.animations.add('walk')
		this.endCow.animations.play('walk', 3, true);
		this.endCow.anchor.setTo(0.5)
		this.endCow.scale.setTo(this.game.aspectRatio / 1.5, this.game.aspectRatio / 1.5)
		this.game.add.tween(this.endCow).to( { x: this.endCow.x - 3000 }, 200000, Phaser.Easing.Linear.None, true);

	}

  ajaxRequest() {
    let title = "Top Ten Scores"
    this.game.add.text(700, 60, title);
    let positionY = 1000;
    let rank = 1;
    let nth = "st";
    this.topTenJSON.forEach((score)=>{
      if (rank === 1){
        nth = "st";
      }
      else if(rank === 2){
        nth = "nd";
      }
      else if(rank === 3){
        nth = "rd";
      }
      else {
        nth = "th";
      }
      let scoreBoard = `${rank}${nth} - ${score.score}`
      this.printOut.add(this.game.add.text(750, positionY, scoreBoard));
      positionY += 25;
      rank += 1;
    })
  }

  restartGame() {
    this.game.state.start('Main');
  }

  goToMenu() {
    this.game.state.start('Menu');
  }
}

export default End;
