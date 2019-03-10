import 'zone.js';
import 'zone.js/dist/zone-testing';

const InternalZone: any = typeof Zone !== 'undefined' ? Zone : null;
const fakeAsyncTestModule = Zone[InternalZone.__symbol__('fakeAsyncTest')];

export const fakeAsync: (testFunction: () => void) => ImplementationCallback = fakeAsyncTestModule.fakeAsync;
export const tick: (milliseconds: number) => void = fakeAsyncTestModule.tick;
export const flush: () => void = fakeAsyncTestModule.flush;
