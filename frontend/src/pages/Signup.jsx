import { useState } from "react";
import API from "../api";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/signup", {
        name,
        email,
        password
      });

      console.log(res.data);
      
      alert("Signup successful");
    } catch (error) {
      console.log(error.response?.data || error.message);
      alert("Signup failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Signup</h2>

      <form onSubmit={handleSignup}>
        <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
        <br /><br />

        <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
        <br /><br />

        <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <br /><br />

        <button>Signup</button>
      </form>
    </div>
  );
}

export default Signup;