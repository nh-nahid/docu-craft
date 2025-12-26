import React from 'react';
import ContentDisplay from '../../../components/ContentDisplay';
import { getDocumentContent } from "@/lib/doc"

const contentPage = async ({params: {contentId}}) => {
    const documentContent =  await getDocumentContent(contentId);
    return (
        <ContentDisplay id={contentId} />
    );
};

export default contentPage;