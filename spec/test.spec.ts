import { fakeAsync, tick, flush } from '../helpers/fakeAsync';

describe('the fakeAsync helper function', () => {
    it('should allow to advance time properly', fakeAsync(() => {
        let called = false;
        // lets make a simple timeout that fires
        setTimeout(() => {
            called = true;
        }, 100000);
        tick(1000000);

        expect(called).toBe(true);
    }));

    it('should also work when not enough time has passed', fakeAsync(() => {
        let called = false;
        // make a timeout that does not get called
        setTimeout(() => {
            called = true;
        }, 100000);
        tick(1000);

        expect(called).toBe(false);

        // discard remaining microtasks
        flush();
    }));
});
