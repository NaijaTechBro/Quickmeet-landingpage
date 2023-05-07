import React from "react";
import Feature from "./Feature";
import { VscEllipsis } from "react-icons/vsc";
import { BsShieldLock } from "react-icons/bs";
import { FiGitPullRequest } from "react-icons/fi";
import { GiThreeFriends } from "react-icons/gi";
import { RiHandCoinLine, RiVideoChatLine } from "react-icons/ri";

function Features() {
  const features = [
    {
      icon: <GiThreeFriends />,
      title: "Connect to friends Nearby",
      color: "#4336f4",
      text: "Search for friends nearby and around the world.",
    },
    {
      icon: <RiVideoChatLine />,
      title: "Audio and Video Chat",
      color: "#db307a",
      text: "Audio and Video Call feature to feel realtime connection."
    },
    {
      icon: <FiGitPullRequest />,
      title: "Matched Request",
      color: "#ff5722",
      text: "We match you up for genuining connections."
    },
    {
      icon: <BsShieldLock />,
      title: "Secure",
      color: "#ffc522",
      text: "Users are safe and free from spams and bots."
    },
    {
      icon: <RiHandCoinLine />,
      title: "Earn Credit",
      color: "#673ab7",
      text: "Earn credit from friends to purchase gifts and more..."
    },
    {
      icon: <VscEllipsis />,
      title: "...and more",
      color: "#4caf50",
      text: "there's more, you never know until you try"
    },
  ];
  return (
    <div className="features" id="features">
      {features.map((feature, _) => (
        <Feature
          key={_}
          title={feature.title}
          icon={feature.icon}
          color={feature.color}
          text={feature.text}
        />
      ))}
    </div>
  );
}

export default Features;
