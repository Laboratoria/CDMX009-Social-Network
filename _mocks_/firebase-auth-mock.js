const auth = () =>{
    return{
        singOut: (user) => {
            return new Promise((resolve) =>{
                resolve ('ok ok')
            })
        }
    }
}
const firebaseAuth = {
    auth: auth
}

export default jest.fn(() => {
    return firebaseAuth;
})