class End extends Phaser.State {
  constructor() {
    super();
    this.topTenJSON;
  }

  preload(){
    this.game.load.json('topTen', 'http://cornman-api.herokuapp.com/scores');
  }

	create() {
    this.topTenJSON = this.game.cache.getJSON('topTen');

    this.game.stage.backgroundColor = '#DFF4FF';

    let gameOver = "GAME OVER"
    this.overText = this.game.add.text(0, 0, gameOver, { font: "64px Revalia", textalign: "center"});

    this.restartButton = this.game.add.button(100, 100, 'restart', this.restartGame, this);
    this.mainMenuButton = this.game.add.button(100, 300, 'main-menu', this.goToMenu, this);

    let title = "Top Ten Scores... in the world!"
    this.game.add.text(500, 60, title);
    let positionY = 100;
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
      this.game.add.text(600, positionY, scoreBoard);
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
