import React, { useState, useEffect } from "react";
import {
  SocialMediaSection,
  SocialDiv,
  Icon,
  SocialDesc,
  Span,
  SpanInfo,
} from "./style.js";
import axios from "axios";

const SocialMedia = () => {
  const [socialData, setSocialData] = useState();

  const getSocialData = async () => {
    try {
      axios
        .get("js/data.json")
        .then((response) => setSocialData(response.data.social));
      console.log("socialData", socialData);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSocialData();
  }, []);

  const socialList = socialData.social.map((socialItem) => {
    return (
      <SocialDiv item={socialItem.id} key={socialItem.id}>
        <Icon className={socialItem.Icon}></Icon>
        <SocialDesc>
          <Span>{socialItem.title}</Span>
          <SpanInfo> {socialItem.body}</SpanInfo>
        </SocialDesc>
      </SocialDiv>
    );
  });

  return <SocialMediaSection>{socialList}</SocialMediaSection>;
};

export default SocialMedia;
