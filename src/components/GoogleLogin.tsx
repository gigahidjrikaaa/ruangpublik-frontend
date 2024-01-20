// Example usage: <GoogleLoginButton />
import React from "react";
import { GoogleLogin } from "react-google-login";

const GOOGLE_CLIENT_ID = String(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

const GoogleLoginButton: React.FC = () => {
  const handleLoginSuccess = (response: unknown) => {
    // Handle successful login logic here
    console.log("Login successful:", response);
  };

  const handleLoginFailure = (error: unknown) => {
    // Handle login failure logic here
    console.error("Login failed:", error);
  };

  return (
    <GoogleLogin
      clientId={GOOGLE_CLIENT_ID}
      buttonText="Login with Google"
      onSuccess={handleLoginSuccess}
      onFailure={handleLoginFailure}
      cookiePolicy={"single_host_origin"}
      isSignedIn={true}
    />
  );
};

export default GoogleLoginButton;
