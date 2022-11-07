import { ACCommand } from "@commands/ACCommand";
import { CCommand } from "@commands/CCommand";
import { EqualCommand } from "@commands/EqualCommand";
import { NumberCommand } from "@commands/NumberCommand";
import { PlusMinusCommand } from "@commands/PlusMinusCommand";
import { SignCommand } from "@commands/SignCommand";

export const buttons = [
  {
    value: "7",
    command: (expression, result) => {
      return new NumberCommand(7, expression, result);
    },
  },
  {
    value: "8",
    command: (expression, result) => {
      return new NumberCommand(8, expression, result);
    },
  },
  {
    value: "9",
    command: (expression, result) => {
      return new NumberCommand(9, expression, result);
    },
  },
  {
    value: "*",
    command: (expression) => {
      return new SignCommand("*", expression);
    },
  },
  {
    value: "/",
    command: (expression) => {
      return new SignCommand("/", expression);
    },
  },
  {
    value: "4",
    command: (expression, result) => {
      return new NumberCommand(4, expression, result);
    },
  },
  {
    value: "5",
    command: (expression, result) => {
      return new NumberCommand(5, expression, result);
    },
  },
  {
    value: "6",
    command: (expression, result) => {
      return new NumberCommand(6, expression, result);
    },
  },
  {
    value: "-",
    command: (expression) => {
      return new SignCommand("-", expression);
    },
  },
  {
    value: "+",
    command: (expression) => {
      return new SignCommand("+", expression);
    },
  },
  {
    value: "1",
    command: (expression, result) => {
      return new NumberCommand(1, expression, result);
    },
  },
  {
    value: "2",
    command: (expression, result) => {
      return new NumberCommand(2, expression, result);
    },
  },
  {
    value: "3",
    command: (expression, result) => {
      return new NumberCommand(3, expression, result);
    },
  },
  {
    value: "%",
    command: (expression) => {
      return new SignCommand("%", expression);
    },
  },
  {
    value: ".",
    command: (expression, result) => {
      return new NumberCommand(".", expression, result);
    },
  },
  {
    value: "(",
    command: (expression, result) => {
      return new NumberCommand("(", expression, result);
    },
  },
  {
    value: "0",
    command: (expression, result) => {
      return new NumberCommand(0, expression, result);
    },
  },
  {
    value: ")",
    command: (expression, result) => {
      return new NumberCommand(")", expression, result);
    },
  },
  {
    value: "=",
    command: (expression) => {
      return new EqualCommand(expression);
    },
  },
  {
    value: "AC",
    command: (expression) => {
      return new ACCommand(expression);
    },
  },
  {
    value: "C",
    command: (expression) => {
      return new CCommand(expression);
    },
  },
  {
    value: "+/-",
    command: (expression) => {
      return new PlusMinusCommand(expression);
    },
  },
];
