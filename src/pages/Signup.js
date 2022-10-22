import api from "../api/api";
import { signal } from "@preact/signals";
import { Link } from "preact-router/match";

const name = signal("");
const email = signal("");
const password = signal("");

const setName = (e) => {
  name.value = e.target.value;
};

const setEmail = (e) => {
  email.value = e.target.value;
};

const setPassword = (e) => {
  password.value = e.target.value;
};

export default function Signup() {
  const signUp = async () => {
    console.log("signUp");
    const user = await api.createAccount(
      email.value,
      password.value,
      name.value
    );
    console.log("user", user);
    await api.createSession(email.value, password.value);
  };

  return (
    <div>
      <div class="circle" />
      <form class="form" onSubmit={Signup}>
        <h2 class="form__title">SignUp</h2>
        <div class="form__container">
          <div class="form__group">
            <input
              required
              class="form__input"
              placeholder="Enter your name"
              onInput={setName}
            />
          </div>
          <div class="form__group">
            <input
              required
              class="form__input"
              placeholder="Enter your email"
              onInput={setEmail}
            />
          </div>
          <div class="form__group">
            <input
              class="form__input"
              required
              placeholder="Enter your password"
              type="password"
              onInput={setPassword}
            />
          </div>
          <input type="submit" class="form__submit" value="SignUp" />
          <Link href="/login" class="links">
            Have an Account!
          </Link>
        </div>
      </form>
    </div>
  );
}
