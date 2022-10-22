import api from "../api/api";
import { v4 as uuid } from "uuid";
import { signal } from "@preact/signals";
import { route } from "preact-router";
import { Link } from "preact-router/match";

const email = signal("");
const password = signal("");

const setEmail = (e) => {
  email.value = e.target.value;
};

const setPassword = (e) => {
  password.value = e.target.value;
};

export default function Login() {

  const login = async (e) => {
    e.preventDefault();
    await api.createSession(email.value, password.value);
    const user = await api.getAccount();
    route("/", true);
  };

  return (
    <div>
      <div class="circle" />
      <form class="form" onSubmit={login}>
        <h2 class="form__title">Login</h2>
        <div class="form__container">
          <div class="form__group">
            <input
              type="email"
              class="form__input"
              placeholder="Enter your email"
              required
              onInput={setEmail}
            />
          </div>
          <div class="form__group">
            <input
              class="form__input"
              placeholder="Enter your password"
              required
              type="password"
              onInput={setPassword}
            />
          </div>
          <input type="submit" class="form__submit" value="LOG IN" />
          <Link class="links" href="/signup">
            <p class="have-acc">Create an Account?</p>
          </Link>
        </div>
      </form>
    </div>
  );
}
