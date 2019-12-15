import * as vscode from 'vscode';
import { NotesManager } from '../core/NotesManager';
import { createTodayYournalID } from '../core/Yournal';

export function registerCommands(context: vscode.ExtensionContext, manager: NotesManager) {

    context.subscriptions.push(vscode.commands.registerCommand('yourniki.openTodayYournal', openTodayYournal(manager)));

    context.subscriptions.push(vscode.commands.registerCommand('yourniki.listYournalEntries', listYournalEntries));
}

function openTodayYournal(manager: NotesManager) {
    return () => {
        vscode.window.showInformationMessage('Open yourniki!');
        openNote(manager.getNotePathToTouchedFile(createTodayYournalID()));
    }
}

function listYournalEntries() {
    vscode.window.showInformationMessage('List yourniki!');
}

function openNote(path: string) {
    let uri = vscode.Uri.file(path);
    vscode.workspace.openTextDocument(uri).then(textDocument => {
        vscode.window.showTextDocument(textDocument, 1, false);
    });
}
