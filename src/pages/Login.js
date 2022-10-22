import api  from '../api/api'
import { v4 as uuid } from 'uuid';
import { signal } from "@preact/signals";
import { route } from 'preact-router';
import { Link } from 'preact-router/match';

const email = signal("")
const password = signal("")

const setEmail = (e) => {
    email.value = e.target.value
}

const setPassword = (e) => {
    password.value = e.target.value
}

export default function Login() {

    const login =async (e) => {
        e.preventDefault()
        await api.createSession(email.value, password.value);
        const user = await api.getAccount();
        route('/', true)
    }

    return (
        <div class='cont'>
            <div class="login">
                <div class='login-form'>Login</div>
                <div class='fields'>
                    <p>Email</p>
                    <input 
                        type='email' 
                        placeholder='Enter your email' required 
                        onInput={setEmail}
                    />
                </div>
                <div class='fields'>
                    <p>Password</p>
                    <input 
                        placeholder='Enter your password' 
                        required 
                        type='password'
                        onInput={setPassword}
                    />
                </div>
                <button class='signup-btn' onClick={login}>Login</button>
                <Link class='links' href='/signup'><p class='have-acc'>Create an Account?</p></Link>
            </div>
        </div>
    )
}