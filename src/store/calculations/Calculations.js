export const multiply = (operands, operatorIndex) =>
    operands[operatorIndex + 1] ?
        parseFloat(operands[operatorIndex]) * parseFloat(operands[operatorIndex + 1]) :
        -parseFloat(operands[operatorIndex]) * parseFloat(operands[operatorIndex + 2])

export const devide = (operands, operatorIndex) =>
    operands[operatorIndex + 1] ?
        (parseFloat(operands[operatorIndex]) / parseFloat(operands[operatorIndex + 1])).toFixed(3) :
        (-parseFloat(operands[operatorIndex]) / parseFloat(operands[operatorIndex + 2])).toFixed(3)

export const subtract = (operands, firstSymbol) =>
    firstSymbol === '-' ?
        -parseFloat(operands[0]) - parseFloat(operands[1]) :
        parseFloat(operands[0]) - parseFloat(operands[1])

export const sum = (operands, firstSymbol) => {
    if (firstSymbol === '-') return -parseFloat(operands[0]) + parseFloat(operands[1])
    if (!operands[1]) return operands[0]
    return parseFloat(operands[0]) + parseFloat(operands[1])
}


// for high priority operation ( * or / )
export const calculateHighPriorityOperations = (expression, operation) => {
    // while expression include operation * or /
    while (expression.indexOf(operation) !== -1) {
        // split expression on digits
        /* eslint-disable */
        const operands = expression.split(/[*\/\-+]/)
        // get index of first operator * or /
        /* eslint-disable */
        const operatorIndex = expression.match(/[*\/\-+]/g).indexOf(operation)
        // get result of operation with two close digits
        const result = (operation === '*') ? multiply(operands, operatorIndex) : devide(operands, operatorIndex)
        // replace operation with two close digits with result
        operands[operatorIndex + 1] ?
            expression = expression.replace(`${operands[operatorIndex]}${operation}${operands[operatorIndex + 1]}`, result.toString()) :
            expression = expression.replace(`${operands[operatorIndex]}${operation}-${operands[operatorIndex + 2]}`, result.toString())
        expression = expression.replace('--', '+')
        expression = expression.replace('+-', '-')
    }
    return expression
}

// for low priority operation ( + or - )
export const calculateLowPriorityOperations = (expression) => {
    // while expression include operation - or + and expression is not digit
    while (expression.match(/[+-]/) && !(+expression)) {
        // first operands is negative ?
        if (expression[0] === '-') {
            // split expression on digits
            const operands = expression.slice(1).split(/[+-]/)
            // get first operator
            const operator = expression.slice(1).match(/[+-]/g)[0]
            // get result of operation with two first digits
            const result = (operator === '+') ? sum(operands, expression[0]) : subtract(operands, expression[0])
            // replace operation with two first digits with result
            expression = expression.replace(expression[0] + operands[0] + operator + operands[1], result.toString())
        } else {
            // split expression on digits
            const operands = expression.split(/[+-]/)
            // get first operator
            const operator = expression.match(/[+-]/g)[0]
            // get result of operation with two first digits

            const result = (operator === '+') ? sum(operands, expression[0]) : subtract(operands, expression[0])
            // replace operation with two first digits with result
            expression = expression.replace(operands[0] + operator + operands[1], result.toString())
        }
    }
    return expression
}

export const calculateScopes = (expression) => {
    const secondScopeIndex = expression.indexOf(')')
    const firstScopeIndex = expression.slice(0, secondScopeIndex).lastIndexOf('(')
    // get result of expression in scopes
    const result = calculate(expression.slice(firstScopeIndex + 1, secondScopeIndex))
    // replace expression in scopes with result
    expression = expression.replace(expression.slice(firstScopeIndex, secondScopeIndex + 1), result)
    return expression
}

export const calculatePercent = (expression) => {
    while (expression.match(/[%]/)) {
        const operands = expression.split('%')
        const operator = expression.slice(1).match(/%/g)[0]
        const result = parseFloat(operands[0]) % parseFloat(operands[1])
        expression = expression.replace(operands[0] + operator + operands[1], result.toString())
    }
    return expression
}

export const replacePlusMinus = (expression) => {
    const operands = expression.split(/[%*\-+=]/g)
    let lastNumber = operands.slice(-1)
    if (operands[0] && !operands[operands.length - 1]) return expression.replace(expression, '-' + expression)
    if (!operands[0]) return expression.slice(1, expression.length)
    if (lastNumber && operands[operands.length - 2]) return expression.replace(lastNumber, '-' + lastNumber)
    if (lastNumber && !operands[operands.length - 2]) {
        const digit = expression.lastIndexOf(lastNumber)
        return expression.slice(0, digit - 1) + lastNumber
    }
    return expression
}

export const calculate = (expression) => {
    while (expression.match(/[()]/)) {
        expression = calculateScopes(expression)
    }
    expression = calculateHighPriorityOperations(expression, '*')
    expression = calculateHighPriorityOperations(expression, '/')
    expression = calculateLowPriorityOperations(expression)
    expression = calculatePercent(expression)
    return expression
}
