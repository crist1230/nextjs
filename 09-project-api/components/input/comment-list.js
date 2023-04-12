import classes from './comment-list.module.css';

function CommentList({ comments }) {
  return (
    <ul className={classes.comments}>
      {comments.length ? 
        comments.map(comment => {
          return (
            <li key={comment.id}>
              <p>{comment.comment}</p>
              <div>
                By <address>{comment.name}</address>
              </div>
            </li>
          )
        })
      : null}
    </ul>
  );
}

export default CommentList;
