import { useState } from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';

const calculateTimeAgo = (publishedAt) => {
  const publishedDate = new Date(publishedAt);
  const now = new Date();
  const diffInSeconds = Math.floor((now - publishedDate) / 1000);

  if (diffInSeconds < 60) {
    return `${diffInSeconds} seconds ago`;
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  } else {
    const years = Math.floor(diffInSeconds / 31536000);
    return `${years} year${years > 1 ? 's' : ''} ago`;
  }
};

const VideoCard = ({
  url,
  title,
  channelTitle,
  viewCount,
  publishedAt,
  videoId,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <Link
      to={`/video/${videoId}`}
      className="flex flex-col shadow-md rounded-lg overflow-hidden"
    >
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        style={{ width: '360px', height: '180px', overflow: 'hidden' }}
      >
        <VideoPlayer url={url} isHovering={isHovering} muted={true} />
      </div>
      <div className="p-2">
        <h2>{title}</h2>
        <h3>{channelTitle}</h3>
        <p>
          {viewCount < 1000
            ? `${viewCount} views`
            : `${(viewCount / 1000).toFixed(1)}K views`}{' '}
          . <span>{calculateTimeAgo(publishedAt)}</span>
        </p>
      </div>
    </Link>
  );
};

export default VideoCard;
