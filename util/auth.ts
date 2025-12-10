import axios from "axios";
const API_KEY = "AIzaSyBftiKn-SJUFqG0nH6B9fe93qTpZWCE-JQ";

async function authenticate(mode: string, email: string, password: string) {
  const url = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(url, {
    email: email,
    password: password,
    returnSecureToken: true,
  });
  console.log(response.data)
}

export async function createUser(email: string, password: string) {
  await authenticate('signUp',email,password)
}

export async function login(email: string, password: string){
    await authenticate('signInWithPassword',email,password)
}