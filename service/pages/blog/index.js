import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Layout from '../../components/organisms/layout';
import { loadNamespaces } from '../_app';

export default function Index() {
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    await fetch(
      'https://medium-widget-api.pixelpoint.io/api/v1/articles?fields[0]=author&fields[1]=description&fields[2]=publishAt&fields[3]=avatar&resource=https%3A%2F%2Fmedium.com%2Fhoprnet&limit&picture=big',
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        replaceSize(res);
        convertTimestamp(res);
        setPosts(res);
      });
  };

  const replaceSize = (array = []) => {
    if (array) {
      array.map((x, i) => {
        x.picture = x.picture.replace('max', 'fit');
        x.picture = x.picture.replace('${size}', `${551}/${309}`);
        console.log('hola', x.picture);
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
  }, []);

  return (
    <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
      <Layout>
        <section className="section-blog">
          <div className="tabs">
            <button className="active">
              <p>HOPR BLOG</p>
            </button>
            <button>
              <a href="https://medium.com/hoprhunt">
                <p>HOPR HUNT</p>
              </a>
            </button>
          </div>
        </section>
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
          </div>
        </section>
      </Layout>
    </motion.div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      _ns: await loadNamespaces(['common', 'menu', 'blog'], locale),
    },
  };
}
