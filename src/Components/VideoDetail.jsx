import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDataFromApi } from "../utils/api";
import ReactPlayer from "react-player/youtube";
import loading from "../assets/loading.gif";
import VideoCard from "./VideoCard";

const VideoDetail = () => {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  // urlden parametre alma
  const { videoId } = useParams();

  useEffect(() => {
    fetchVideoDetails();
    fetchRelatedVideos();
  }, []);

  const fetchVideoDetails = () => {
    fetchDataFromApi(`video/details/?id=${videoId}`).then(res => {
      setVideo(res);
    });
  };
  const fetchRelatedVideos = () => {
    fetchDataFromApi(`video/related-contents/?id=${videoId}`).then(res => {
      setRelatedVideos(res.contents);
    });
  };
  return (
    <div
      className='d-flex gap-2 bg-dark text-light p-3'
      style={{ minHeight: "100vh" }}
    >
      {/* eğer video yüklenmediyse loading gifi ekrana bas */}
      {!video && <img className='loading' src={loading} />}
      {/* eğer apiden cevap gelirse videoyu ekrana bas */}
      {video && (
        <>
          <div className='flex-grow-1'>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoId}`}
              controls
              playing={true}
            />
            <div>
              <h3> {video.title} </h3>
              <div className='d-flex gap-5'>
                <img src={video.author.avatar[0].url} />
                <p> {video.author.title} </p>
                <p> {video.author.stats.subscriberText} </p>
                <p> Like: {video.stats.likes} </p>
                <p> Views: {video.stats.views} </p>
              </div>
            </div>
          </div>
          <div>
            {relatedVideos.map(video => {
              if (video.type !== "video") return;
              return <VideoCard video={video} />;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default VideoDetail;
