import Link from 'next/link';
import Image from 'next/image';
import { dateFormatter } from '../helpers';
import styles from '../styles/Post.module.css';

const Post = ({ post }) => {
  const { id } = post;
  const { title, description, content, updatedAt, image } = post.attributes;
  const imageUrl = image.data.attributes.url;

  return (
    <article>
      <Image
        src={imageUrl}
        layout="responsive"
        width={800}
        height={600}
        alt={`post image ${title}`}
      />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.date}>{dateFormatter(updatedAt)}</p>
        <p className={styles.description}>{description}</p>
        <Link href={`/blog/${id}`}>
          <a className={styles.link} href="">
            Read post
          </a>
        </Link>
      </div>
    </article>
  );
};

export default Post;
