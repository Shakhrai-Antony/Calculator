import { Command } from './Command';
import { CommandResultEntity } from './CommandResultEntity';

export class NumberCommand extends Command {
  constructor(value, expression, result) {
    super();
    this.value = value;
    this.expression = expression;
    this.result = result;
  }

  execute() {
    if (
      this.expression.length !== 0 &&
      this.expression[this.expression.length - 1].match(/[.]/) &&
      this.value === '.'
    ) {
      return new CommandResultEntity(
        this.expression.slice(0, this.expression.length - 1) + this.value,
      );
    }
    if (
      this.expression.length !== 0 &&
      this.expression.match(/[.]/) &&
      this.value === '.'
    )
      return new CommandResultEntity(
        this.expression.slice(0, this.expression.length),
      );
    return new CommandResultEntity(this.expression + this.value, this.result);
  }
}
