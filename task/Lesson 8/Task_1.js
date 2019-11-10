import React from 'react';

const friends = [
  {id: 893, name: 'Mikenzi'},
  {id: 871, name: 'Cash'},
  {id: 982, name: 'Steven'},
  {id: 161, name: 'Kimmy'},
  {id: 117, name: 'Doug'}
];

const List = (props) => {
  const friends=props.friends;
  const List = friends.map((friends) => 
  <li>
  {friends.name}
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
