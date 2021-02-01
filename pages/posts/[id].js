import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

const Post = ({ postData }) => (
  <Layout>
    {postData.title}
    <br />
    {postData.id}
    <br />
    {postData.date}
    <br />
    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
  </Layout>
);

export const getStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
};

export default Post;
