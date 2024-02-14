"use client";

import { useFormState } from "react-dom";
import { useFormStatus } from "react-dom";
import { checkLogin } from "@/app/server-actions/actions";

const initialState = {
  message: "",
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button type="submit" aria-disabled={pending}>
      Login
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState(checkLogin, initialState);

  return (
    <form action={formAction}>
      <label htmlFor="username">Username</label>
      <input type="text" id="username" name="username" required />
      <label htmlFor="password">Password</label>
      <input type="text" id="password" name="password" required />
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {state?.message}
      </p>
    </form>
  );
}
