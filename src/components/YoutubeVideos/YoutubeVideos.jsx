import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import items from "../files/data";
import "./YoutubeVideo.css";
const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=6&order=date&key=AIzaSyDsXCavdCz1fgz00BliePYm9AwgyBfAey4`;
function YoutubeVideos() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setVideos(data.items);
      })
      .catch(() => {
        console.log("somthing is wrong");
      });
  }, []);
  console.log(videos);

  return (
    <section className="allVideoWrapper">
      <div className="container">
        <div className="row align-items-center justify-content-center text-center ">
          <div className="col-12">
            <div className="title-wraper video-title-wraper">latest video</div>
          </div>

          {items?.map((singleVideo, index) => {
            let vidId = singleVideo.id.videoId;
            let videoLink = `https://www.youtube.com/watch?v=${vidId}`;
            return (
              <div key={index} className="col-sm-12 col-md-6 col-lg-4">
                <div className="single-video-wraper">
                  <div className="video-thumbnail">
                    <a href={videoLink} target="_blank">
                      <img
                        src={singleVideo.snippet.thumbnails.high.url}
                        alt="thumbnail"
                      />
                    </a>
                  </div>
                  <div className="video-info-wraper">
                    <div className="video-title">
                      <a href={videoLink} target="_blank">
                        {singleVideo.snippet.title}
                      </a>
                    </div>
                    <div className="video-description">
                      {singleVideo.snippet.description}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default YoutubeVideos;
