import { CommandResultEntity } from "../entities/CommandResultEntity";
import { Command } from "./Command";

export class ACCommand extends Command {
  constructor(expression) {
    super();
    this.expression = expression;
  }

  execute() {
    return new CommandResultEntity("", "0");
  }
}
