import { Spinner } from '@heroui/react';
import { useEffect, useState } from 'react';
import { getAllVideos } from '../services/api';
import { default as VideoCard } from './VideoCard';

const YouTubeEmbed = ({ videoId }) => (
  <iframe
    width="560"
    height="315"
    src={`https://www.youtube.com/embed/${videoId}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);
const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchVideos = async () => {
      const data = await getAllVideos();
      setVideos(data.data);
      setLoading(false);
    };
    fetchVideos();
  }, []);
  if (loading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4  gap-y-20 gap-4 p-4 ">
      {videos.map(({ items }) => {
        const {
          id,
          statistics: { viewCount },
          snippet: {
            thumbnails: {
              high: { url },
            },
            title,
            channelTitle,
            publishedAt,
          },
        } = items;
        return (
          <VideoCard
            key={id}
            videoId={id}
            url={`https://www.youtube.com/watch?v=${id}`}
            title={title}
            channelTitle={channelTitle}
            viewCount={viewCount}
            publishedAt={publishedAt}
          />
        );
      })}
    </div>
  );
};

export default Videos;
