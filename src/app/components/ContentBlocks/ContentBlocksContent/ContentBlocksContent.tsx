import React from 'react';
import { ContentBlockContentProps } from '../ContentBlocks.types';

const ContentBlocksContent: React.FC<ContentBlockContentProps> = ({
  block,
}) => {
  const { fullWidth, centerAlign, content } = block;

  return (
    <div className="ContentBlocksContent">
      <div className="Page__sectionInner ContentBlocks__inner grid">
        <div
          className={`Page__content grid__content${
            fullWidth ? ' grid__content--full' : ''
          }${centerAlign ? ' grid__content--center' : ''}`}
        >
          <div dangerouslySetInnerHTML={{ __html: content as string }} />
        </div>
      </div>
    </div>
  );
};

export default ContentBlocksContent;
