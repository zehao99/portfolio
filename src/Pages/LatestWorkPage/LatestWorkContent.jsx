import React, { useState } from "react";
import styles from "./LatestWorkContent.module.scss";
import Gallery from "./photo-gallery/Gallery";
import PhotoComp from "./PhotoComp";
import arrayMove from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { Photos } from "./PhotosLatestWorks";
import useWindowDimensions from "../../Utilities/useWindowDimensions";

const SortablePhoto = SortableElement((item) => <PhotoComp {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery
    photos={items}
    renderImage={(props) => <SortablePhoto {...props} />}
  />
));

const LatestWorkContent = (props) => {
  const { width, height } = useWindowDimensions();
  const [items, setItems] = useState(Photos);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };
  return (
    <div className={styles.LatestWorkContent}>
      <div className={styles.ContentContainer}>
        {width > 600 ? (
          <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        ) : (
          <Gallery photos={items} />
        )}
      </div>
    </div>
  );
};

export default LatestWorkContent;
