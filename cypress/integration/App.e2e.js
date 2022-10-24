describe('App E2E', () => {
    it('h2 should have Calculator App', () => {
        cy.visit('/');
        cy.get('#calculator_App').contains('Calculator App')
    })
    it('should have an expression that equals empty string', () => {
        cy.visit('/home');
        cy.get('#expression').should('have.length', 0)
    })
    it('should have an expression that equals clicked button', () => {
        cy.visit('/home');
        cy.get('#handle_Click1').click() //8
        cy.get('#expression').should('have.length', 1)
        cy.get('#expression').contains('8')
    })
    it('check the sum', () => {
        cy.visit('/home')
        cy.get('#handle_Click10').click() // 1
        cy.get('#handle_Click9').click() // +
        cy.get('#handle_Click11').click() // 2
        cy.get('#expression').contains('1+2')
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('3')
        cy.get('#expression').should('have.length', 1)
    })
    it('check the devide', () => {
        cy.visit('/home')
        cy.get('#handle_Click2').click() // 9
        cy.get('#handle_Click4').click() // /
        cy.get('#handle_Click12').click() // 3
        cy.get('#expression').contains('9/3')
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('3')
        cy.get('#expression').should('have.length', 1)
    })
    it('check the subtract', () => {
        cy.visit('/home')
        cy.get('#handle_Click6').click() // 5
        cy.get('#handle_Click8').click() // -
        cy.get('#handle_Click5').click() //4
        cy.get('#expression').contains('5-4')
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('1')
        cy.get('#expression').should('have.length', 1)
    })
    it('check the multiply', () => {
        cy.visit('/home')
        cy.get('#handle_Click6').click() // 5
        cy.get('#handle_Click3').click() // *
        cy.get('#handle_Click5').click() //4
        cy.get('#expression').contains('5*4')
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('20')
        cy.get('#expression').should('have.length', 1)
    })
    it('check the %', () => {
        cy.visit('/home')
        cy.get('#handle_Click10').click() // 1
        cy.get('#handle_Click16').click() // 0
        cy.get('#handle_Click13').click() // %
        cy.get('#handle_Click11').click() // 2
        cy.get('#expression').contains('10%2')
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('0')
        cy.get('#expression').should('have.length', 1)
    })
    it('check the С', () => {
        cy.visit('/home')
        cy.get('#handle_Click10').click() // 1
        cy.get('#handle_Click16').click() // 0
        cy.get('#handle_Click20').click() // С
        cy.get('#expression').contains('1')
        cy.get('#expression').should('have.length', 1)
    })
    it('check the AС', () => {
        cy.visit('/home')
        cy.get('#handle_Click10').click() // 1
        cy.get('#handle_Click16').click() // 0
        cy.get('#handle_Click3').click() // *
        cy.get('#handle_Click11').click() // 2
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('20')
        cy.get('#handle_Click19').click() // AC
        cy.get('#result').contains('0')
        cy.get('#expression').should('have.length', 1)
    })
    it('check non-integer numbers', () => {
        cy.visit('/home')
        cy.get('#handle_Click14').click() // .
        cy.get('#handle_Click10').click() // 1
        cy.get('#handle_Click3').click() // *
        cy.get('#handle_Click11').click() // 2
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('0.2')
        cy.get('#expression').should('have.length', 1)
    })
    it('checking expression builder', () => {
        cy.visit('/home')
        cy.get('#handle_Click15').click() // (
        cy.get('#handle_Click10').click() // 1
        cy.get('#handle_Click9').click() // +
        cy.get('#handle_Click12').click() // 3
        cy.get('#handle_Click17').click() // )
        cy.get('#handle_Click3').click() // *
        cy.get('#handle_Click11').click() // 2
        cy.get('#handle_Click18').click() // =
        cy.get('#result').contains('8')
        cy.get('#expression').should('have.length', 1)
    })
    it('check links text', () => {
        cy.get('#navigation_links').find('li').first().should('have.text', 'Home')
        cy.get('#navigation_links').find('li').eq(1).should('have.text', 'Settings')
    })
    it('check links status', () => {
        cy.get('#link1').then((link) => {
            cy.request(link.prop('href'))
                .its('status')
                .should('eq', 200)
        })
        cy.get('#link2').then((link) => {
            cy.request(link.prop('href'))
                .its('status')
                .should('eq', 200)
        })
    })
    it('check application theme status', () => {
        cy.visit('/settings')
        cy.get('#dark_theme').click()
        cy.window().its('store').invoke('getState').should('deep.equal', {
            mainReducer: {
                expression: '',
                result: '0',
                history: [],
                historyStatus: true,
                themeStatus: 'dark'
            }
        })
    })
    it('check the application history status', () => {
        cy.visit('/settings')
        cy.get('#history_off').click()
        cy.window().its('store').invoke('getState').should('deep.equal', {
            mainReducer: {
                expression: '',
                result: '0',
                history: [],
                historyStatus: false,
                themeStatus: 'light'
            }
        })
    })
})
