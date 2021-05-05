import PageTemplate from '../templates/page/index';
import client from '../graphql/client';
import { GET_PAGES } from '../graphql/queries';

export default function About() {
  return <PageTemplate />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });
  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}
