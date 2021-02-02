import Head from "next/head";
import { Date } from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import type { GetStaticProps, GetStaticPaths } from "next";

type PostProps = {
  postData: ReturnType<typeof getPostData> extends Promise<infer T> ? T : never;
};

const Post = ({ postData }: PostProps) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>

    <article>
      <h1 className={utilStyles.headingX1}>{postData.title}</h1>
      <div className={utilStyles.lightText}>
        <Date dateString={postData.date} />
      </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  </Layout>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PostProps,
  { id: string }
> = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

export default Post;
