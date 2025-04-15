import React from "react";
import Alert from "../alert-section/Alert";
import FirstSection from "../section-one/FirstSection";
import FifthSection from "../fifth-section/FifthSection";
import SecondSection from "../second-section/SecondSection";
import ThirdSection from "../third-section/ThirdSection";
import ForthSection from "../fourth-section/ForthSection";
import SixthSection from "../sixth-section/SixthSection";
import YoutubeVideos from "../YoutubeVideos/YoutubeVideos";
function Mainpage() {
  return (
    <div>
      <Alert />
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <YoutubeVideos />
    </div>
  );
}

export default Mainpage;
