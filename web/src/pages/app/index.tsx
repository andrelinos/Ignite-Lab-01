import { gql, useQuery } from '@apollo/client';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
// import { useGetProductsQuery, useMeQuery } from "../../graphql/generated/graphql";
// import { getServerPageGetProducts, ssrGetProducts } from "../../graphql/generated/page";
import { withApollo } from '../../lib/withApollo';

const PRODUCTS_QUERY = gql`
    query GetProducts {
        products {
            id
            title
        }
    }
`;

export function Home() {
    const { user } = useUser();
    const { data, loading, error } = useQuery(PRODUCTS_QUERY);

    console.log(data);

    return (
        <div>
            <h1>Olá mundo!</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    );
}

export const getServerSideProps = withPageAuthRequired({
    getServerSideProps: async ({ req, res }) => {
        return {
            props: {}
        };
    }
});

export default withApollo(Home);
