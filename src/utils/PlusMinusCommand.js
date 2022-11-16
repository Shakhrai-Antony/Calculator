import { Command } from './Command';
import { CommandResultEntity } from './CommandResultEntity';
import { replacePlusMinus } from '@store/calculations';

export class PlusMinusCommand extends Command {
  constructor(expression) {
    super();
    this.expression = expression;
  }

  execute() {
    if (this.expression.length !== 0) {
      return new CommandResultEntity(replacePlusMinus(this.expression));
    }
    return new CommandResultEntity(this.expression, '');
  }
}
