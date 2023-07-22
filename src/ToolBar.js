import React from "react";
import ButtonC from "./ButtonC";

export default function ToolBar({onPlayMovie,onUploadImage}) {
  return (
    <div>
        <ButtonC onClick={onPlayMovie}>PlayMovie</ButtonC>
        <ButtonC onClick={onUploadImage}>UploadImage</ButtonC>
    </div>
  );
}
