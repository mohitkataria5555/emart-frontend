import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./ImageChange.css";

const fadeImages = [
    {
      url: "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T2/images/I/61s5QLgMYGL._SX3000_.jpg",
    },
    {
      url: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/BAU/Page/Revamp/Creatives/Header/Electronics_PC.gif",
    },
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/02042023-UHP-D-Main-P4-Puma-Min40.jpg",
    },
  
    {
      url: "https://assets.ajio.com/cms/AJIO/WEB/02042023-UHP-D-Main-P7-BoatFireboltt-Starting299.jpg",
    },
  ];
  let count = 0;
  export default function ImageChange() {
    return (
      <>
        <div
          style={{
            width: "auto",
            height: 600,
            color: "black",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <div className="slide-container">
            <Fade>
              {fadeImages.map((fadeImage, index) => (
                <div className="each-fade" key={index}>
                  <div className="image-container ade-in-image homefeed">
                    <img
                      className="img1"
                      width="100%"
                      height="500px"
                      src={fadeImage.url}
                    />
                  </div>
                </div>
              ))}
            </Fade>
          </div>
        </div>
      </>
    );
  }