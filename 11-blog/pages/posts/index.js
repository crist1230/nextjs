import { DUMMY_POSTS } from '..';

import AllPosts from '../../components/posts/all-posts';

const Posts = () => {
    return (
        <AllPosts posts={DUMMY_POSTS} />
    );
};

export default Posts;