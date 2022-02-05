import { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useMobile';

export const BlogLayout = ({ type }) => {
  const [posts, setPosts] = useState([]);
  const { width } = useWindowSize();

  const loadPosts = async () => {
    await fetch('/api/blog', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type }),
    })
      .then(res => res.json())
      .then(res => {
        setPosts(res.data);
      });
  };

  useEffect(() => {
    loadPosts();
  }, [type]);

  return (
    <section id="post-blog" className="section-posts padding-section-aux">
      <div className="container-sm">
        <ul>
          {posts.map((post, i) => (
            <li
              key={i}
              className={
                i === 0 && width >= 767 ? 'first-element' : 'grid-element'
              }
            >
              <a href={post.url} target="_blank">
                <img src={post.imageUrl} />
                <div className="content-first-element">
                  <h1>{post.name}</h1>
                  <h2>{post.description}</h2>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
