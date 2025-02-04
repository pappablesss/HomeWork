import React from "react";
import PropsTypes from "prop-types";
function Badge(props) {
  const { authed, style, name, handle, img, addFriend } = props;

  if (authed !== true) {
    return <p>You need to log in.</p>;
  }

  return (
    <div style={style}>
      <img style={{ width: 200, borderRadius: "50%" }} src={img} />
      <h1 style={{ margin: 5 }}>{name}</h1>
      <h3 style={{ margin: 5 }}>@{handle}</h3>
      <button onClick={addFriend}>Add Friend</button>
    </div>
  );
}

const Task = () => {
  return (
    <div>
      <Badge
        name="Small Moreno"
        handle="tylermcginnis"
        img="https://via.placeholder.com/300.png/09f/fff"
        authed={true}
        style={{
          width: 300,
          margin: "0 auto",
          border: "3px solid #000",
          padding: 10,
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        addFriend={() => alert("Added!")}
      />
    </div>
  );
};

export default Task;
Badge.propTypes = {
  name: PropsTypes.string.isRequired,
  handle: PropsTypes.string,
  img: PropsTypes.string,
  authed: PropsTypes.bool,
  style: PropsTypes.shape({
    width: PropsTypes.number,
    margin: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
    border: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
    padding: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
    borderRadius: PropsTypes.oneOfType([PropsTypes.string, PropsTypes.number]),
    display: PropsTypes.oneOf([PropsTypes.string, PropsTypes.number]),
    flexDirection: PropsTypes.oneOf([PropsTypes.string, PropsTypes.number]),
    alignItems: PropsTypes.oneOf([PropsTypes.string, PropsTypes.number])
  }),
  addFriend: PropsTypes.func
};
