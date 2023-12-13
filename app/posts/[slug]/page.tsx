import Image from "next/image";

import styles from "./SinglePage.module.css";
import Menu from "@/app/components/menu/Menu";
import { getSinglePost } from "@/lib/data";

interface SinglePageProps {
  params: {
    slug: string;
  };
}

const SinglePage = async ({ params: { slug } }: SinglePageProps) => {
  const post = await getSinglePost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title} data-testId="postsTitle">{post?.title}</h1>
          <div className={styles.user}>
            {post?.user?.image && (
              <div className={styles.userImageContainer}>
                <Image src={"https://lh3.googleusercontent.com/a/ACg8ocJZJ89wGhnPGsRaOGKAL2JOBik9nX81bczo3PtqFkR4iy0=s96-c"} alt="" fill className={styles.avatar} />
              </div>
            )}
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{post?.user?.name}</span>
              <span className={styles.date}>
                {post?.createdAt && new Date(post.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
        {post?.img && (
          <div className={styles.imageContainer}>
            <Image src={post.img} alt="" fill className={styles.image} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post?.desc ?? '' }}
          />
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
