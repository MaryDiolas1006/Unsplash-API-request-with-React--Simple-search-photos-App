import React from 'react';

const ImageList = ({ images }) => {
    
    const imageList = images.map(({ description, id, urls }) => {
        return <img
            alt={description}
            key={id}
            src={urls.thumb}
            style={{ marginTop: "50px", marginRight: "15px" }}
        />
    })
    return (
        <div>
            {imageList}
        </div>
    );
}

export default ImageList;
