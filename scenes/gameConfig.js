import Phaser from 'phaser';
import TestScene from './TestScene';

export default {
	width: 800,
	height: 600,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: {y: 300},
			debug: false
		}
	},
	title: "PhaserJs with Bun.sh",
	scene: [TestScene]
};
