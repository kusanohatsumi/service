import React, { useState } from 'react';
import Image from 'next/image';
import Flexusericon, { FlexCenter_L, FlexCenter_S, FlexSquare } from '@/ui/community/circle';

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
          <FlexCenter_L>
            <FlexSquare>
              <img src={selectedImage} alt="Selected" width={100} height={100} />
            </FlexSquare>
          </FlexCenter_L>

          <FlexCenter_S>
            <button onClick={handleRemoveImage}>
              <Image
                src="/test_bat2.svg"
                alt="Remove"
                width={42}
                height={42}
                style={{ backgroundColor: '#8AD8D4', borderRadius: '50%' }}
              />
            </button>
          </FlexCenter_S>
        </div>
      ) : (
        <label htmlFor="upload-input">
          <div className=' relative w-36 h-36 '>
            <FlexCenter_L>
              <FlexSquare>
                <img src="/comm_person.svg" alt="Upload" width={56} height={56} />
                <input
                  id="upload-input"
                  type="file"
                  accept="image/*"
                  onChange={handleFileSelect}
                  style={{ display: 'none' }}
                />
              </FlexSquare>
            </FlexCenter_L>
            <FlexCenter_S>
              <Image
                src="/comm_photo.svg"
                alt="Upload Icon"
                width={42}
                height={42}
                style={{ backgroundColor: '#8AD8D4' }}
              />
            </FlexCenter_S>
          </div>
        </label>
      )
      }
    </div >
  );
};

export default ImageUpload;
