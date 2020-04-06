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
    original: 'https://image.shutterstock.com/image-photo/wide-panorama-beautiful-autumn-field-260nw-751127782.jpg',
    thumbnail: 'https://image.shutterstock.com/image-photo/wide-panorama-beautiful-autumn-field-260nw-751127782.jpg',
    description: 'big ol'

  },
  {
    original: 'https://picsum.photos/id/1019/1000/600/',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
    description: 'item 3'
  },
  {
    original: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-0/p200x200/20108098_10155511047846382_582861839706930420_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=bZxFtDZLQ2QAX8vtuAc&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=6040a31f59c0dadaa8d07cdb431d7ae1&oe=5EAB5731',
    thumbnail: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-0/p200x200/20108098_10155511047846382_582861839706930420_n.jpg?_nc_cat=111&_nc_sid=174925&_nc_ohc=bZxFtDZLQ2QAX8vtuAc&_nc_ht=scontent-msp1-1.xx&_nc_tp=6&oh=6040a31f59c0dadaa8d07cdb431d7ae1&oe=5EAB5731',
    description: <React.Fragment><h4>Pastor Ken</h4><span>The commander in cheif!</span></React.Fragment>
  },
  {
    original: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/17952457_10155182397016382_2169654657993163428_n.jpg?_nc_cat=106&_nc_sid=2d5d41&_nc_ohc=Crzy4CXK5xgAX9fPA9f&_nc_ht=scontent-msp1-1.xx&oh=25a3be8a5cc795ea7f480a57d974b1db&oe=5EAEC6F4',
    thumbnail: 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/17952457_10155182397016382_2169654657993163428_n.jpg?_nc_cat=106&_nc_sid=2d5d41&_nc_ohc=Crzy4CXK5xgAX9fPA9f&_nc_ht=scontent-msp1-1.xx&oh=25a3be8a5cc795ea7f480a57d974b1db&oe=5EAEC6F4',
    description: <React.Fragment><h4>Lake Point</h4><span>This is Lake Point Church!</span></React.Fragment>
  },
];

const useStyles = makeStyles((theme) => ({
  gallery: {
    paddingTop: "20px",
  }
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