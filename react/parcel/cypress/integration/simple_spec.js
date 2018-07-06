describe('My First Test', function() {
    it('Does not do much!', function() {
      expect(true).to.equal(true)
    })
  })

  describe('My First Test', function() {
    it('Visits the Parcel App', function() {
      cy.visit('http://localhost:1234/')

      cy.contains('asdf').click()
    })
  })