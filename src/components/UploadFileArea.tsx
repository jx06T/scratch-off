"use client"
import React, { useState, useRef, useCallback } from 'react';

interface UploadedFile {
  file: File;
  name: string;
  originalName: string;
  preview: string | null;
}

function UploadFileArea() {
  const [file, setFile] = useState<UploadedFile | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFile = useCallback((file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile({
        file,
        name: file.name,
        originalName: file.name,
        preview: file.type.startsWith('image/') ? (reader.result as string) : null,
      });
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      handleFile(droppedFile);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      handleFile(selectedFile);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div>
      <div
        className={` p-3 border-2 border-dashed rounded-lg ${isDragging ? 'border-blue-700 bg-blue-50' : 'border-gray-300'}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <div className="flex items-center space-x-4 cursor-pointer" onClick={handleUploadClick}>
          <div className={`w-12 h-12 rounded-md ${isDragging ? 'bg-blue-50' : 'bg-slate-200'} flex items-center justify-center`}>
            <span className="text-2xl ">+</span>
          </div>
          <span className="text-gray-500">點擊或拖放文件到此處上傳</span>
        </div>
      </div>

      <div className=" w-full mt-4 p-2 px-3 border-2 border-gray-300 rounded-lg">
        <p className="text-sm text-gray-700">已選擇： {file ? file.name : "無"}</p>
        {file && file.preview &&
          <img src={file.preview} alt="預覽" className="my-2 w-full rounded-md" />
        }
      </div>

      <div
        className={` mt-4 p-3 border-2 rounded-lg hover:border-blue-700 hover:bg-blue-50 border-gray-300`}
      >
        <div className="flex items-center space-x-4 cursor-pointer">
          <div className={`w-12 h-12 rounded-md bg-slate-200 flex items-center justify-center`}>
            <span className="text-2xl ">⇫</span>
          </div>
          <span className="text-gray-500">上傳</span>
        </div>
      </div>

      <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" />
    </div >
  );
};

export default UploadFileArea;
