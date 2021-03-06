import React from 'react';
import { Link } from 'gatsby';
import { getSrc} from 'gatsby-plugin-image'
import { MoreLink } from './MoreLink'

export default class ProjectThumb extends React.Component {
  render() {
    const p = this.props.data;
    return (
      <div className="tile is-parent is-vertical">
        <div
          className="tile is-child"
          style={{
            height: '10em',
            backgroundImage: `url(${getSrc(p.frontmatter.image.childImageSharp)})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            top: '0',
            backgroundColor: 'black',
            color: 'white',
            display: 'inline-block',
            width: '100%',
            minHeight: '10em',
            maxHeight: '10em'
          }}
        >
          <Link
            aria-hidden="true"
            style={{
              width: '100%',
              height: '100%',
              display: 'block'
            }}
            to={p.fields.slug}
          />
        </div>
        <div className="tile is-child">
          <p>
            <Link
              className="has-text-dark title is-4 has-text-weight-semibold"
              to={p.fields.slug}
            >
              {p.frontmatter.title}
            </Link>
          </p>
          <div className="subtitle is-6">
            {p.frontmatter.creators ? p.frontmatter.creators : ``}{' '}
          </div>
          <br />

          <p>
            {p.frontmatter.subTitle}
          </p>
          <MoreLink page={p} />            
        </div>
      </div>
    );
  }
}
