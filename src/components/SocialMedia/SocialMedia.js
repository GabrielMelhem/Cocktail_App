import React, { useState, useEffect } from "react";
import {
  SocialMediaSection,
  Social,
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

        console.log('socialData',socialData)
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getSocialData();
  }, []);

  const socialList = socialData.map((socialItem)=>{
    return (
        <Social>
        <Icon className={socialItem.Icon}></Icon>
        <SocialDesc>
          <Span>{socialItem.title}</Span>
          <SpanInfo> {socialItem.body}</SpanInfo>
        </SocialDesc>
      </Social>
    )
  })

  return (
    <SocialMediaSection>
      {socialList}
    </SocialMediaSection>
  );
};

export default SocialMedia;
