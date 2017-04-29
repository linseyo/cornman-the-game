class Stats extends Phaser.State {


	create() {
    this.game.stage.backgroundColor = '#DFF4FF';

    let text = "U ded"
    this.startText = this.game.add.text(this.game.width/2, this.game.height/2, text, { font: "50px Arial", textalign: "center"});
	}
}

export default Stats;
