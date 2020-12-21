import { useAuth } from "../lib/auth";
import styled from "styled-components";

export default function Index() {
  const auth = useAuth();
  return auth.user ? (
    <div>
      <p>Email: {auth.user.email}</p>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  );
}
