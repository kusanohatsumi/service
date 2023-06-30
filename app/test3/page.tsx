import React from 'react';
import ImageUploader from '@/ui/test/file';
import { FlexCenter_L, FlexCenter_S, FlexSquare } from '@/ui/community/circle';


const App: React.FC = () => {
  return (
    <div className=' relative w-36 h-36 '>
      <FlexCenter_L>
        <FlexSquare>
        </FlexSquare>
      </FlexCenter_L>

      <FlexCenter_S>
        <ImageUploader />
      </FlexCenter_S>

      <ImageUploader />

      <h1>画像アップローダー</h1>


    </div>
  );
};

export default App;
