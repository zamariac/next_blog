import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gpl`
        query MyQuery {
            postsConnection {
                edges {
                  node {
                    author {
                      bio
                      id
                      name
                      photo {
                        url
                      }
                    }
                    createdAt
                    slug
                    title
                    excerpt
                    featuredImage {
                      url
                    }
                    categories {
                      name
                      slug
                    }
                  }
                }
              }
        }
    `;

    const results = await request(graphqlAPI, query);

    return results.postsConnection.edges;
}