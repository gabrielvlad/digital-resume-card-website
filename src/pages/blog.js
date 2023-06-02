/* eslint-disable max-len */
import React from 'react';
import Layout from '../components/Layout/Layout';
import { graphql, useStaticQuery, Link } from 'gatsby';
import Fade from 'react-reveal';
import { postItem, postList } from '../styles/blog.module.scss';
import Hover from '../components/Hover/Hover.jsx';

const BlogPage = () => {
  const posts = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  return (
    <>
      <Layout page="blog">
        <div
          className="uk-flex uk-flex-column uk-flex-center uk-flex-middle"
          style={{ minHeight: '80vh' }}
        >
          <Fade bottom>
            <h1>Blog</h1>
            <ul className={postList}>
              {posts.allMarkdownRemark.edges.map(post => {
                return (
                  <li className={postItem} key={post.node.frontmatter.title}>
                    <Link to={`/blog/${post.node.fields.slug}`}>
                      <h2>{post.node.frontmatter.title}</h2>
                      <p>{post.node.frontmatter.date}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Fade>
        </div>
      </Layout>
    </>
  );
};

export default BlogPage;
