export const getExpression = (state) => {
  return state.calculatorReducer.expression;
};
export const getResult = (state) => {
  return state.calculatorReducer.result;
};
export const getHistory = (state) => {
  return state.calculatorReducer.history;
};
export const getHistoryStatus = (state) => {
  return state.calculatorReducer.historyStatus;
};
export const getCurrentTheme = (state) => {
  return state.calculatorReducer.themeStatus;
};
