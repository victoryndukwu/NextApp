import Head from "next/head";
import Navbar from "../Components/Navbar";
import SignIn from "./SignIn";
// import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    // <main className="bg-gray-200 h-screen m-0">
    <main className="h-screen bg-gray-200">
      <SignIn />
    </main>
  );
}
