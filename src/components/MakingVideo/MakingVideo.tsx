import clsx from "clsx";
import React from "react";

import * as s from "./making_video.css"

export const MakingVideo: React.FC = () => {
  return (
    <div>
      <video width="320" height="240" controls preload="none" className={clsx(s.wapper)}>
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};
