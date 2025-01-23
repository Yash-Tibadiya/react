import { useUserContext } from "./context";

const Profile = () => {
  const user = useUserContext();

  return <div>{user.name}</div>;
};

export default Profile;
