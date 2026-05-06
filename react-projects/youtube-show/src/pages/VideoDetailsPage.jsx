import { useParams } from 'react-router-dom';
import Recommendations from '../components/Recommendations';
import VideoDetails from '../components/VideoDetails';
import VideoPlayer from '../components/VideoPlayer';

const VideoDetailsPage = () => {
  const { id } = useParams();
  const url = `https://www.youtube.com/watch?v=${id}`;
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-3 gap-4 p-4">
        <div className="col-span-2 max-w-7xl h-[500px] space-y-6">
          <VideoPlayer url={url} isHovering={true} muted={false} />
          <div className="max-h-48 overflow-y-auto">
            <VideoDetails videoId={id} />
          </div>
        </div>
        <div className="max-w-md">
          <Recommendations videoId={id} />
        </div>
      </div>
    </div>
  );
};

export default VideoDetailsPage;
