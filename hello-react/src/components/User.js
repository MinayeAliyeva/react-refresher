import PropTypes from "prop-types";
function User({ name, sname, friends }) {
  return (
    <>
    <h1>{name}</h1>
      {friends?.map((friend, index) => (
        <div key={index}>
          {index}
          {friend}
        </div>
      ))}
    </>
  );
}
//typlamak
User.propTypes = {
    name: PropTypes.string,
    sname:PropTypes.string,
    friends:PropTypes.array
  };
export default User;
