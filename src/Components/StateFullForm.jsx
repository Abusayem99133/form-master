import { useState } from "react";

const StateFullForm = () => {
  const [name, setName] = useState("sayem");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setError("password must be 6 characters");
    } else {
      setError("");
      console.log(name, email, password);
      //   console.log(e.target.name.value);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // console.log(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.name.value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
          id=""
          placeholder="name"
        />{" "}
        <br />
        <input
          onChange={handleEmailChange}
          type="email"
          name="email"
          id=""
          placeholder="email"
        />
        <br />
        <input
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
          placeholder="pass"
          required
        />
        <br />
        <input type="submit" value="submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StateFullForm;
