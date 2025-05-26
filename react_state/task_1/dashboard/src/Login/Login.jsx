import React from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      email: "",
      password: "",
      enableSubmit: false,
    };
  }

  handleLoginSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    this.setState({ isLoggedIn: true });
  };

  handleChangeEmail = (e) => {
    const email = e.target.value;
    const { password } = this.state;

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword = password.length >= 8;
    this.setState({
       email,
       enableSubmit: validEmail && validPassword,
    });
  };

  handleChangePassword = (e) => {
    const password = e.target.value;
    const { email } = this.state;

    const validEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const validPassword = password.length >= 8;
    this.setState({
       password,
       enableSubmit: validEmail && validPassword,
    });
  };

  render() {
    return (
      <div className={css(styles.body)}>
        <p>Login to access the full dashboard</p>
        <form onSubmit={this.handleLoginSubmit}>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              className={css(styles.input)}
              value={this.state.email}
              onChange={this.handleChangeEmail}
            />
          </div>
          <div className={css(styles.inputGroup)}>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              className={css(styles.input)}
              value={this.state.password}
              onChange={this.handleChangePassword}
            />
          </div>
          <div className={css(styles.buttonWrapper)}>
            <input 
            type="submit" 
            value="OK" 
            className={css(styles.button)}
            disabled={!this.state.enableSubmit} />
          </div>
        </form>
      </div>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    padding: "30px",
    "@media (max-width: 900px)": {
      padding: "20px",
    },
  },
  inputGroup: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "1em",
    "@media (max-width: 900px)": {
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
  input: {
    marginLeft: "10px",
    "@media (max-width: 900px)": {
      marginLeft: "0",
      marginTop: "5px",
      width: "100%",
    },
  },
  buttonWrapper: {
    "@media (max-width: 900px)": {
      display: "flex",
      justifyContent: "flex-start",
    },
  },
  button: {
    marginLeft: "10px",
    "@media (max-width: 900px)": {
      marginLeft: "0",
    },
  },
});

Login.propTypes = {
  isLoggedIn: PropTypes.bool,
};

Login.defaultProps = {
  isLoggedIn: false,
};

export default Login;
