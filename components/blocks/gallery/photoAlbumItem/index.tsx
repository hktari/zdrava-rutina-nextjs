import React from "react";

type Props = {
  photo: PhotosDatum;
  minPhotoWidth: number;
};

const PhotoAlbumItem = ({ photo, minPhotoWidth }: Props) => {
  const sortByWidthAscending = (photos: WebpImage[]) => {
    const copy = [...photos];
    return copy.sort((a, b) => a.width - b.width);
  };


  const takeLargestPhoto = (photos: WebpImage[]) => {
    const sortedPhotos = sortByWidthAscending(photos);
    return sortedPhotos[sortedPhotos.length - 1];
  };

  const largestPhoto = takeLargestPhoto(photo.webp_images);
  const optimalSizePhoto = takePhotoWithAtLeast(
    minPhotoWidth,
    photo.webp_images
  );

  return (
    <div className="m-1 rounded-1 " style={{ overflow: "hidden" }}>
      <a href={largestPhoto.source}>
        <img
          className="img-fluid"
          src={optimalSizePhoto.source}
          alt={photo?.id}
        />
      </a>
    </div>
  );
};

export default PhotoAlbumItem;
