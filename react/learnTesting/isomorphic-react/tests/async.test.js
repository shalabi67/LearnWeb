import delay from 'redux-saga'
const asyncFunct = async () => {
    await delay(400);
}
describe('show how to test async functions', () => {
    it('should run using done', (done) => {
        setTimeout(() => {
            console.log('waiting complete');
            done();
        }, 500)
    });

    it('should run using promise', () => {
        return new Promise(
            done => {
                console.log('waiting complete');
                setTimeout(done, 300)
            }
        )
    });

    it('should run using asyn', async () => {
        await asyncFunct();
    })
})