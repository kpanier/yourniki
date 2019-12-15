import * as vscode from 'vscode';
import { NotesManager } from './core/NotesManager';
import { registerCommands } from './ui/commands';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	let manager = new NotesManager(process.env['HOME'] + '/.yourniki/');
	registerCommands(context, manager);
}

// this method is called when your extension is deactivated
export function deactivate() { }
