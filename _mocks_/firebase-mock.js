const firestore = () => {
    return {
        collection: (nameCollection) => {
            return{
                add: (objData) =>{
                    return new Promise((resolve) => {
                        resolve('ok ok')
                    })
                }
            }
        }
    }
}

const firebase = {
    firestore: firestore,
}

export default jest.fn(()=>{
    return firebase;
})