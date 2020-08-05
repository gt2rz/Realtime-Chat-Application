import React from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom"

const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          Welcome!
          <strong> {currentUser.username}</strong>,
        </h3>
      </header>
      <p>To start a chat press
        <Link to={"/join"}> Here</Link>, 
         or in the Chat menu in the navigation bar
      </p>
    </div>
  );
};

export default Profile;
