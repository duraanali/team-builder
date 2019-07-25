import React, { useState } from 'react'
// import PropTypes from 'prop-types';



function Form() {
  const [user, setUser] = useState({ username: "", role: "", password: "", email: "" });

  function handleChange(event) {

    const updatedUser = { ...user, [event.target.name]: event.target.value };
    console.log(
      "handleChange",
      event.target.name,
      event.target.value,
      updatedUser
    );
    setUser(updatedUser);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("user state", user);
  }

  const formStyle = {

    display: 'flex',
    flexDirection: 'column',
    marginLeft: '800px',
    marginRight: '800px',
    marginTop: '50px',
    marginBottom: '50px',
  }

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <input
        type="text"
        name="username"
        style={{ flex: '10', padding: '5px' }}
        placeholder="username"
        value={user.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="role"
        style={{ flex: '10', padding: '5px' }}
        placeholder="role"
        value={user.role}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        style={{ flex: '10', padding: '5px' }}
        placeholder="email"
        value={user.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        style={{ flex: '10', padding: '5px' }}
        placeholder="password"
        value={user.password}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style={{ flex: '1' }}
      />
    </form>
  )

}

export default Form;
