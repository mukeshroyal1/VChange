
import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("volunteer"); // Default role: volunteer
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password, role); // Pass role directly
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email:</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />

      <label>Password:</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      <div>
        <button
          type="button"
          onClick={() => setRole("volunteer")}
          style={{
            backgroundColor: role === "volunteer" ? "green" : "gray",
            color: "white",
            margin: "5px",
          }}
        >
          Volunteer
        </button>
        <button
          type="button"
          onClick={() => setRole("organizer")}
          style={{
            backgroundColor: role === "organizer" ? "green" : "gray",
            color: "white",
            margin: "5px",
          }}
        >
          Organizer
        </button>
      </div>

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
