import ReactMarkdown from 'react-markdown';

import PostHeader from './post-header';

import classes from './post-content.module.css';

const PostContent = (props) => {
    const imagePath = `/images/posts/${props.post.slug}/${props.post.image}`;

    return (
        <article className={classes.content}>
            <PostHeader title={props.post.title} image={imagePath} />
            <ReactMarkdown>{props.post.excerpt}</ReactMarkdown>
        </article>
    );
};

export default PostContent;