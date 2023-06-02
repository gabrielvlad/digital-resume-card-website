import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import { graphql } from 'gatsby';
import './blog.css';

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`;

const Blog = props => {
  const { frontmatter, html } = props.data.markdownRemark;

  return (
    <Layout page="blog">
      <div className="uk-flex uk-flex-middle uk-flex-column uk-flex-center">
        <div className="paper uk-flex uk-flex-middle uk-flex-column ">
          <h1 style={{ marginTop: '3rem' }}>{frontmatter.title}</h1>
          <p>{frontmatter.date}</p>
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{ maxWidth: '80%', display: 'block' }}
          ></div>
          <Link to="/blog" className="back-button">
            Go Back
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
