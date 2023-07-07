"use client"
import React from 'react';
import ImageUpload from './ImageUpload';

const App: React.FC = () => {
  const handleImageSelect = (file: File) => {
    // 選択された画像の処理を行う
    console.log(file);
  };

  return (
    <div>
      <ImageUpload onImageSelect={handleImageSelect} />
    </div>
  );
};

export default App;
