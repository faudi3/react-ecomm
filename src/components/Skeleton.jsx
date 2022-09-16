import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="card"
    speed={2}
    viewBox="0 0 280 465"
    backgroundColor="grey"
    foregroundColor="#f3f3f3"
    {...props}
  >
    <rect x="2" y="0" rx="0" ry="0" width="270" height="310" />
    <rect x="2" y="2" rx="10" ry="10" width="275" height="307" />
    <rect x="2" y="316" rx="10" ry="10" width="275" height="100" />
    <rect x="2" y="423" rx="10" ry="10" width="135" height="35" />
    <rect x="140" y="423" rx="10" ry="10" width="135" height="35" />
  </ContentLoader>
);

export default Skeleton;
