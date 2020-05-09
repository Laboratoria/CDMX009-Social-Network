const firestoreMock = () => {
    return {
        collection: (nameCollection) =>{
            return {
                add: (objData) => {
                    return new Promise((resolve) => {
                        resolve('Hola!')
                    })
                }
            }
        }
    }
}

const firebase = {
    firestore: firestoreMock
}

export default jest.fn(() => {
    return firebase;
})