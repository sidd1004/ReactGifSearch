import React from 'react';
import GifItem from './gif_item'

const GifList = ((props) => {
    console.log(props);
    const gifItem = props.gifs.map((image) => {
        return (
            <GifItem key={image.id} item={image} />
        )
    })

    return (
        <div >
            <div className="gif-list">{gifItem}</div>
        </div>
    )
});

export default GifList;