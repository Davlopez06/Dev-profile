export default function getVideo(videoUrl = '') {
  if (videoUrl === '') return null;

  return (
    <iframe
      src={videoUrl}
      frameBorder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    />
  );
}
