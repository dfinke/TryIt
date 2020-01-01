"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const octocats_1 = require("./octocats");
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        // try {
        const rand = Math.floor(Math.random() * octocats_1.octocats.length);
        console.log("Hello World");
        // const token = process.env.GITHUB_TOKEN || ''
        // const context = (github as any).context
        // const command = context.payload.comment.body.trim()
        // if (command == '/octocat' || command == '/mona') {
        //     const octokit = new github.GitHub(token)
        //     const repository = context.payload.repository
        //     const issue = context.payload.issue
        //     const rand = Math.floor(Math.random() * octocats.length)
        //     const octocat = octocats[rand]
        //     octokit.issues.createComment({
        //         owner: repository.owner.login,
        //         repo: repository.name,
        //         issue_number: issue.number,
        //         body: '![' + octocat + '](' + octodex_url + '/' + octocat + ')'
        //     })
        // }
        //     } catch (err) {
        //     core.setFailed(err.message)
        // }
    });
}
run();
