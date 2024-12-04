import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-dashed rounded-full animate-spin border-orange-900"></div>
    </div>
  );
};

export default Loader;
