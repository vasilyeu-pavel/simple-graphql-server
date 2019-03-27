import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const getUserTime = graphql(
    gql`
    query GetUserTime($username: String!) {
        getTime(username: $username) {
            time
            username
        }
    }
  `,
    {
        options: ({ username }) => ({
            variables: {
                username,
            },
            fetchPolicy: 'cache-and-network',
        }),
        props: ({ data: { getTime, loading } }) => {
            if (getTime) {
                const { time, username } = getTime;
                return { loading, username, time };
            }
            return { loading }
        },
    },
);

export const setUserTime = graphql(
    gql`
    mutation SetUserTime($username: String!, $time: Int!) {
        setTime(username: $username, time: $time) {
            time
            username
        }
    }
  `,
{ name: 'setUserTime' }
);
