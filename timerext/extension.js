// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const TimerManager = require('./timermanager');
// console.log(msg);
// import { StatusBarAlignment, StatusBarItem, window } from "vscode";
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed


/**
 * @param {vscode.ExtensionContext} context
 */

 
// const TimerManager = T.TimerManager;














function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "timerext" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const timerManager = new TimerManager();
	let disposable = vscode.commands.registerCommand('timerext.timeropen', function () {

		vscode.window.showInformationMessage('It\'s time to start an extention!');
		
	});
	const startDisposable = vscode.commands.registerCommand("timerext.startTimer", () => {
		timerManager.start();
	});

	const stopDisposable = vscode.commands.registerCommand("timerext.pauseTimer", () => {
		timerManager.pause();
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}

