import { Command } from './Command';
import { CommandResultEntity } from './CommandResultEntity';
import { calculate } from '@store/calculations';

export class EqualCommand extends Command {
  constructor(expression) {
    super();
    this.expression = expression;
  }
  execute() {
    if (this.expression.length > 0) {
      try {
        if (this.expression[0].match(/[%*/]/)) {
          throw new Error('Should start from operators');
        }
        // if count of "(" !== ")" throw Error
        if (
          this.expression.match(/[()]/) &&
          this.expression.match(/[(]/g).length !==
            this.expression.match(/[)]/g).length
        ) {
          throw new Error('Count of scopes are different');
        }
        if (this.expression[this.expression.length - 1].match(/[%*/\-+]/)) {
          return new CommandResultEntity(
            '',
            calculate(this.expression.slice(0, -1)),
          );
        }
        return new CommandResultEntity('', calculate(this.expression));
      } catch (e) {
        console.log(e.message);
        return new CommandResultEntity('', 'Error');
      }
    }
    return new CommandResultEntity('');
  }
  getHistory() {
    return this.expression;
  }
}
