import React from 'react';
import "../Assets/image-gallery.scss";
import ImageGallery from 'react-image-gallery';
import { makeStyles } from '@material-ui/core/styles';

const images = [
  {
    original: 'https://picsum.photos/id/1018/1000/600/',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
    description: 'item 1'
  },
  {
    original: 'https://picsum.photos/id/1015/1000/600/',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
    description: 'item 2'
  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    description: 'item 3'
  },
  {
      original: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-0/p200x200/20108098_10155511047846382_582861839706930420_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=bZxFtDZLQ2QAX8vtuAc&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=6040a31f59c0dadaa8d07cdb431d7ae1&oe=5EAB5731',
      thumbnail: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-0/p200x200/20108098_10155511047846382_582861839706930420_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=bZxFtDZLQ2QAX8vtuAc&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=6040a31f59c0dadaa8d07cdb431d7ae1&oe=5EAB5731',
      description: 'Pastor Ken'
  }
];

const useStyles = makeStyles((theme) => ({
    gallery: {
        paddingTop: "20px"
    },
}));

export default function Gallery() {
    const classes = useStyles();
    return (
        <div>
            {/* https://github.com/xiaolin/react-image-gallery */}
            <ImageGallery autoPlay={true} additionalClass={classes.gallery} items={images} />
        </div>
    );
}