import { React } from 'react';
import ReactImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import './css/Gallery.css';

export default function Gallery() {
  const images = [
    {
      original: 'https://static.vecteezy.com/system/resources/previews/001/369/753/non_2x/table-setting-with-food-and-drink-free-photo.jpg',
      loading: "lazy",
      originalHeight: 400,
      originalWidth: 1500
    },
    {
      original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvS9oDN88U5f_Xl34iVSqq9QqSpwxGOTiEgsnJ4h0X0cBiKR1b0S6ohJffm11hB60E1jk&usqp=CAU',
      originalHeight: 400,
      originalWidth: 1500,
      loading: "lazy"
    },
  ];
  return (
    <div className="Gallery">
      <div className='Gallery-container'>
        <ReactImageGallery items={images}
          infinite={true}
          lazyLoad={true}
          showNav={false}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          disableSwipe={false} />
      </div>
    </div>
  );
}