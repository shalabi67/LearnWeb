
describe(`this is an example for tests`, () => {
    beforeAll(()=> {
        console.log(' BEFORE ALL.');
    })
    beforeEach(()=> {
        console.log(' before each.');
    })
    it('should pass', function () {
        expect(2 +3).toEqual(5);
    });
    it.skip('should be skipped', function () {
        expect(2 +3).toEqual(20);
    });
    afterEach( ()=> {
        console.log(' after each.');
    });
    afterAll(()=> {
        console.log(' AFTER ALL.');
    })
})

describe(`This shows how to control test`, () => {
    /*
    it.only('only this test will run', function () {
        expect(2 +3).toEqual(5);
    });
    it('should should not run', function () {
        expect(2 +3).toEqual(40);
    });

     */
});