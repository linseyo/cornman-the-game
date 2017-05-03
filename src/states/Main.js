class Main extends Phaser.State {

	create() {
		// Score and coinCounter & ammoCounter reinitialize to zero upon restarting
		this.enemiesPassed = 0;
		this.coinCounter = 0;
		this.totalScore = 0;
		this.ammoCounter = 2;

		//Enable Arcade Physics
		this.game.physics.startSystem(Phaser.Physics.ARCADE);
		this.game.physics.arcade.gravity.y = 2000;

		//Set the games background colour
		this.game.stage.backgroundColor = '#c8f2fb';

		 // Create a tilesprite (x, y, width, height, key)
	this.mountainsBack = this.game.add.tileSprite(0, 0,
			this.game.cache.getImage('mountains-back').width,
			this.game.cache.getImage('mountains-back').height,
			'mountains-back'
 	 );
	 	this.mountainsBack.scale.setTo(this.game.aspectRatio, this.game.aspectRatio)

 		this.hillsMid1 = this.game.add.tileSprite(0, 0,
		 this.game.cache.getImage('hills-mid1').width,
		 this.game.cache.getImage('hills-mid1').height,
		 'hills-mid1'
 );
 this.hillsMid1.scale.setTo(this.game.aspectRatio, this.game.aspectRatio)

 this.fenceMid2 = this.game.add.tileSprite(0, (this.hillsMid1.height / 5),
	 this.game.cache.getImage('fence-mid2').width,
	 this.game.cache.getImage('fence-mid2').height,
	 'fence-mid2'
 );
 this.fenceMid2.scale.setTo(this.game.aspectRatio, this.game.aspectRatio);

 this.groundFront = this.game.add.tileSprite(0, (this.hillsMid1.height / 2.5) + 12,
	 this.game.cache.getImage('ground-front').width,
	 this.game.cache.getImage('ground-front').height,
	 'ground-front'
 );
 this.groundFront.scale.setTo(this.game.aspectRatio, this.game.aspectRatio)

	}

	update(){
		this.mountainsBack.tilePosition.x -= 0.10;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 6.0;
	}
}
export default Main;
