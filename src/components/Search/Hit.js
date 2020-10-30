import React from "react";
import PostItem from "../PostItem";

const Hit = ({ hit }) => (
  <PostItem
    slug={hit.fields.slug}
    title={hit.title}
    date={hit.date}
    description={hit.description}
    category={hit.category}
    background={hit.background}
    timeToRead={hit.timeToRead}
  />
);

export default Hit;
