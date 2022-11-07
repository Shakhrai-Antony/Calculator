import { CommandResultEntity } from "../entities/CommandResultEntity";
import { calculate } from "../store/calculations/Calculations";
import { Command } from "./Command";

export class EqualCommand extends Command {
  constructor(expression) {
    super();
    this.expression = expression;
  }
  execute() {
    if (this.expression.length > 0) {
      try {
        /* eslint-disable */
        if (this.expression[0].match(/[%*\/]/)) {
          throw Error;
        }
        if (this.expression[this.expression.length - 1].match(/[%*\/\-+]/)) {
          throw Error;
        }
        // if count of "(" !== ")" throw Error
        if (
          this.expression.match(/[()]/) &&
          this.expression.match(/[(]/g).length !==
            this.expression.match(/[)]/g).length
        ) {
          throw Error;
        }
        return new CommandResultEntity("", calculate(this.expression));
      } catch {
        return new CommandResultEntity("", "Error");
      }
    }
    return new CommandResultEntity("");
  }
  getHistory() {
    return this.expression;
  }
}
