import { CommandResultEntity } from '../entities/CommandResultEntity';
import { calculate } from '../store/calculations';
import { Command } from './Command';

export class SignCommand extends Command {
    constructor(value, expression) {
        super();
        this.value = value;
        this.expression = expression;
    }

    execute() {
        if (
            /* eslint-disable */
            this.expression.length !== 0 &&
            this.expression[this.expression.length - 1].match(/[%*\/\-+]/) &&
            this.value.match(/[%*\/\-+]/)
        ) {
            return new CommandResultEntity(
                this.expression.slice(0, this.expression.length - 1) +
                    this.value,
            );
        }
        if (
            /* eslint-disable */
            this.expression.length === 0 &&
            this.value.match(/[%*\/\-+()=]/)
        ) {
            return new CommandResultEntity(this.expression + this.value);
        }
        /* eslint-disable */
        if (
            this.expression.match(/[%*\/\-+=]/) &&
            this.value.match(/[%*\/\-+=]/)
        ) {
            return new CommandResultEntity(
                this.expression + this.value,
                calculate(this.expression),
            );
        }
        return new CommandResultEntity(this.expression + this.value);
    }
}
