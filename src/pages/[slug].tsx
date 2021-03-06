import PageTemplate, { PageTemplateProps } from '../templates/page/index';
import client from '../graphql/client';
import { GET_PAGES, GET_PAGES_BY_SLUG } from '../graphql/queries';
import { GetStaticProps } from 'next';

export default function Page({ heading, body }: PageTemplateProps) {
  return <PageTemplate heading={heading} body={body} />;
}

export async function getStaticPaths() {
  const { pages } = await client.request(GET_PAGES, { first: 3 });
  const paths = pages.map(({ slug }) => ({
    params: { slug },
  }));

  return { paths, fallback: true };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request(GET_PAGES_BY_SLUG, {
    slug: `${params?.slug}`,
  });

  if (!page) {
    return { notFound: true };
  }

  return {
    props: {
      heading: page.heading,
      body: page.body.html,
    },
  };
};
