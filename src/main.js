PIXI = require( 'phaser/build/custom/pixi' );
p2 = require( 'phaser/build/custom/p2' );
Phaser = require( 'phaser/build/custom/phaser-split' );

var game = new Phaser.Game(
	800,
	600,
	Phaser.AUTO,
	'',
	{
		preload: preload,
		create: create,
		update: update }
);

function preload() {
	game.load.image('space-background', 'src/assets/img/space.png');
	game.load.image('logo', 'src/assets/img/logo-phaser.png');
}

function create() {
	let background = game.add.sprite(0,0, 'space-background');
	let logo = game.add.sprite(300,200, 'logo');


	let style = { font: "32px Arial", fill: "white", wordWrap: true, wordWrapWidth: background.width, align: "center", backgroundColor: "transparent" };

    text = game.add.text(400, 150, "Role-Playng Simulator game\n Created By", style);
    text.anchor.set(0.5);
}

function update() {
}
