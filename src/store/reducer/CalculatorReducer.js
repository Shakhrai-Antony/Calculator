const initialState = {
    expression: '',
    result: '0',
    history: [],
    themeStatus: localStorage.getItem('theme')
}

const CalculatorReducer = (state = initialState, action) => {

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
                return {
                    ...state,
                    history: [...state.history, action.payload]
                }
        }
        case 'CLEAR_HISTORY': {
            return {
                ...state,
                history: []
            }
        }
        case 'SET_THEME_STATUS': {
            return {
                ...state,
                themeStatus: action.theme
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
    setThemeStatus: (theme) => {
        return ({type: 'SET_THEME_STATUS', theme})
    },
    clearHistory: () => {
        return ({type: 'CLEAR_HISTORY'})
    }
}

export default CalculatorReducer

