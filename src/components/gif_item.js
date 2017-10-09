import React from 'react';

const GifItem = ((props) => {
    return (
        <div className="gif-item">
            <img src={props.item.images.downsized.url} />
        </div>
    )
});

export default GifItem;