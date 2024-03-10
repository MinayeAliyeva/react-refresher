import PropTypes from "prop-types";
function User({ name, sname, friends, age, adress, isLoggedin }) {
  if (!isLoggedin) {
    return <h1>Giris yap</h1>;
  }
  return (
    <>
      <h1>{name}</h1>
      <p>
        {adress?.title}, {adress?.zip}
      </p>
      <br />
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
  name: PropTypes.string.isRequired,
  sname: PropTypes.string,
  friends: PropTypes.array,
  age: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  adress: PropTypes.shape({
    title: PropTypes.string,
    zip: PropTypes.number,
  }),
};
User.defaultProps = {
  isLoggedin: false,
};
export default User;
