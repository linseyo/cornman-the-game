import Boot from 'states/Boot';
import Preload from 'states/Preload';
import Menu from 'states/Menu';
import Main from 'states/Main';
import Stats from 'states/Stats';
import End from 'states/End'

class Game extends Phaser.Game {
	constructor() {

		super(screen.width, screen.height, Phaser.CANVAS, 'gameArea');

		this.state.add('Boot', Boot, false);
		this.state.add('Preload', Preload, false);
		this.state.add('Menu', Menu, false);
		this.state.add('Main', Main, false);
		this.state.add('Stats', Stats, false);
		this.state.add('End', End, false);

		this.state.start('Boot');
	}

}

new Game();
