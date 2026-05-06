import { Spinner } from '@heroui/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getRelatedVideos } from '../services/api';
import VideoPlayer from './VideoPlayer';

const Recommendations = ({ videoId }) => {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    async function getRecommendations() {
      const data = await getRelatedVideos(videoId);
      setRecommendations(data.data);
      setLoading(false);
    }
    getRecommendations();
  }, [videoId]);
  if (loading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="max-h-[500px] overflow-y-auto">
      {recommendations.map(({ items }) => {
        const {
          id,
          snippet: { title },
        } = items;
        return (
          <Link to={`/video/${id}`} className="mb-6 ">
            <VideoPlayer
              key={id}
              url={`https://www.youtube.com/watch?v=${id}`}
              isHovering={false}
              muted={true}
              width="80%"
            />
            <h2 className="text-md font-bold text-stone-100 my-5">{title}</h2>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommendations;
