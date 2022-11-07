import { CommandResultEntity } from "../entities/CommandResultEntity";
import { Command } from "./Command";

export class CCommand extends Command {
  constructor(expression) {
    super();
    this.expression = expression;
  }

  execute() {
    return this.expression.length > 0
      ? new CommandResultEntity(this.expression.slice(0, -1), "")
      : new CommandResultEntity(this.expression, 0);
  }
}
