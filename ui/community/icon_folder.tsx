import React from 'react';
import ImageUploader from '@/ui/test/file';
import { FlexCenter_L, FlexCenter_S, FlexSquare } from '@/ui/community/circle';

const MyComponent: React.FC = () => {
  return (
    <div className='relative w-36 h-36'>
      <FlexCenter_L>
        <FlexSquare>
        </FlexSquare>
      </FlexCenter_L>
      <FlexCenter_S className='z-10'>
        <ImageUploader />
      </FlexCenter_S>
    </div>
  );
};

export default MyComponent;
