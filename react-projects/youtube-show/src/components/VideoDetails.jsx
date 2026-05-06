import { Chip, Spinner } from '@heroui/react';
import { useEffect, useState } from 'react';
import { getVideoById } from '../services/api';

const VideoDetails = ({ videoId }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    async function getDetails() {
      setLoading(true);
      const data = await getVideoById(videoId);
      setDetails(data);
      setLoading(false);
    }
    getDetails();
  }, [videoId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
      </div>
    );
  }
  if (details && details.video && details.video.items) {
    const {
      channel,
      video: {
        items: {
          snippet: { title, description, tags },
        },
      },
    } = details;
    return (
      <div className="space-y-6 hidden md:block">
        <h1 className="text-4xl font-semibold">{title}</h1>
        <div>
          <span
            className="cursor-pointer"
            onClick={() => setShowDescription(!showDescription)}
          >
            {showDescription ? 'Less' : 'More'} info about{' '}
            <span className="font-bold">this video</span>
          </span>
          {showDescription && (
            <p className="mt-4">
              {description.split('\n').map((line, i) => (
                <span key={i}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          )}
        </div>
        <ul>
          {tags?.map((tag) => (
            <Chip className="mr-2 mb-2" key={tag}>
              #{tag}
            </Chip>
          ))}
        </ul>
      </div>
    );
  }
  return <p>Details not available</p>;
};

export default VideoDetails;
