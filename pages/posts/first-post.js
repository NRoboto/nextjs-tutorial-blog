import Link from "next/link";

const firstPost = () => (
  <>
    <h1>First Post!</h1>
    <h2>
      <Link href="/">
        <a>Return to home</a>
      </Link>
    </h2>
  </>
);

export default firstPost;
