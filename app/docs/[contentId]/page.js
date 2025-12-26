import React from "react";
import ContentDisplay from "../../../components/ContentDisplay";

const ContentPage = async ({ params }) => {
  const { contentId } = await params;

  if (!contentId) {
    return <p>Error: Document ID is missing</p>;
  }

  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
