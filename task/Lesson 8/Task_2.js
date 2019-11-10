import React from 'react';

const friends = [
  'Mikenzi',
  'Cash',
  'Steven',
  'Kimmy',
  'Doug'
];

const List = (props) => {
  const friends=props.friends;
  const List = friends.map((friends) => 
  <li>
  {friends}
  </li>
  )
  // Render a list using the "friends" being passed in.
  return (
    <ul>
      {List}
    </ul>
  );
};

const Task = () => {
  return (
    <div>
      <List friends={friends} />
    </div>
  );
};

export default Task;
