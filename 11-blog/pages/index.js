import Hero from '../components/home-page/hero';
import FeaturedPosts from '../components/home-page/featured-posts';

 export const DUMMY_POSTS = [
    {
        slug: 'getting-started',
        title: 'Getting Started',
        image: 'getting-started.png',
        excerpt: 'Nothing much to do but get started!',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started2',
        title: 'Getting Started',
        image: 'getting-started.png',
        excerpt: 'Nothing much to do but get started!',
        date: '2022-02-10',
    },
    {
        slug: 'getting-started3',
        title: 'Getting Started',
        image: 'getting-started.png',
        excerpt: 'Nothing much to do but get started!',
        date: '2022-02-10',
    },
];

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedPosts posts={DUMMY_POSTS} />
        </>
    );
};

export default HomePage;