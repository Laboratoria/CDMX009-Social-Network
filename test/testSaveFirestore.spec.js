import MockFirebase from 'mock-cloud-firestore';

import { saveFirestore } from '../src/utils/saveInFirestore.js';
import { addNewCard } from '../src/index.js';

const fixtureData = {
  __collection__: {
    publications: {
      __doc__: {
        abc1d: {
          title: 'Hola, encontre esto que puede ayudarnos',
          complete: false,
        },
      },
    },
  },
};

global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });


describe('lista de notas', () => {
  it('Debería porder publicar', done => saveFirestore('preparar la pildora')
    .then(() => addNewCard(
      (data) => {
        const result = data.find(note => note.title === 'Hola, encontre esto que puede ayudarnos');
        expect(result.title).toBe('Hola, encontre esto que puede ayudarnos');
        done();
      },
    )));
});
