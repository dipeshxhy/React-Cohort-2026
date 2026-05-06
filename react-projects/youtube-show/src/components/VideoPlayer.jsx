import ReactPlayer from 'react-player';

const VideoPlayer = ({ url, isHovering, muted, width = '100%' }) => {
  return (
    <ReactPlayer
      src={url}
      controls={true}
      playing={isHovering}
      muted={muted} // YouTube-like previews are usually muted
      width={width}
      height="100%"
    />
  );
};

export default VideoPlayer;
