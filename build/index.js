"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var discord_js_1 = require("discord.js");
var Bot_1 = __importDefault(require("./Bot"));
var commands_1 = require("./commands");
var core_1 = require("./configurations/core");
var events_1 = require("./events");
var client = new discord_js_1.Client();
var Robot = new Bot_1.default(client, core_1.token);
Robot
    .registerCommand(commands_1.Example)
    .registerEvent(events_1.Ready)
    .initialize();
//# sourceMappingURL=index.js.map