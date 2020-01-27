import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import NavBar from "../../components/navbar/NavBar";
class JobTasks extends Component {
    onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
    };
  
    render() {
      const { user } = this.props.auth;
  
      return (
        <div> 
        <NavBar/>
        <div style={{ height: "75vh" }} className="container valign-wrapper">
          <div className="row">
            <div className="landing-copy col s12 center-align">
              <h4>
                <b>Hey there,</b> {user.name.split(" ")[0]}
                <p className="flow-text grey-text text-darken-1">
                  You Are Logged Into<br></br>
                   Process Performance Plus Job Tasks Center {" "}
                  <br></br>
                  <span style={{ fontFamily: "monospace" }}>PPP</span> app 👏
                </p>
              </h4>
              <button
                style={{
                  width: "150px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px",
                  marginTop: "1rem"
                }}
                onClick={this.onLogoutClick}
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
        </div>
      );
    }
  }
  
  JobTasks.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(JobTasks);
  