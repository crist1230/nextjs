import { useRouter } from 'next/router';

const BlogPage = () => {
    const router = useRouter();

    console.log(router)

    return (
        <div>
            <h1>Blog Page</h1>
        </div>
    );
};

export default BlogPage;