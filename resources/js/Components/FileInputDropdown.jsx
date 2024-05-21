import React, { useState } from "react";

function FileInputDropdown({ selectedFiles, setSelectedFiles }) {
    const isImageFile = (file) => {
        const fileExtension = file.name.split(".").pop().toLowerCase();
        return ["png", "jpg", "webp"].includes(fileExtension);
    };

    const handleFileChange = (e) => {
        const newFiles = Array.from(e.target.files).filter(isImageFile);
        setSelectedFiles([...selectedFiles, ...newFiles]);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const newFiles = Array.from(e.dataTransfer.files).filter(isImageFile);
        setSelectedFiles([...selectedFiles, ...newFiles]);
    };

    const removeFile = (index) => {
        const updatedFiles = selectedFiles.filter((_, i) => i !== index);
        setSelectedFiles(updatedFiles);
    };

    return (
        <div className="file-input-dropdown">
            <div
                className="file-input-container "
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <label htmlFor="file-input" className="file-input-label border-gray-600 dark:border-gray-300 border-dashed border-2 rounded-xl ">
                    Select or Drop Files
                </label>
                <input
                    type="file"
                    multiple
                    accept=".png,.jpg,.jpeg,.webp"
                    onChange={handleFileChange}
                    id="file-input"
                    className="file-input"
                />
            </div>
            {selectedFiles.length > 0 && (
                <div className="dropdown">
                    {selectedFiles.map((fileOrPath, index) => (
                        <div key={index} className="file-item">
                            {typeof fileOrPath === "string" ? (
                                // If it's a string (path), render an image with the path
                                <img src={"/" + fileOrPath} alt={fileOrPath} />
                            ) : (
                                // If it's a file, render an image with createObjectURL
                                <img
                                    src={URL.createObjectURL(fileOrPath)}
                                    alt={fileOrPath.name}
                                />
                            )}
                            <button onClick={() => removeFile(index)}>
                                <svg
                                className="fill-gray-600 dark:fill-gray-300"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M5.99932 7.41421L1.75668 11.6569L0.342465 10.2426L4.58511 6L0.342466 1.75736L1.75668 0.343143L5.99932 4.58579L10.242 0.343143L11.6562 1.75736L7.41354 6L11.6562 10.2426L10.242 11.6569L5.99932 7.41421Z" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FileInputDropdown;
