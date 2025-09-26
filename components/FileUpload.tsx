
import React, { useCallback, useState } from 'react';
import UploadIcon from './icons/UploadIcon';

interface FileUploadProps {
  onUpload: (file: File) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onUpload }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };
  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      onUpload(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      onUpload(e.target.files[0]);
    }
  };

  return (
    <div className="w-full">
      <label
        htmlFor="file-upload"
        className={`flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-lg cursor-pointer transition-colors
        ${isDragging ? 'border-purple-300 bg-purple-100/30' : 'border-white/50 hover:border-white/80 hover:bg-white/10'}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6 text-center">
            <UploadIcon className="w-10 h-10 mb-3 text-white/80"/>
          <p className="mb-2 text-sm text-white/80"><span className="font-semibold">Click to upload</span> or drag and drop</p>
          <p className="text-xs text-white/60">TXT file with scenarios</p>
          <p className="text-xs text-white/60 mt-1">Format: <code className="bg-black/20 p-1 rounded">Fallacy Name :: Scenario text</code></p>
        </div>
        <input id="file-upload" type="file" className="hidden" accept=".txt" onChange={handleChange} />
      </label>
    </div>
  );
};

export default FileUpload;
