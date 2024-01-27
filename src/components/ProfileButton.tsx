import React from 'react';

interface ProfileButtonProps {
    avatarUrl: string;
}

const ProfileButton: React.FC<ProfileButtonProps> = ({ avatarUrl }) => {
  return (
    <button className="profile-button">
      <img src={avatarUrl} alt="Profile Avatar" className="avatar-image" />
    </button>
  );
};

export default ProfileButton;
