import { useState, useEffect } from "react";
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
  },[]);
 
  const updateSelectedItem =(item) =>{
    // setSelectedItem([...selectedItem , item]);
    isDuplicate(item);
  }

  const isDuplicate =(item)=>{
    
  }

  return (
    <div className="image-gallery">
      <div className="image-gallery__header">
        <div className="select-file">
             <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
             <label htmlFor="vehicle1">{selectedItem.length} File Selected</label>
        </div>
        <div className="delete-btn">Delete All</div>
      </div>
      <div className="image-gallery__body">
        <div className="image-gallery__images">
          {images.map((item, key) => {
            return (
              <div className="image" key={key}>
                <img src={item.image} alt={item.name} />
                <label 
                onClick={()=> updateSelectedItem(item)}
                className="overlay" htmlFor={item.id}/>
                <input type="checkbox" id={item.id} name={item.name} value={item.name}/>
              </div>
            );
          })}
          <div className="add-image">
            <img src="/assets/images/add-image.png" alt="" />
            <span>Add image</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
