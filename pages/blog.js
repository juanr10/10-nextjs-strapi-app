import Layout from '../components/Layout';
import Post from '../components/Post';
import styles from '../styles/Blog.module.css';

const Blog = ({ posts }) => {
  return (
    <Layout pageName="Blog">
      <main className="container">
        <h2 className="heading">Blog</h2>

        <div className={styles.blog}>
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const url = 'http://localhost:1337/api/blogs?populate=*';
  const response = await fetch(url);
  const posts = await response.json();

  return {
    props: {
      posts: posts.data,
    },
  };
}

export default Blog;
