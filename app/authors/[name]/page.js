import ContentDisplay from "../../../components/ContentDisplay";
import {getDocuments} from '@/lib/doc';
import { getDocumentByAuthor } from '../../utils/doc-util'

const AuthorPage = async ({ params }) => {
  const { name } = await params;

  const docs = await getDocuments();
  const matchedDocuments = getDocumentByAuthor(docs, name);

  if (!matchedDocuments.length) return <p>No docs found</p>;

  return <ContentDisplay id={matchedDocuments[0].id} />;
};

export default AuthorPage;
