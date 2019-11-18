import React from 'react';
import blogPosts from './blogPosts.json';
import PropTypes from "prop-types"

const Author = ({ username, name }) => (
  <div className="author" >
    <div>username: {username}</div>
    <div>name: {name}</div>
  </div>
);

const Comment = ({ author, comment }) => (
  <li className="comment" >
    <div><Author {...author} /></div>
    <p>{comment}</p>
  </li>
);

const Comments = ({ comments }) => (
  <ul>
    {comments.map(i => (<Comment {...i} key={i.id} />))}
  </ul>
);


const BlogPosts = ({ posts }) => {
  return (
    <React.Fragment>
      {posts.map(({ id, author, body, comments }) => (
        <section key={id} >
          <Author {...author} />
          <p>{body}</p>
          <Comments comments={comments} />
        </section>
      ))}
    </React.Fragment>
  );
};

const Task = () => {
  return (
    <div>
      <BlogPosts posts={blogPosts} />
    </div>
  );
};

export default Task;

Author.propTypes = {
  username: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

Comment.propTypes = {
  comment: PropTypes.string.isRequired,
  author: PropTypes.exact({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })
}

Comments.propTypes = {
  i: PropTypes.arrayOf({
    comment: PropTypes.string.isRequired,
    author: PropTypes.exact({
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  })
}

BlogPosts.propTypes = {
  author: PropTypes.arrayOf({
    username: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }),
  comments: PropTypes.arrayOf({
    comment: PropTypes.string.isRequired,
    author: PropTypes.exact({
      username: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  })
}