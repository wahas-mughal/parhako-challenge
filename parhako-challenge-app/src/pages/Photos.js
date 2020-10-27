import React, { useContext, useEffect, useState } from "react";
import { Context } from "../context/GlobalState";

const Photos = (props) => {
  const { getPhotos, photos, toggleFavorite } = useContext(Context);
  const displayPhotos = photos.map((photo) => photo.url);
  const photoId = photos.map((photo) => photo.id);

  const [imageHover, setImageHover] = useState(false);
  console.log(imageHover);

  const hoverHandler = () => {
    if (imageHover) {
      setImageHover(false);
    } else {
      setImageHover(true);
    }
  };

  useEffect(() => {
    getPhotos();
  }, [getPhotos]);

  return (
    <div>
      <h1> Photos </h1>
      {displayPhotos.map((item) => (
        <div>
          {imageHover ? (
            <div style = {{display: "flex", flexDirection: 'row', justifyContent: 'center', padding: 400, fontSize: 40}} onMouseOut={hoverHandler}>
             <i className="ri-heart-line favorite" onClick = {() => toggleFavorite(photoId, isFavorite)}></i>
             <i className="ri-add-circle-line cart"></i>
            </div>
          ) : (
            <img
              onMouseOver={hoverHandler}
              src={item}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Photos;
