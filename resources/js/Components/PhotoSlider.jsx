import { useState } from 'react';

const PhotoSlider = ({ photos }) => {
    const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

    const handleThumbnailClick = (index) => {
        setSelectedPhotoIndex(index);
    };

    return (
        <div>
            {/* Large image */}
            <img
                src={'/' + photos[selectedPhotoIndex]}
                className="h-full w-full aspect-square md:h-96 object-contain object-center"
                alt={`Photo ${selectedPhotoIndex + 1}`}
            />

            {/* Thumbnails */}
            <div className="flex mt-4">
                {photos.map((photo, index) => (
                    <img
                        key={index}
                        src={'/' + photo}
                        className={`h-12 w-12 object-cover mr-2 cursor-pointer border ${
                            index === selectedPhotoIndex ? 'border-blue-500' : 'border-gray-200'
                        }`}
                        alt={`Photo ${index + 1}`}
                        onClick={() => handleThumbnailClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default PhotoSlider;
