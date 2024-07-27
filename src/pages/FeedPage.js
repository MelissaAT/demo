import Feed from '../components/Feeds/Feed';
import { useParams } from 'react-router-dom'; // Add this line

const FeedPage = () => {
  const { type } = useParams(); // type could be 'personal', 'professional', 'dating'

  return (
    <div>
      <h1>{type.charAt(0).toUpperCase() + type.slice(1)} Feed</h1>
      <Feed type={type} />
    </div>
  );
};

export default FeedPage;
