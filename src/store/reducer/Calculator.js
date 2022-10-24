const initialState = {
    expression: '',
    result: '0',
    history: [],
    historyStatus: true,
    themeStatus: 'light'
}

const Calculator = (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_EXPRESSION': {
            return {
                ...state,
                expression: action.payload,
            }
        }
        case 'SET_RESULT': {
            return {
                ...state,
                result: action.payload
            }
        }
        case 'SET_HISTORY': {
            if (state.historyStatus) {
                return {
                    ...state,
                    history: [action.payload, ...state.history]
                }
            }
            if (!state.historyStatus) {
                return {
                    ...state,
                    history: []
                }
            }
        }
        case 'SET_HISTORY_STATUS': {
            return {
                ...state,
                history: [],
                historyStatus: action.status
            }
        }
        case 'SET_THEME_STATUS': {
            return {
                ...state,
                themeStatus: action.status
            }
        }
        default:
            return state
    }
}

export const actions = {
    setExpression: (payload) => {
        return ({type: 'ADD_EXPRESSION', payload})
    },
    setResult: (payload) => {
      return ({type: 'SET_RESULT', payload})
    },
    setHistory: (payload) => {
        return ({type: 'SET_HISTORY', payload})
    },
    setHistoryStatus: (status) => {
        return ({type: 'SET_HISTORY_STATUS', status})
    },
    setThemeStatus: (status) => {
        return ({type: 'SET_THEME_STATUS', status})
    }
}

export default Calculator

