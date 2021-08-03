import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <header>
        <h1>We now have Auth with our App!</h1>
      </header>
      <AmplifySignOut />
    </div>
  );
}

// use the withAuthenticator component to wrap App
// Alls users to signup, sign in, reset and configm sign for multifactor authentication(MFA)
// the AmplifySignOut component will render a Sign Out button :)
export default withAuthenticator(App);
