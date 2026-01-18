const ProfileInfo = ({ icon, text }) => {
  return (
    <div className="profile_info">
      <img src={icon} alt="icon" />
      <span className="text">{text}</span>
    </div>
  );
};

export default ProfileInfo;
