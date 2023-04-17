import React from "react";
import "./SectionFeature.css";
const links = [
  [
    "https://assets.ajio.com/medias/sys_master/root/20221109/SI6r/636b8e9af997ddfdbd663ee4/-473Wx593H-461119105-blue-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20220317/4ExL/62323f25aeb26921afded401/-473Wx593H-469157895-bluegold-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/h31/hc8/15909133647902/-1117Wx1400H-460615790-black-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20221031/nOAx/635fc929f997ddfdbd4c03f1/-473Wx593H-464878523-white-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230110/tBW3/63bd3d67f997dd708efb4670/-473Wx593H-462267306-gold-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20210406/jZ1r/606ca18aaeb269a9e3857d43/-473Wx593H-441169872-beige-MODEL.jpg",
  ],
  [
    "https://assets.ajio.com/medias/sys_master/root/20211116/wgNp/6193e231f997ddf8f108fe35/-1117Wx1400H-4919468630-multi-MODEL2.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20221118/kISk/63774a37f997ddfdbd82fd48/-473Wx593H-462960206-black-MODEL4.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20211202/8BGG/61a8e451f997ddf8f12e2d80/-1117Wx1400H-4918951610-multi-MODEL.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20210206/Gta5/601d8ef67cdb8c1f1437fc40/-473Wx593H-410217020-000-MODEL.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71KbCM-ragL._SL1500_.jpg",
    "https://assets.ajio.com/medias/sys_master/root/20230301/80L5/63fee833aeb26924e39a601a/-473Wx593H-464465823-blue-MODEL.jpg",
  ],
  [
    "https://assets.ajio.com/medias/sys_master/root/20220627/T9MS/62b9cc33f997dd03e2a0c8ce/-1117Wx1400H-464552419-white-MODEL.jpg",
    "https://www.lg.com/in/images/dishwasher/md07551983/gallery/DFB532FP-Dishwasher-front-open-contents-view-D-03.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71-XsJoSe1L._SX466_.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/710rxKpVGhL._SL1280_.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/717BedfA+UL._SL1500_.jpg",
    "https://s3.toolsvilla.com/products-hi-max-power-and-hand-tool-kit-box/1677044039208/IC-068%20Tool%20Kit%20Box%20Image%201.webp",
  ],
  [
    "https://static.toiimg.com/photo/61117317.cms",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/811OCx9NWNL._SL1500_.jpg",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/716bU8s4RXS._SY355_.jpg",
    "https://rukminim1.flixcart.com/image/200/200/kx50gi80/pen/h/z/k/119766-flair-original-imag9nzubznagufg.jpeg?q=70",
    "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/617Lc74UntL.jpg",
    "https://media.karousell.com/media/photos/products/2019/07/10/top_16_international_bestselling_business_books_series_1_1562748993_1ff42b12_progressive.jpg",
  ],
];
const offers = [
  "From ₹299",
  "Upto 40% Off",
  "From ₹599",
  "From ₹1099",
  "Upto 60% Off",
  "From ₹799",
];
const SectionFeature = ({ item, idx, firstidx }) => {
  return (
    <div className="sectionFeatureContainer">
      <img className="fImg" src={links[firstidx][idx]}></img>
      <h4 style={{ marginBottom: 7 }}>{item}</h4>
      <h5 style={{ marginTop: 0, color: "#39ad1f" }}>{offers[idx]}</h5>
    </div>
  );
};

export default SectionFeature;
