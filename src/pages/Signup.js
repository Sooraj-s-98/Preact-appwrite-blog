import api from '../api/api'
import { v4 as uuid } from 'uuid';
import { signal } from "@preact/signals";
import { route } from 'preact-router';
import { Link } from 'preact-router/match';

const name = signal("")
const email = signal("")
const password = signal("")

const setName = (e) => {
    name.value = e.target.value
}

const setEmail = (e) => {
    email.value = e.target.value
}

const setPassword = (e) => {
    password.value = e.target.value
}

export default function Signup() {

    const signUp =async () => {
        console.log("signUp")
        const user = await api.createAccount(email.value, password.value, name.value);
        await api.createSession(email.value, password.value);
    }

    return (
        <div class='cont'>
            <div class="signup">
                <div class='signup-form'>SignUp</div>
                <div class='fields'>
                    <p>User Name</p>
                    <input 
                        required 
                        type='text' 
                        placeholder='Enter your name'
                        onInput={setName}
                    />
                </div>
                <div class='fields'>
                    <p>Email</p>
                    <input 
                        required  
                        type='email'
                        placeholder='Enter your email'
                        onInput={setEmail}
                    />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input 
                        required 
                        placeholder='Enter your password'
                        type='password'
                        onInput={setPassword}
                    />
                </div>
                <button class='signup-btn' onClick={()=>signUp()}>SignUp</button>
                <Link href='/' class='links'>Have an Account!</Link>
            </div>
        </div>
    )
}