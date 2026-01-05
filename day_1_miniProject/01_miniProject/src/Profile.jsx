function ProfileCard({ name, age, role }) {
  return (
    <div className="profile">
      <h2>Profile</h2>
      <ul className="list">
        <li>
          <span>Name : </span>
          <span>{name}</span>
        </li>
        <li>
          <span>Age : </span>
          <span>{age}</span>
        </li>
        <li>
          <span>Role : </span>
          <span>{role}</span>
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;