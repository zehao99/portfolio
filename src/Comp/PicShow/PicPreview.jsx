import React, { useState, useEffect } from "react";
import styles from "./PicPreview.module.scss";
import useWindowDimensions from "../../Utilities/useWindowDimensions";

const PicPreview = (props) => {
  const { height, width } = useWindowDimensions();
  const [idPicked, setIdPicked] = useState(props.idPicked);

  useEffect(() => {
    setIdPicked(props.idPicked);
  }, [props.idPicked]);
  let len = props.photos.length;
  let PhotosToShow = Array(len);
  //   if (len % 2 == 0) len -= 1;
  const halfLen = Math.floor(len / 2);

  props.photos.map((e, idx) => {
    let newIdx = idx - idPicked + halfLen;
    if (newIdx < 0) newIdx += len;
    if (newIdx >= len) newIdx -= len;
    PhotosToShow[newIdx] = e;
  });

  let singleWidth = height / 10;

  return (
    <div className={styles.PicPreviewContainer}>
      {PhotosToShow.map((e, idx) => {
        return (
          <div
            key={e.id}
            className={styles.SmallPic}
            style={
              idx - halfLen < 0
                ? {
                    transform: `perspective(400px) rotateY(${
                      (((-idx + halfLen) * 0.95) / halfLen) * 90
                    }deg) scale(${(-Math.abs(idx - halfLen) * 4 + 60) / 50})`,
                    zIndex: -Math.abs(idx - halfLen) + 100,
                    marginLeft:
                      idx == 0
                        ? `${
                            len % 2 == 0
                              ? 0.5 * width - singleWidth * halfLen * 0.605
                              : 0.5 * width -
                                singleWidth * (halfLen + 1) * 0.605
                          }px`
                        : `${
                            (((idx - halfLen) * singleWidth) / halfLen) * 1
                          }px`,
                  }
                : {
                    transform: `perspective(400px) rotateY(${
                      (((-idx + halfLen) * 0.95) / halfLen) * 90
                    }deg) scale(${
                      idx == halfLen
                        ? 1.5
                        : (-Math.abs(idx - halfLen) * 4 + 60) / 50
                    })`,
                    zIndex: -Math.abs(idx - halfLen) + 100,
                    marginRight: `${
                      -(((idx - halfLen) * singleWidth) / halfLen) * 1
                    }px`,
                  }
            }
          >
            <img
              src={e.url + "?w=150"}
              alt={e.description}
              style={
                idx == halfLen
                  ? {
                      boxShadow:
                        "0.1rem 0.1rem 0.3rem 0.1rem rgba(0, 0, 0, 0.6)",
                    }
                  : {
                      WebkitFilter: "brightness(50%)",
                      filter: "brightness(50%)",
                    }
              }
            />
          </div>
        );
      })}
    </div>
  );
};

export default PicPreview;
