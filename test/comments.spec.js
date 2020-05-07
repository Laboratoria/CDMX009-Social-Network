// import mockFirebase from '../_mocks_/firebase-mock.js'
// global.firebase = mockFirebase();
import MockFirebase from 'mock-cloud-firestore';

const fixtureData = {
    __collection__: {
      comments: {
        __doc__: {
          abc123: {
            commit: 'primera prueba de comentario',
          },
          abc125: {
            commit: 'segunda prueba de comentario',
          }
        }
      }
    }
  };

global.firebase= new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

import {addComent, getComments} from '../src/tests.js'

describe('addComent', () =>{
    it('Must be able to upload coment', (done) => {
        return addComent('Hola!').then((data) => {
            const callback = (commits) => {
                // console.log(commits);
                const result = commits.find((element) => {
                    return element.commit === 'Hola!';
                })
                expect(result.commit).toBe('Hola!');
                done()
            }
            getComments(callback)
        })
    })
})