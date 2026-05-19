import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(email, password);

    localStorage.setItem("authUser", JSON.stringify({ email, password }));
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <h1>SIGN UP</h1>
      <form className="flex flex-col p-6">
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSignup}>Signup</button>
      </form>
    </div>
  );
};

export default Signup;
