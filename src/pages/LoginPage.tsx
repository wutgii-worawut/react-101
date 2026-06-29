import React, { useState } from "react";

const LoginPage: React.FC = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const Login = () => {
    console.log("User:", user);
    console.log("Password:", password);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (user === "admin" && password === "admin") {
      alert("Login successful!");
    }
  };

  return (
    <>
      <h1>Login Page</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          Login();
        }}
      >
        <input
          type="text"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default LoginPage;
