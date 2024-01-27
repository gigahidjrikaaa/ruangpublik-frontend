import React from "react";

interface UserProfile {
    name: string;
    age: number;
    email: string;
    // Add more user data properties here
}

const Profile: React.FC<UserProfile> = ({ name, age, email }) => {
  return (
    <div>
      <h1>Profile</h1>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      {/* Add more user data here */}
    </div>
  );
};

export default Profile;
