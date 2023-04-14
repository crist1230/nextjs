import PostContent from '../../components/posts/post-detail/post-content';
import { getPostData, getPostsFiles } from '../../lib/posts-util';

const PostDetailPage = ({ post }) => {
    return (
        <PostContent post={post} />
    );
};

export function getStaticProps(context) {
    const { params } = context;

    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
        },
        revalidate: 600,
    };
}

export function getStaticPaths() {
    const postFileNames = getPostsFiles();

    const slugs = postFileNames.map(file => file.replace(/\.md$/, ''));

    return {
        paths: slugs.map(slug => ({ params: { slug } })),
        fallback: 'blocking',
    };
}

export default PostDetailPage;