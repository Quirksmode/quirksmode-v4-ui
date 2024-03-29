import React from 'react';
import IconQuirksmode from '@/assets/icons/quirksmode.svg';

const Loading: React.FC = () => (
  <div className="Loading">
    <div className="grid">
      <div className="Loading__spinnerWrap">
        <IconQuirksmode />
      </div>
    </div>
  </div>
);

export default Loading;
