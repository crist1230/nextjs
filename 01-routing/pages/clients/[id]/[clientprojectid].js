import { useRouter } from 'next/router';

const SpecificClientProject = () => {
    const router = useRouter();

    console.log(router);

    return (
        <div>
            <h1>Specific Client Project Page</h1>
        </div>
    );
};

export default SpecificClientProject;