import React, { useState } from 'react';

function PreviewMode({ children }) {
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <div>
      <button onClick={() => setPreviewMode((prev) => !prev)}>
        {previewMode ? 'Switch to Edit Mode' : 'Switch to Preview Mode'}
      </button>
      {React.cloneElement(children, { previewMode })}
    </div>
  );
}

export default PreviewMode;
