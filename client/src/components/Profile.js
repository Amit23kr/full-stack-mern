// import React, { Component } from "react";
// import jwt_decode from "jwt-decode";

// class Profile extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       first_name: "",
//       last_name: "",
//       phone_No: "",
//       email: "",
//       password: "",
//       website: "",
//       textArea: ""
//     };
//   }
//   componentDidMount() {
//     const token = localStorage.usertoken;
//     const decoded = jwt_decode(token);
//     this.setState({
//       first_name: decoded.first_name,
//       last_name: decoded.last_name,
//       phone_No: decoded.phone_No,
//       email: decoded.email,
//       password: decoded.password,
//       website: decoded.website,
//       textArea: decoded.textArea
//     });
//   }
//   render() {
//     return (
//       <div className="container">
//         <div className="jumbotron mt-5">
//           <div className="col-sm-8 mx-auto">
//             <h1 className="text-center">Profile</h1>
//           </div>
//           <table className="table col-md-6 mx-auto">
//             <tbody>
//               <tr>
//                 <td>First Name</td>
//                 <td>{this.state.first_name}</td>
//               </tr>
//               <tr>
//                 <td>Last Name</td>
//                 <td>{this.state.last_name}</td>
//               </tr>
//               <tr>
//                 <td>Phone No</td>
//                 <td>{this.state.phone_No}</td>
//               </tr>
//               <tr>
//                 <td>Email</td>
//                 <td>{this.state.email}</td>
//               </tr>
//               <tr>
//                 <td>password</td>
//                 <td>{this.state.password}</td>
//               </tr>
//               <tr>
//                 <td>Website</td>
//                 <td>{this.state.website}</td>
//               </tr>
//               <tr>
//                 <td>TextArea</td>
//                 <td>{this.state.textArea}</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     );
//   }
// }

// export default Profile;

import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.first_name}</li>
          <li>{this.props.last_name}</li>
          <li>{this.props.phone_No}</li>
          <li>{this.props.email}</li>
          <li>{this.props.website}</li>
          <li>{this.props.textArea}</li>
        </ul>
      </div>
    );
  }
}

export default Profile;
