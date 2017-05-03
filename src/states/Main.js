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
	this.mountainsBack = this.game.add.tileSprite(0,
		this.game.height - (this.game.cache.getImage('mountains-back').height / 2),
			this.game.cache.getImage('mountains-back').width,
			this.game.cache.getImage('mountains-back').height,
			'mountains-back'
 	 );
	 	this.mountainsBack.scale.setTo((this.game.aspectRatio * 0.85), (this.game.aspectRatio * 0.85))

 		this.hillsMid1 = this.game.add.tileSprite(0,
			this.game.height - (this.game.cache.getImage('mountains-back').height / 2),
		 this.game.cache.getImage('hills-mid1').width,
		 this.game.cache.getImage('hills-mid1').height,
		 'hills-mid1'
 );
 this.hillsMid1.scale.setTo((this.game.aspectRatio * 0.95), (this.game.aspectRatio * 0.95))

 this.fenceMid2 = this.game.add.tileSprite(0,
	 (this.game.height - this.game.cache.getImage('fence-mid2').height / 2),
	 this.game.cache.getImage('fence-mid2').width,
	 this.game.cache.getImage('fence-mid2').height,
	 'fence-mid2'
 );
 this.fenceMid2.scale.setTo((this.game.aspectRatio * 0.85), (this.game.aspectRatio * 0.85));

 this.groundFront = this.game.add.tileSprite(0,
	 this.game.height - (this.game.cache.getImage('ground-front').height / 2),
	 this.game.cache.getImage('ground-front').width,
	 this.game.cache.getImage('ground-front').height,
	 'ground-front'
 );
 this.groundFront.scale.setTo((this.game.aspectRatio * 0.85), (this.game.aspectRatio * 0.85))

//  // Create Button Controller
// 		 // Jump Button
// 	 this.buttonJump = this.add.button(0, 0, 'sky', null, this);
// 	 this.buttonJump.scale.setTo(this.game.aspectRatio, this.game.aspectRatio)
// 	 this.buttonJump.onInputDown.add(this.jumpPressed, this);
//
// 		 // Fire Button & Keyboard Press
// 	 this.fireButton = this.add.button((this.game.widthHalf), 0, 'sky', null, this);
// 	 this.fireButton.scale.setTo(this.game.aspectRatio)
// 	 this.fireButton.onInputDown.add(this.goShootPressed, this);
// 	 this.fire = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
// 	 this.fire.onDown.add(this.goShootPressed, this);
// }

}
	 // Touch Enabled jumping function
 jumpPressed(){
	 if((this.game.time.now > this.jumpTimer) && this.doubleJump <= 2) {
		 this.player.body.velocity.y = -1250;
		 this.player.body.velocity.x = 2;
		 this.jumpTimer = this.game.time.now + 200;
		 this.doubleJump += 1;
	 }
 }


	 goShootPressed(){
		 if(this.game.time.now > this.nextFire && this.ammo.countDead() > 0) {
			 this.nextFire = this.game.time.now + this.fireRate;
			 this.kernel = this.ammo.getFirstDead(false);
			 this.kernel.physicsBodyType = Phaser.Physics.ARCADE;
			 this.kernel.bulletSpeed = 600
			 this.kernel.bulletAngleOffset = 90;
			 this.kernel.reset(this.player.x + 10, this.player.y + 10);
			 this.kernel.body.velocity.x = 1000;
			 this.kernel.body.allowGravity = false;
			 // this.kernel.kill();
			 // this.ammoCounter--;
			 // this.ammoTotal.text = this.ammoCounter;
		 }
	 }


	update(){
		this.mountainsBack.tilePosition.x -= 0.60;
		this.hillsMid1.tilePosition.x -= 0.3;
		this.fenceMid2.tilePosition.x -= 3.0;
		this.groundFront.tilePosition.x -= 5.0;
	}
}
export default Main;
