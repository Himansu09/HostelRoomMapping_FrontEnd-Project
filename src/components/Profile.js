import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";


  const Profile = ({component: roles}) => {
    const { user: currentUser } = useSelector((state) => state.auth);
  
    if (!currentUser) {
      return <Redirect to="/login" />;
     
    }
  
    if(roles  === "ROLE_ADMIN" && "ROLE_USER"){
      return <Redirect to="/home" />;
    }else{
      return <Redirect to="/" />;
    }

  return (
    <div className="container">
       <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
      <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p>
      <p>
        <strong>Id:</strong> {currentUser.id}
      </p>
      <p>
        <strong>Email:</strong> {currentUser.email}
      </p>
      <strong>Authorities:</strong>
      <ul>
        {currentUser.roles &&
          currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
      </ul> 
      <p>Wellcome!</p>

      <h1>Hello <strong>{currentUser.username}</strong> </h1>

    </div>
  );
    }

export default Profile ;
