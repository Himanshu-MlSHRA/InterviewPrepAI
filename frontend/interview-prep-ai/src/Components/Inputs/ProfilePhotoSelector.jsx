import React, { useRef, useState } from "react";
import { User, Upload, Trash2 } from "lucide-react";

const ProfilePhotoSelector = ({ image, setImage, preview, setPreview }) => {
    const inputRef = useRef(null);
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            const preview = URL.createObjectURL(file);
            if (setPreview) {
                setPreview(preview);
            }
            setPreviewUrl(preview);
        }
    };

    const handleRemoveImage = () => {
        setImage(null);
        setPreviewUrl(null);
        if (setPreview) {
            setPreview(null);
        }
    };

    const onChooseFile = () => {
        inputRef.current.click();
    };

    return (
        <div className="flex flex-col items-center mb-6">
            <input
                type="file"
                accept="image/*"
                ref={inputRef}
                onChange={handleImageChange}
                className="hidden"
            />
            
            {!image ? (
                // iPhone Style - Only button is clickable
                <div className="flex flex-col items-center gap-4">
                    <div 
                        className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#F5F3F4] to-[#FFFFFF] border border-[#D3D3D3] flex items-center justify-center shadow-sm"
                    >
                        <User className="w-8 h-8 text-[#B1A7A6]" />
                    </div>
                    <button
                        type="button"
                        className="flex items-center gap-2 text-sm text-[#660708] hover:text-[#BA181B] transition-all duration-300 font-medium px-4 py-2 rounded-full bg-white border border-[#D3D3D3] hover:border-[#BA181B] hover:scale-105 active:scale-95 transform"
                        onClick={onChooseFile}
                    >
                        <Upload className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                        Choose Photo
                    </button>
                </div>
            ) : (
                // iPhone Style with image - Only buttons are clickable
                <div className="flex flex-col items-center gap-4">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-2xl bg-white border border-[#D3D3D3] overflow-hidden shadow-sm">
                            <img
                                src={preview || previewUrl}
                                alt="profile photo"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <button
                            type="button"
                            className="absolute -top-2 -right-2 bg-[#E5383B] text-white p-1.5 rounded-full hover:bg-[#A4161A] transition-all duration-300 shadow-lg hover:scale-110 active:scale-95 transform"
                            onClick={handleRemoveImage}
                        >
                            <Trash2 className="w-3 h-3" />
                        </button>
                    </div>
                    <button
                        type="button"
                        className="flex items-center gap-2 text-sm text-[#660708] hover:text-[#BA181B] transition-all duration-300 font-medium px-4 py-2 rounded-full bg-white border border-[#D3D3D3] hover:border-[#BA181B] hover:scale-105 active:scale-95 transform"
                        onClick={onChooseFile}
                    >
                        <Upload className="w-4 h-4 transition-transform duration-300 hover:scale-110" />
                        Change Photo
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProfilePhotoSelector;