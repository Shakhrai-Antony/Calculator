import { CommandResultEntity } from "../entities/CommandResultEntity";
import { Command } from "./Command";

export class NumberCommand extends Command {
  constructor(value, expression, result) {
    super();
    this.value = value;
    this.expression = expression;
    this.result = result;
  }

  execute() {
    return new CommandResultEntity(this.expression + this.value, this.result);
  }
}
