"use client";
import React, { useEffect, useState } from "react";

interface GalleryImage {
    public_id: string;
    secure_url: string;
}

export default function Gallery() {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [nextCursor, setNextCursor] = useState<string | null>(null);
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    const fetchImages = async (cursor?: string | null) => {
        try {
            setIsLoading(true);
            const res = await fetch(
                cursor ? `/api/gallery?cursor=${cursor}` : "/api/gallery"
            );
            const data = await res.json();

            setImages((prev) => [...prev, ...data.resources]);
            setNextCursor(data.nextCursor);
        } catch (error) {
            console.error("Failed to fetch gallery images:", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Initial load
    useEffect(() => {
        fetchImages();
    }, []);

    return (
        <main className="min-h-screen bg-[#0a0a0a] py-10 px-4">
            <div className="max-w-6xl mx-auto">

                {images.length === 0 && isLoading ? (
                    <div className="text-center py-20 text-gray-400 text-xl">
                        Loading stunning designs...
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        <p className="text-2xl font-semibold">No images</p>
                    </div>
                ) : (
                    <>
                        {/* Gallery Grid */}
                        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
                            {images.map((img) => (
                                <div
                                    key={img.public_id}
                                    className="break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-[#dfba00] transition-all"
                                    onClick={() => setSelectedImg(img.secure_url)}
                                >
                                    <img
                                        src={img.secure_url}
                                        alt={`Mehndi Design ${img.public_id}`}
                                        className="w-full h-auto block hover:scale-105 transition-transform duration-500"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Load More Button */}
                        {nextCursor && (
                            <div className="text-center mt-12">
                                <button
                                    onClick={() => fetchImages(nextCursor)}
                                    disabled={isLoading}
                                    className="px-8 py-3 rounded-full bg-[#dfba00] text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
                                >
                                    {isLoading ? "Loading..." : "Load More"}
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Lightbox */}
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
                        className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                    />
                </div>
            )}
        </main>
    );
}
