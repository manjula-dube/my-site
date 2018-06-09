import React from "react";
import styled from "react-emotion";
import YoutubeIcon from "./Icons/YoutubeIcon";

const TalkContainer = styled("div")``;

const TalkVideoLink = styled("a")`
  box-shadow: none;
  opacity: 0.6;
  color: #5e35b1;
  @media only screen and (max-width: 768px) {
   margin:12px
  }

  :hover,
  :focus {
    opacity: 1;
  }

  span {
    display: none;
  }
`;

const TalkVideoIcon = styled(YoutubeIcon)`
  width: 25px;
  height: 25px;
  display: inline-block;
  margin-left: 10px;
  vertical-align: middle;
`;

type TalkProps = {
  talk: {
    title: string
  }
};

export default class Talk extends React.Component<TalkProps> {
  render() {
    const { title, date, place, video, url, language } = this.props.talk;
    return (
      <TalkContainer>
        <div>
          <a style={{ color: "#37474f"}} target="_blank" href={video} rel="noopener noreferrer">
            {title} / <small>{language}</small>
          </a>
          {video && (
            <a
              href={video}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TalkVideoIcon />
            </a>
          )}
        </div>
        <small>
         {place}
        </small>
      </TalkContainer>
    );
  }
}
