import ContentDisplay from "../../../components/ContentDisplay";
import {getDocuments} from '@/lib/doc';
import { getDocumentByTag } from '../../utils/doc-util'


const TagPage = async ({params}) => {
    const {name} = await params;
    const docs = await getDocuments();
    const matchedDocuments = getDocumentByTag(docs, name)
    return (
        <ContentDisplay id={matchedDocuments[0].id}/>
    );
};

export default TagPage;