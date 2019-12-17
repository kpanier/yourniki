import * as vscode from 'vscode';
import { NotesManager } from '../core/NotesManager';
import { createIDFromFileName, createTodayYournalID, getYournalEntryList } from '../core/Yournal';

export function registerCommands(context: vscode.ExtensionContext, manager: NotesManager) {
    context.subscriptions.push(vscode.commands.registerCommand('yourniki.openTodayYournal', openTodayYournal(manager)));
    context.subscriptions.push(vscode.commands.registerCommand('yourniki.listYournalEntries', listYournalEntries(manager)));

    context.subscriptions.push(vscode.commands.registerCommand('yourniki.addWikiPage', addWikiPage(manager)));
    context.subscriptions.push(vscode.commands.registerCommand('yourniki.openWikiPage', openWikiPage(manager)));
}

function openTodayYournal(manager: NotesManager) {
    return () => {
        openNote(manager.getNotePathToTouchedFile(createTodayYournalID()));
    }
}

function listYournalEntries(manager: NotesManager) {
    return () => {
        vscode.window.showQuickPick(getYournalEntryList(manager.basePath)).then(fname => {
            if (fname) {
                openNote(manager.getNotePathToTouchedFile(createIDFromFileName(fname)));
            }
        });
    }
}

function addWikiPage(manager: NotesManager) {
    return () => {
        vscode.window.showInputBox().then(newName => {
            openNote(manager.getNotePathToTouchedFile(newName + '.md'));
        });
    };
}

function openWikiPage(manager: NotesManager) {
    return () => {
        vscode.window.showQuickPick(manager.getWikiPageNames()).then(fname => {
            if (fname) {
                openNote(manager.getNotePathToTouchedFile(fname));
            }
        });
    };
}

function openNote(path: string) {
    let uri = vscode.Uri.file(path);
    vscode.workspace.openTextDocument(uri).then(textDocument => {
        vscode.window.showTextDocument(textDocument, 1, false);
    });
}
