// Import vscode api with alias of "vscode"
import * as vscode from "vscode";

// Import command functions
import {
    vscodeLipsum as genLipsum,
    clipboardLipsum as clipLipsum,
} from "./genLipsum";

// Extension activation function
export function activate(context: vscode.ExtensionContext) {
    // Activation log
    console.log("Lipsum Generator Activated!");

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with registerCommand
    // The commandId parameter must match the command field in package.json
    let lipsumGeneralGen = vscode.commands.registerCommand(
        "lipsum-generator.genLipsum",
        genLipsum
    );

    let lipsumClipGen = vscode.commands.registerCommand(
        "lipsum-generator.genClipLipsum",
        clipLipsum
    );

    context.subscriptions.push(lipsumGeneralGen);
    context.subscriptions.push(lipsumClipGen);
}

// this method is called when your extension is deactivated
export function deactivate() {}
