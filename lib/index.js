process.noDeprecation = true;

const chalk = require("chalk");

console.log(chalk.magentaBright.bold("╔══════════════════════════════════════╗"));
console.log(chalk.magentaBright.bold("║         MODIFIED BAILEYS            ║"));
console.log(chalk.magentaBright.bold("║           BY ARULXOFFC               ║"));
console.log(chalk.magentaBright.bold("╚══════════════════════════════════════╝"));

console.log(chalk.cyan("\n[ MESSAGE ]"));
console.log(chalk.white("Hi, thank you for using my modified Baileys ^-^"));

const update = new Date("2026-02-23");
console.log(chalk.yellow("\n[ LATEST UPDATE ]"));
console.log(chalk.green(update.toLocaleDateString("id-ID", { 
  weekday: "long", 
  year: "numeric", 
  month: "long", 
  day: "numeric" 
})));

console.log(chalk.gray("\n──────────────────────────────────────"));
console.log(chalk.blue("Telegram : @arulofficialll"));
console.log(chalk.gray("──────────────────────────────────────\n"));

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
