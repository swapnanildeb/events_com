import Image from "next/image";
import styles from "./page.module.css";
import { LoginForm } from "@/components/login-form";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="sr-only">Login</h1>
      <LoginForm />
    </main>
  );
}
