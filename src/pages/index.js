import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import ProjectThumb from '../components/ProjectThumb';

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;

    return (
      <section className="section">
        <div className="container">
          <div className="content is-size-3">
            <span className="has-text-weight-bold has-text-primary">
              {siteTitle}
            </span>. Works from the{' '}
            <span className="has-background-light">
              &nbsp;
              <Link className="has-text-danger" to="/about">
                interaction design bachelor programme
              </Link>{' '}
            </span>
            at Malmö University.
          </div>
        </div>

        <br />
        <br />
        <main role="main" className="tile is-ancestor">
          {posts.map(({ node: post }) => (
            <div className="tile is-parent" key={post.id}>
              <ProjectThumb data={post} />
            </div>
          ))}
        </main>
      </section>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery2 {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___year] }
      filter: { frontmatter: { templateKey: { eq: "project-post" } } }
    ) {
      edges {
        node {
          ...ProjectThumbFragment
        }
      }
    }
  }
`;
