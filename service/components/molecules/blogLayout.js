import { useEffect, useState } from 'react';
import { Button } from '../atoms/button';

export const BlogLayout = ({ url, setLimit, limit }) => {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    await fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((res) => {
        replaceSize(res);
        convertTimestamp(res);
        setPosts(res);
      });
  };

  const replaceSize = (array = []) => {
    if (array) {
      array.map((x) => {
        x.picture = x.picture.replace('max', 'fit');
        x.picture = x.picture.replace('${size}', `${551}/${309}`);
      });
    }
  };

  const convertTimestamp = (array = []) => {
    if (array) {
      const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ];

      array.map((x) => {
        if (x.publishAt) {
          let date = new Date(x.publishAt);
          x.publishAt =
            monthNames[date.getMonth()] +
            ' ' +
            date.getDay() +
            ', ' +
            date.getFullYear();
        }
      });
    }
  };

  useEffect(() => {
    loadPosts();
  }, [url]);

  return (
    <section id="post-blog" className="section-posts padding-section-aux">
      <div className="container-sm">
        <ul>
          {posts.map((post, i) => (
            <li key={i} className={i === 0 ? 'first-element' : ''}>
              <a href={post.url} target="_blank">
                <img src={post.picture} />
                <div className="content-first-element">
                  <h1>{post.title}</h1>
                  <h2>{post.description}</h2>
                  <div className="avatar">
                    <img src={post.avatar} />
                    <div className="author-and-date">
                      <h3 className="author-green">{post.author}</h3>
                      <br></br>
                      <h3 className="date">{post.publishAt}</h3>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
        {posts.length === limit ? (
          <center>
            <Button
              content="Add more posts"
              onClick={() => setLimit(limit + 6)}
              type="button"
              className="button-add-more"
            />
          </center>
        ) : null}
      </div>
    </section>
  );
};
