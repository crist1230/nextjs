import fs from 'fs/promises';
import path from 'path';

const ProductDetailPage = ({ loadedProduct }) => {
    if (!loadedProduct) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </>
    );
};

const getData = async () => {
    const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    return data;
};

export async function getStaticProps(context) {
    const { params } = context;

    const productId = params.pid;     

    const data = await getData();

    const product = data.products.find(product => product.id === productId);

    return {
        props: {
            loadedProduct: product,
        },
    };
}

export async function getStaticPaths() {
    const data = await getData();

    const productIds = data.products.map(product => product.id);

    const pathsWithParams = productIds.map(id => ({ params: { pid: id } }));

    return {
        paths: pathsWithParams,
        fallback: true,
    };
}

export default ProductDetailPage;