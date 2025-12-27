import ContentDisplay from "../../../components/ContentDisplay";
import { getDocuments } from '@/lib/doc';
import { getDocumentByCategory } from '../../utils/doc-util'

const CategoriesPage = async ({ params }) => {
    const { name } = await params;
    const docs = await getDocuments();
    const matchedDocuments = getDocumentByCategory(docs, name)
    return (
       <ContentDisplay id={matchedDocuments[0].id}/>
    );
};

export default CategoriesPage;