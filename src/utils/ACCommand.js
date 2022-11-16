import { Command } from './Command';
import { CommandResultEntity } from './CommandResultEntity';

export class ACCommand extends Command {
  constructor(expression) {
    super();
    this.expression = expression;
  }

  execute() {
    return new CommandResultEntity('', '0');
  }
}
