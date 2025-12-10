import axios from 'axios'
const API_KEY = 'AIzaSyBftiKn-SJUFqG0nH6B9fe93qTpZWCE-JQ'

async function createUser(email:string,password:string){
   const response = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+API_KEY,
        {
            email:email,
            password:password,
            returnSecureToken:true
        }
    )
}