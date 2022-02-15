import { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useMobile';
import parse, { domToReact } from 'html-react-parser';

export const BlogLayout = ({ type, setLoading }) => {
  const [posts, setPosts] = useState([]);
  const { width } = useWindowSize();

  const options = {
    replace: domNode => {
      if (!domNode.attribs) {
        return;
      }

      if (domNode.attribs.class) {
        domNode.attribs['className'] = domNode.attribs.class;
        delete domNode.attribs.class;
      }

      if (domNode.attribs.classname) {
        domNode.attribs['className'] = domNode.attribs.classname;
        delete domNode.attribs.classname;
      }

      return domToReact(domNode);
    },
  };

  const getFirstImage = content => {
    const htmlContent = parse(content, options);

    for (let single of htmlContent) {
      if (single.type === 'figure') {
        return single;
      }
    }

    return false;
  };

  const getResume = content => {
    const htmlContent = parse(content, options);

    for (let single of htmlContent) {
      if (single.type === 'p') {
        return single;
      }
    }

    return false;
  };

  const loadPosts = async () => {
    setLoading(true);
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
        if (res.data) {
          for (let single of res.data) {
            single.resume = getResume(single['content:encoded']);
            single.image = getFirstImage(single['content:encoded']);
          }
        }

        setPosts(res.data);
        setLoading(false);
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
              { post.image && post.image }
              <div className="content-element">
                <a href={post.link} target="_blank">
                  <h1>{post.title}</h1>
                </a>
                <div className="description">{post.resume}</div>
                <div className="avatar">
                  <h3 className="author-green">{post['dc:creator']}</h3>
                  <h3 className="date">{post.pubDate}</h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
