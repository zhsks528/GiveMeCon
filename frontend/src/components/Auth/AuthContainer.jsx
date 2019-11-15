import React, { useState } from "react";
import AuthPresenter from "./AuthPresenter";

export default function AuthContainer() {
  const [action, setAction] = useState("login");

  const changeAction = () => {
    if (action === "login") {
      setAction("signup");
    } else if (action === "signup") {
      setAction("login");
    }
  };

  return <AuthPresenter action={action} changeAction={changeAction} />;
}
