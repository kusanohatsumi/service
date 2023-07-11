'use client';
import React, { useState } from 'react';
import Image from 'next/image';

interface ImageUploadProps {
  onImageSelect: (file: File) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelect }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setSelectedImage(imageURL);
      onImageSelect(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      {selectedImage ? (
        <div>
          <img src={selectedImage} alt="Selected" width={100} height={100}  />
          <button onClick={handleRemoveImage}>
          <Image
              src="/test_bat2.svg"
              alt="magn glassifying"
              style={{ width: '42px',height: '42px'}}
              width={42}
              height={42}
            />
          </button>
        </div>
      ) : (
        <label htmlFor="upload-input">
          <img src="/comm_person.svg" alt="Upload" width={100} height={100}/>
          <input
            id="upload-input"
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            style={{ display: 'none' }}
          />
          <Image
              src="/comm_photo.svg"
              alt="magn glassifying"
              style={{ backgroundColor: '#8AD8D4' ,width: '42px',height: '42px',borderRadius: '50%'}}
              width={42}
              height={42}
            />
        </label>
      )}
    </div>
  );
};

export default ImageUpload;
