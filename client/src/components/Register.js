import React from "react";
import { register } from "./UserFunction";
import Profile from "./Profile";
// import "./App.css";
import MyEditor from "./MyEditor ";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {},
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(
      this
    );
  }

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    if (this.validateForm()) {
      let fields = {};
      fields["first_name"] = "";
      fields["last_name"] = "";
      fields["phone_No"] = "";
      fields["email"] = "";
      fields["password"] = "";
      fields["website"] = "";
      fields["textArea"] = "";
      this.setState({ fields: fields });
      alert("Form submitted");
    }
  }

  validateForm() {
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;

    if (!fields["first_name"]) {
      formIsValid = false;
      errors["first_name"] = "*Please enter your first name.";
    }

    if (typeof fields["first_name"] !== "undefined") {
      if (!fields["first_name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["first_name"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["last_name"]) {
      formIsValid = false;
      errors["last_name"] = "*Please enter your last name.";
    }

    if (typeof fields["last_name"] !== "undefined") {
      if (!fields["last_name"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["last_name"] = "*Please enter alphabet characters only.";
      }
    }
    if (!fields["phone_No"]) {
      formIsValid = false;
      errors["phone_No"] = "*Please enter your mobile no.";
    }

    if (typeof fields["phone_No"] !== "undefined") {
      if (!fields["phone_No"].match(/^[0-9]{10}$/)) {
        formIsValid = false;
        errors["phone_No"] = "*Please enter valid mobile no.";
      }
    }

    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "*Please enter your email-ID.";
    }

    if (typeof fields["email"] !== "undefined") {
      //regular expression for email validation
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      if (!pattern.test(fields["email"])) {
        formIsValid = false;
        errors["email"] = "*Please enter valid email-ID.";
      }
    }

    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (
        !fields["password"].match(
          /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/
        )
      ) {
        formIsValid = false;
        errors["password"] = "*Please enter secure and strong password.";
      }
    }

    if (!fields["website"]) {
      formIsValid = false;
      errors["website"] = "*Please enter your website.";
    }

    if (typeof fields["website"] !== "undefined") {
      if (
        !fields["website"].match(
          /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
        )
      ) {
        formIsValid = false;
        errors["website"] = "*Please enter secure and strong website.";
      }
    }
    if (!fields["textArea"]) {
      formIsValid = false;
      errors["textArea"] = "*Please enter your Thoughts.";
    }

    if (typeof fields["textArea"] !== "undefined") {
      if (!fields["textArea"].match(/^[a-zA-Z ]*$/)) {
        formIsValid = false;
        errors["textArea"] = "*Please enter alphabet characters only.";
      }
    }
    this.setState({
      errors: errors
    });
    return formIsValid;
  }

  render() {
    return (
      <div id="main-registration-container">
        <div id="register">
          <h3>Registration page</h3>
          <form
            method="post"
            name="userRegistrationForm"
            onSubmit={this.submituserRegistrationForm}
          >
            <label>FirstName</label>
            <input
              type="text"
              name="firstname"
              value={this.state.fields.first_name}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.first_name}</div>
            <label>LastName</label>
            <input
              type="text"
              name="lastname"
              value={this.state.fields.last_name}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.last_name}</div>
            <label>Mobile No:</label>
            <input
              type="number"
              name="phone_No"
              value={this.state.fields.phone_No}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.phone_No}</div>
            <label>Email ID:</label>
            <input
              type="email"
              name="emailid"
              value={this.state.fields.email}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.email}</div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.password}</div>
            <label>Website:</label>
            <input
              type="website"
              name="website"
              value={this.state.fields.website}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.website}</div>
            {/* <label>TextArea</label>
            <input
              type="text"
              name="textarea"
              value={this.state.fields.textArea}
              onChange={this.handleChange}
            />
            <div className="errorMsg">{this.state.errors.textArea}</div> */}
            <MyEditor />

            <input type="submit" className="button" value="Register" />
          </form>
          <Profile fields={this.state.fields} />
        </div>
      </div>
    );
  }
}
export default Register;
