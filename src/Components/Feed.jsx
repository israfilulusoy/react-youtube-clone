import { useContext } from "react";
import LeftNav from "./LeftNav";
import { Context } from "../Context/contextApi";
import VideoCard from "./VideoCard";

const Feed = () => {
  // context içerisinde tutulan videoları çekme...
  const { searchResult } = useContext(Context);

  return (
    <div className='d-flex bg-dark' style={{ minHeight: "100vh" }}>
      <LeftNav />
      <div className='w-100 p-4 videos'>
        {searchResult.map((video, index) => {
          if (video.type !== "video") return;
          return <VideoCard key={index} video={video} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
