import React, { Fragment } from "react";
import styled from "react-emotion";
import { FancyH1 } from "../FancyHeader/FancyHeader";

const H2 = styled("h2")`
  margin: 0;
  padding: 0;
`;

const H3 = styled("h3")`
  margin: 0;
  padding: 0;
`;

const Text = styled("p")`
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  line-height: 1.8em;

  strong {
    margin-left: 2px;
  }
`;

type LeadTextProps = {
  className?: string,
  techs: Array<{ label: string, href: string }>
};

export default class LeadText extends React.Component<LeadTextProps> {
  render() {
    const currentYear = new Date().getFullYear();
    const experience = currentYear - 2013;
    return (
      <div className={this.props.className}>
        <FancyH1 style={{ fontSize: 50 }}>Hi, I{"'"}m Manjula</FancyH1>
        <H3 style={{ margin: 15 }}>JavaScript developer, based&nbsp;in&nbsp;Berlin</H3>
        <H3 style={{ margin: 15 }}>
          Works at{" "}
          <a className="animated" href="http://marleyspoon">
            Marley&nbsp;Spoon,
          </a>
          &nbsp;Founder at 
          <a className="animated" href="geekabyte.tech"> 
          &nbsp;Geekabyte
          </a>
        </H3>
        <Text style={{ marginTop: 20 }}>
          {experience} years of professional expertise in web development and
          creating SPAs.
        </Text>
        <Text>
        I am tech speaker who loves teaching and 0SS. Leading &nbsp; 
        <a className="animated" href="https://www.meetup.com/mumbai-women-coders/" >
        Mumbai Women Coders </a> 
        </Text>
        <Text>
          Currently interested in{" "}
          {this.props.techs.map((tech, index) => {
            const isLast = index === this.props.techs.length - 1;
            return (
              <Fragment key={tech.href}>
                {isLast && "and "}
                <a
                  className="animated"
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {tech.label}
                </a>
                {!isLast && ", "}
              </Fragment>
            );
          })}
        </Text>
      </div>
    );
  }
}