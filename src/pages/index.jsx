import React from "react";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import { css } from "emotion";
import styled from "react-emotion";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";
import LeadText from "../components/LeadText/LeadText";
import LeadContacts from "../components/LeadContacts/LeadContacts";
import Config from "../../config";
import Talk from "../components/Talk";
import allTalks from "../../content/talks.json";
import allPost from "../../content/posts.json";
import Particles from 'react-particles-js';

const Row = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: ${props => props.justifyContent};
  margin-bottom: 20px;

  ${TABLET_MEDIA_QUERY} {
    flex-direction: column;
  }
`;

const TalksList = styled("div")`
  font-size: 0.9em;

  min-width: 50%;
  margin-top: 40px;

  h3 {
    margin-top: 0;
    margin-bottom: 20px;
    font-family: 'Contrail One', sans-serif;

    a {
      margin-left: 10px;
      font-size: 0.6em;
      vertical-align: middle;
      font-family: "Open Sans", "Helvetica Neue", serif;
    }
  }

  ul {
    list-style: none;
    margin: 0;
    @media only screen and (max-width: 768px) {
      margin:12px;
    }
  }

  ul li {
    display: block;
  }

  li:last-child {
    margin: 0;
  }
`;

const classes = {
  leadContacts: css`
    min-width: 250px;

    ${TABLET_MEDIA_QUERY} {
      width: 100%;
    }
  `,
  leadText: css`
    flex-grow: 0;
    margin-right: 60px;

    ${TABLET_MEDIA_QUERY} {
      margin-right: 0;
      margin-bottom: 20px;
    }
  `
};

class Index extends React.Component {
  render() {
    const talks = allTalks.slice(0, 3);
    const posts = allPost.slice(0,4);
    return (
      <div>
      <Particles 
      params={{
        particles: {
          line_linked: {
            shadow: {
              enable: true,
              color: "#E91E63",
              blur: 1,
              particlesNumber: '50',
              linkDist: '80',
              maxSize: 8,
            }
          }
        }
      }}
      style={{
        width: '100%',
        position: 'absolute',
        height: '100%'
      }}
    />
    <Helmet title={Config.siteTitle} />
    <Row justifyContent="space-between" style={{ marginBottom: 0 }}>
      <LeadText
        techs={Config.techInterestedIn}
        className={classes.leadText}
      />
      <LeadContacts
        links={Config.userLinks}
        className={classes.leadContacts}
      />
    </Row>
    <Row justifyContent="flex-start">
      <TalksList>
        <h3 style={{ color: '#263238' }}>
          Articles 
          <a target="_blank" className="animated" href="https://medium.com/@manjuladube">
            see all
          </a>
        </h3>
        <ul>
          {posts.map(post => (
            <li key={post.title}>
              <a style= {{ color : "#37474f"}}target="_blank" href={post.link}>{post.title}</a>
            </li>
          ))}
        </ul>
      </TalksList>
      <TalksList>
        <h3>
          Latest Talks
          <Link className="animated" to="/talks">
            see all
          </Link>
        </h3>
        <ul>
          {talks.map(talk => (
            <li key={talk.title}>
              <Talk talk={talk} />
            </li>
          ))}
        </ul>
      </TalksList>
    </Row>
      </div>
    );
  }
}

export default Index;
