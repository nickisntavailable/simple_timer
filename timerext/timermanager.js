const Timer = require('./timer');
const vscode = require('vscode');

class TimerManager {
	constructor() {

		this.timer = new Timer();
		this.status = 'stop'; 
		this.statusBarStartButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
		this.statusBarStartButton.text = "$(triangle-right)";
		this.statusBarStartButton.command = "timerext.startTimer";
		this.statusBarStartButton.tooltip = "Start Timer";
		this.statusBarStartButton.show();

		this.statusBarPauseButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
		this.statusBarPauseButton.text = "$(debug-pause)";
		this.statusBarPauseButton.command = "timerext.pauseTimer";
		this.statusBarPauseButton.tooltip = "Stop Timer";
		// this.statusBarPauseButton.show();

		this.statusBarText = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left);
		this.statusBarText.text = "00:00";
		this.statusBarText.show();

	}
	draw() {
		console.log(this.timer.currentTime);
		const seconds = this.timer.currentTime % 60;
		const minutes = (this.timer.currentTime - seconds) / 60;
		this.statusBarText.text = ((minutes < 10) ? "0" : "") + minutes + ":" + ((seconds < 10) ? "0" : "") + seconds;
	}
	start() {
		console.log("start timer");
		this.timer.start();
		this.timer.onTick = () => {
			this.draw();
		}
		this.draw();
		this.status = 'started';
		this.statusBarStartButton.hide();
		this.statusBarText.hide();
		this.statusBarPauseButton.show();
		this.statusBarText.show();

	}
	pause() {
		console.log("stop timer");
		this.timer.stop();
		this.status = 'stop';

		this.statusBarText.hide();
		this.statusBarPauseButton.hide();
		this.statusBarStartButton.show();
		this.statusBarText.show();
	}
}
module.exports = TimerManager;