import React, { Component } from "react";
import styled from "react-emotion";
import Link from "gatsby-link";
import { TABLET_MEDIA_QUERY } from "typography-breakpoint-constants";

const Footer = styled("footer")`
  justify-content: center;
  align-content: center;

  h5 {
    font-size: 0.9em;
    margin: 0;
    font-family: "Open Sans", "-apple-system", "BlinkMacSystemFont", "Arial",
      sans-serif;
  }

  a {
    font-size: 0.9em;
    line-height: 1.3em;
  }
`;

const NoticeContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 25px;

  ${TABLET_MEDIA_QUERY} {
    justify-content: space-around;
  }
`;

export default class extends Component {
  render() {
    const { config } = this.props;
    const currentYear = new Date().getFullYear();
    return (
      <Footer>
        <NoticeContainer>
          <h5>
            © 2018 {config.userName}
          </h5>
        </NoticeContainer>
      </Footer>
    );
  }
}
