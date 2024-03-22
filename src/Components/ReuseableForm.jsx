const ReuseableForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input {...emailState} type="email" name="email" id="" />
        <br />
        <input type="submit" value="Submit" />{" "}
      </form>
    </div>
  );
};

export default ReuseableForm;
