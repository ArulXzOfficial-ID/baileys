process.noDeprecation = true;

const chalk = require("chalk");

console.log("\n\n");

const border = chalk.cyanBright("┌" + "─".repeat(48) + "┐");
const borderEnd = chalk.cyanBright("└" + "─".repeat(48) + "┘");
const line = chalk.cyanBright("├" + "─".repeat(48) + "┤");

console.log(border);
console.log(chalk.cyanBright("│") + chalk.magentaBright.bold("              MODIFIED BAILEYS              ") + chalk.cyanBright("│"));
console.log(chalk.cyanBright("│") + chalk.whiteBright("                 BY ARULXOFFC                 ") + chalk.cyanBright("│"));
console.log(line);
console.log(chalk.cyanBright("│") + chalk.yellowBright("              [ MESSAGE ]                ") + chalk.cyanBright("│"));
console.log(chalk.cyanBright("│") + chalk.greenBright("   Hi, thank you for using my modified Baileys ^-^   ") + chalk.cyanBright("│"));

const update = new Date("2026-02-23");
const formattedDate = update.toLocaleDateString("id-ID", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
});

console.log(chalk.cyanBright("│") + chalk.blueBright("            [ LATEST UPDATE ]              ") + chalk.cyanBright("│"));
console.log(chalk.cyanBright("│") + chalk.whiteBright(`            ${formattedDate}             `) + chalk.cyanBright("│"));
console.log(chalk.cyanBright("│") + chalk.magenta("            Telegram : @arulofficialll            ") + chalk.cyanBright("│"));
console.log(borderEnd);

console.log("\n\n");

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeWASocket = void 0;

const Socket_1 = __importDefault(require("./Socket"));
exports.makeWASocket = Socket_1.default;
__exportStar(require("../WAProto"), exports);
__exportStar(require("./Utils"), exports);
__exportStar(require("./Types"), exports);
__exportStar(require("./Store"), exports);
__exportStar(require("./Defaults"), exports);
__exportStar(require("./WABinary"), exports);
__exportStar(require("./WAM"), exports);
__exportStar(require("./WAUSync"), exports);

exports.default = Socket_1.default;
