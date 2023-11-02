import { useState, useEffect } from "react";
import SortableList, { SortableItem } from 'react-easy-sort'
import {arrayMoveImmutable} from 'array-move';
import data from '../data/data.json';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  useEffect(() => {
    setImages(data);
  }, []);

  const updateSelectedItem = (item) => {
    if (!isDuplicate(item)) {
      setSelectedItem([...selectedItem, item]);
    } else {
      const updated_array = selectedItem.filter(
        (value) => value.id !== item.id
      );
      setSelectedItem(updated_array);
    }
  };

  const isDuplicate = (item) => {
    return selectedItem.includes(item);
  };

  const deleteItem = () => {
    const newData = images.filter((value) => !selectedItem.includes(value));
    setImages(newData);
    setSelectedItem([]);
    let checkboxes = document.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach(el => {el.checked = false})
  };

  const onSortEnd = (oldIndex, newIndex) => {
    setImages((array) => arrayMoveImmutable(array, oldIndex, newIndex))
  }

  return (
    <div className="image-gallery">
      <div className="image-gallery__header">
        <div className="select-file">
          {selectedItem.length == 0 ? (
            <p>Gallery</p>
          ) : (
            <>
              <input
                type="checkbox"
                id="files"
                name="files"
                value="Bike"
                checked
                readOnly
              />
              <label htmlFor="files">
                {selectedItem.length} File Selected
              </label>
            </>
          )}
        </div>
        {selectedItem.length == 0 ? (
          ""
        ) : (
          <div onClick={() => deleteItem()} className="delete-btn">
            Delete All
          </div>
        )}
      </div>
      <div className="image-gallery__body">
        <SortableList onSortEnd={onSortEnd} className="image-gallery__images"  draggedItemClassName="dragged">
          {images && images.length>0 && images.map((item, key) => {
            return (
              <SortableItem key={key}>
                <div className="image">
                  <img src={item.image} alt={item.name} />
                  <label
                    onClick={() => updateSelectedItem(item)}
                    className="overlay"
                    htmlFor={item.id}
                  />
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    value={item.name}
                  />
                </div>
              </SortableItem>
         
            );
          })}
          <div className="add-image">
            <img src="/assets/images/add-image.png" alt="" />
            <span>Add image</span>
          </div>
      </SortableList>
      </div>
    </div>
  );
};

export default ImageGallery;
