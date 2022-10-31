"use client";
import { useGlobalContext } from "../GlobalContext";

export default function Home() {
  const { isSignedIn, wallet } = useGlobalContext();
  return (
    <div>
      <div>isSignedIn: {typeof isSignedIn === "undefined" ? "" : String(isSignedIn)}</div>
      <button onClick={wallet.signIn}>Sign In</button>
    </div>
  );
}
