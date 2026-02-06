import React, { useState } from "react";

const galleryImages = [
    { id: 3, src: "/bridal.png" },
    { id: 4, src: "/k.png" },
    { id: 5, src: "/min.png" },
    { id: 3, src: "/bridal.png" },
    { id: 4, src: "/k.png" },
    { id: 5, src: "/min.png" },
];

export default function Gallery() {
    const [selectedImg, setSelectedImg] = useState(null);

    return (
        <main className="min-h-screen bg-[#0a0a0a] py-10 px-4">
            {/* Gallery Grid */}
            <div className="max-w-6xl mx-auto columns-2 md:columns-3 gap-4 space-y-4">
                {galleryImages.map((img) => (
                    <div
                        key={img.id}
                        className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-[#dfba00] transition-all"

                    >
                        <img
                            src={img.src}
                            alt="Mehndi Design"
                            className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                ))}
            </div>

            {/* Lightbox Modal */}
            {selectedImg && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImg(null)}
                >
                    <button
                        className="absolute top-10 right-10 text-white text-4xl font-light hover:text-[#dfba00]"
                        onClick={() => setSelectedImg(null)}
                    >
                        &times;
                    </button>

                    <img
                        src={selectedImg}
                        alt="Full View"
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain animate-in zoom-in duration-300"
                    />
                </div>
            )}
        </main>
    );
}
