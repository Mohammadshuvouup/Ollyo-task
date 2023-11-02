import { useState, useEffect } from "react";
import SortableList, { SortableItem } from 'react-easy-sort'
import arrayMove from 'array-move'
const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [selectedItem, setSelectedItem] = useState([]);

  const data = [
    {
      id: "1",
      name: "image1",
      image: "/assets/images/image-1.webp",
    },
    {
      id: "2",
      name: "image2",
      image: "/assets/images/image-2.webp",
    },
    {
      id: "3",
      name: "image3",
      image: "/assets/images/image-3.webp",
    },
    {
      id: "4",
      name: "image4",
      image: "/assets/images/image-4.webp",
    },
    {
      id: "5",
      name: "image5",
      image: "/assets/images/image-5.webp",
    },
    {
      id: "6",
      name: "image6",
      image: "/assets/images/image-6.webp",
    },
    {
      id: "7",
      name: "image7",
      image: "/assets/images/image-7.webp",
    },
    {
      id: "8",
      name: "image8",
      image: "/assets/images/image-8.webp",
    },
    {
      id: "9",
      name: "image9",
      image: "/assets/images/image-9.webp",
    },
    {
      id: "10",
      name: "image10",
      image: "/assets/images/image-10.jpeg",
    },
    {
      id: "11",
      name: "image11",
      image: "/assets/images/image-11.jpeg",
    },
  ];

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
  };

  const onSortEnd = (oldIndex, newIndex) => {
    console.log("old", oldIndex)
    console.log("new", newIndex)
    setImages((array) => arrayMove(array, oldIndex, newIndex))
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
        <SortableList onSortEnd={onSortEnd} 
        className="image-gallery__images"  draggedItemClassName="dragged">
          {images && images.length>0 && images.map((item, key) => {
            return (
              
              <SortableItem key={key}>
                <div className="image">
                  <img src={item.image} alt={item.name} />
                  <label
                    onClick={() => updateSelectedItem(item)}
                    className="overlay"
                    htmlFor={item.id}
                    allowDrag={false}
                  />
                  <input
                    type="checkbox"
                    id={item.id}
                    name={item.name}
                    value={item.name}
                    allowDrag={false}
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
