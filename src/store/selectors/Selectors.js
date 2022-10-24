export const getExpression = (state) => {
    return state.mainReducer.expression
}
export const getResult = (state) => {
    return state.mainReducer.result
}
export const getHistory = (state) => {
    return state.mainReducer.history
}
export const getHistoryStatus = (state) => {
    return state.mainReducer.historyStatus
}
export const getCurrentTheme = (state) => {
    return state.mainReducer.themeStatus
}