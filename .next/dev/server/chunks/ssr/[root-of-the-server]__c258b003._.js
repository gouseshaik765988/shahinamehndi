module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/shahinamehndi/src/components/home.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
const images = [
    "/scrollingpics/a.jpg",
    "/scrollingpics/b.jpg",
    "/scrollingpics/d.jpg",
    "/scrollingpics/e.jpg",
    "/scrollingpics/f.jpg",
    "/scrollingpics/gh.jpg"
];
function Home() {
    const [currentIndex, setCurrentIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const intervalId = setInterval(()=>{
            setCurrentIndex((prevIndex)=>prevIndex === images.length - 1 ? 0 : prevIndex + 1);
        }, 3000); // Change image every 3 seconds
        // Cleanup function to stop the interval when the component is removed
        return ()=>clearInterval(intervalId);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                dangerouslySetInnerHTML: {
                    __html: `
                @keyframes scroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .animate-infinite-scroll {
                    animation: scroll 20s linear infinite;
                }
            `
                }
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/home.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                // Use w-full for full width, mt-8 and mb-4 for spacing
                className: "w-full mt-0 mb-0",
                style: {
                    height: '5px',
                    // The gradient starts transparent (dull), goes to gold (glow), back to transparent (dull)
                    background: 'linear-gradient(to right, transparent 0%, #DAA520 50%, transparent 100%)',
                    // Optional: Add a subtle box shadow to enhance the "glow" look
                    boxShadow: '0 0 15px rgba(218, 165, 32, 0.6)'
                }
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/home.tsx",
                lineNumber: 44,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-[16/9] overflow-hidden",
                children: images.map((src, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: src,
                        alt: "Mehndi Design",
                        // These classes control the fade effect
                        className: `
                            absolute top-0 left-0 w-full h-full object-cover
                            transition-opacity duration-1000 ease-in-out
                            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}
                        `
                    }, index, false, {
                        fileName: "[project]/shahinamehndi/src/components/home.tsx",
                        lineNumber: 58,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/home.tsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                // Use w-full for full width, mt-8 and mb-4 for spacing
                className: "w-full mt-0 mb-4",
                style: {
                    height: '5px',
                    // The gradient starts transparent (dull), goes to gold (glow), back to transparent (dull)
                    background: 'linear-gradient(to right, transparent 0%, #DAA520 50%, transparent 100%)',
                    // Optional: Add a subtle box shadow to enhance the "glow" look
                    boxShadow: '0 0 15px rgba(218, 165, 32, 0.6)'
                }
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/home.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "text-1xl md:text-2xl font-bold text-start ml-2 text-[#dfba00] my-3 tracking-wide",
                children: "Premium Artistry, Organic Ingredients, and Timeless Beauty"
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/home.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-4 px-6 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative bg-black/10 backdrop-blur-md border-[3px] border-[#ffd900a2] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 left-10 w-16 h-16 bg-gray rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform",
                                    children: "✨"
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 101,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-[#dfba00] tracking-wide",
                                            children: "Exquisite Detail"
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                            lineNumber: 106,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-100 leading-relaxed opacity-90",
                                            children: "Our designs are crafted with microscopic precision, ensuring every petal and pattern is a masterpiece of marriage tradition."
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                            lineNumber: 109,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-12 h-1 bg-[#800000] group-hover:w-full transition-all duration-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 115,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative bg-black/10 backdrop-blur-md border-[3px] border-[#ffd900a2] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 left-10 w-16 h-16 bg-gray rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform",
                                    children: "🌿"
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-[#dfba00] tracking-wide",
                                            children: "Custom Designs"
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                            lineNumber: 126,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-100 leading-relaxed opacity-90",
                                            children: "Tailored for your special day. From portrait mehndi to modern minimalist styles, we bring your specific vision to life."
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                            lineNumber: 129,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 125,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-12 h-1 bg-[#800000] group-hover:w-full transition-all duration-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "group relative bg-black/10 backdrop-blur-md border-[3px] border-[#ffd900a2] p-10 rounded-2xl transition-all duration-500 hover:-translate-y-2 shadow-xl",
                            children: [
                                "  ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute -top-6 left-10 w-16 h-16 bg-gray rounded-2xl shadow-lg flex items-center justify-center text-3xl group-hover:rotate-12 transition-transform",
                                    children: "🎨"
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 139,
                                    columnNumber: 24
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold mb-4 text-[#dfba00] tracking-wide",
                                            children: "Deep Stains"
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                            lineNumber: 144,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-100 leading-relaxed opacity-90",
                                            children: "Using 100% natural henna, we guarantee a rich, long-lasting color that remains vibrant throughout your wedding festivities."
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 143,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 w-12 h-1 bg-[#800000] group-hover:w-full transition-all duration-500 rounded-full"
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                                    lineNumber: 152,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shahinamehndi/src/components/home.tsx",
                            lineNumber: 138,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shahinamehndi/src/components/home.tsx",
                    lineNumber: 96,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/home.tsx",
                lineNumber: 95,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                // Using a deep maroon color that closely matches the image background
                className: "text-gray p-8 md:p-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-white/50 mb-6 w-full"
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/home.tsx",
                        lineNumber: 166,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 leading-relaxed",
                        children: "Welcome to the innovative world of henna art & design, combining fusion designs from Arabic, Indian to Moghul. Shahin's Mehndi offers a highly personalised and bespoke service to suit your individual needs and budgets."
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/home.tsx",
                        lineNumber: 168,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 leading-relaxed",
                        children: "Shahin's Mehndi are a new generation of artists, using unique techniques together with natural ingredients for the mehndi, to add depth to its colour for your special occasions to last for days to come."
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/home.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "leading-relaxed",
                        children: "We at Shahin's Mehndi, are available for all occasions such as weddings, mehndi parties, hen parties, fashion shows & corporate events to name a few.."
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/home.tsx",
                        lineNumber: 176,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shahinamehndi/src/components/home.tsx",
                lineNumber: 159,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shahinamehndi/src/components/home.tsx",
        lineNumber: 28,
        columnNumber: 9
    }, this);
}
}),
"[project]/shahinamehndi/src/components/service.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Services
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const faqData = [
    {
        question: "How long does it take to apply bridal Mehndi?",
        answer: "Bridal designs usually take between 4 to 8 hours depending on the complexity and how far up the arms and legs the design goes. For our 2026 'Storytelling' portraits, we recommend blocking out a full morning for a relaxed experience."
    },
    {
        question: "How can I ensure my Mehndi stain is dark and vibrant?",
        answer: "Leave the paste on for at least 8-12 hours. Avoid water for the first 24 hours after removal. Instead, use a mix of lemon juice and sugar while it's drying, and apply mustard oil or eucalyptus oil after scraping the crust off."
    },
    {
        question: "Is your henna 100% natural and safe?",
        answer: "Absolutely. We use 100% organic, chemical-free henna triple-sifted for smoothness. It contains no PPD or synthetic dyes, making it safe for all skin types, including sensitive bridal skin."
    },
    {
        question: "When should I book my Mehndi artist for the wedding?",
        answer: "Popular dates in the 2026 wedding season book up fast! We recommend securing your date at least 4 to 6 days in advance, especially for elaborate bridal packages."
    },
    {
        question: "Do you provide Mehndi services for the groom and family?",
        answer: "Yes! We offer 'Minimalist Mandalas' for grooms and discounted 'Group Packages' for bridesmaids and family members (minimum 10 persons). It’s a great way to keep the aesthetic consistent across your bridal party."
    }
];
const services = [
    {
        title: "Bridal Storytelling",
        image: "/bridal.png",
        desc: "Detailed 2026 portrait designs featuring couple caricatures, proposal scenes, and hidden initials."
    },
    {
        title: "Organic Arabic Fusion",
        image: "/k.png",
        desc: "Bold Arabic strokes mixed with delicate jaali work using 100% chemical-free organic henna."
    },
    {
        title: "Minimalist Mandalas",
        image: "/min.png",
        desc: "Symmetrical central mandalas with intricate finger lace-work for the contemporary, understated bride."
    },
    {
        title: "Group Bookings",
        image: "/group.png",
        desc: "Special discounted packages for bridesmaids and family members (Minimum 10 persons)."
    }
];
function Services() {
    const [openIndex, setOpenIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen py-20 px-6 bg-[#0a0a0a]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-5xl mx-auto",
                children: [
                    " ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl md:text-5xl text-[#dfba00] text-center mb-4 uppercase tracking-tighter",
                        children: "Our Specialised Services"
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/service.tsx",
                        lineNumber: 56,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-white/60 text-center mb-16 max-w-xl mx-auto text-sm md:text-base",
                        children: 'From traditional patterns to 2026\'s latest "hidden story" trends, we bring your vision to life with precision.'
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/service.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 gap-10",
                        children: [
                            " ",
                            services.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `group flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} 
                            bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:bg-white/10 shadow-xl`,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full md:w-1/3 aspect-square md:h-[320px] relative overflow-hidden",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.image,
                                                    alt: item.title,
                                                    loading: "lazy",
                                                    className: "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                    lineNumber: 72,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                    lineNumber: 78,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                            lineNumber: 71,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-2xl font-bold text-[#dfba00] mb-3",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-400 text-base mb-6 leading-relaxed",
                                                            children: item.desc
                                                        }, void 0, false, {
                                                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                    lineNumber: 83,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-row justify-between items-center border-t border-white/10 pt-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                    lineNumber: 90,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                            lineNumber: 82,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                    lineNumber: 65,
                                    columnNumber: 25
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shahinamehndi/src/components/service.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shahinamehndi/src/components/service.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "min-h-screen bg-[#0a0a0a] py-20 ",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-3xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-2xl text-[#dfba00] text-center mb-4 uppercase tracking-tighter",
                            children: "Frequently Asked Questions"
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                            lineNumber: 101,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/60 text-center mb-12 italic",
                            children: "Everything you need to know about your henna experience."
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: faqData.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md transition-all duration-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors",
                                            onClick: ()=>setOpenIndex(openIndex === index ? null : index),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg font-semibold text-white pr-4",
                                                    children: faq.question
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                    lineNumber: 116,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: `text-[#dfba00] text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`,
                                                    children: "+"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                    lineNumber: 117,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                            lineNumber: 112,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5",
                                                children: faq.answer
                                            }, void 0, false, {
                                                fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                                lineNumber: 125,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                            lineNumber: 122,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                                    lineNumber: 108,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/service.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shahinamehndi/src/components/service.tsx",
                    lineNumber: 100,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/service.tsx",
                lineNumber: 99,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shahinamehndi/src/components/service.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
}),
"[project]/shahinamehndi/src/components/gallery.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Gallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function Gallery() {
    const [images, setImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [nextCursor, setNextCursor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedImg, setSelectedImg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchImages = async (cursor)=>{
        try {
            setIsLoading(true);
            const res = await fetch(cursor ? `/api/gallery?cursor=${cursor}` : "/api/gallery");
            const data = await res.json();
            setImages((prev)=>[
                    ...prev,
                    ...data.resources
                ]);
            setNextCursor(data.nextCursor);
        } catch (error) {
            console.error("Failed to fetch gallery images:", error);
        } finally{
            setIsLoading(false);
        }
    };
    // Initial load
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchImages();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#0a0a0a] py-10 px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto",
                children: images.length === 0 && isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 text-gray-400 text-xl",
                    children: "Loading stunning designs..."
                }, void 0, false, {
                    fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                    lineNumber: 42,
                    columnNumber: 21
                }, this) : images.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center py-20 text-gray-500",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-semibold",
                        children: "No images"
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                        lineNumber: 47,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                    lineNumber: 46,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4",
                            children: images.map((img)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "break-inside-avoid cursor-pointer overflow-hidden rounded-xl border border-white/10 hover:border-[#dfba00] transition-all",
                                    onClick: ()=>setSelectedImg(img.secure_url),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: img.secure_url,
                                        alt: `Mehndi Design ${img.public_id}`,
                                        className: "w-full h-auto block hover:scale-105 transition-transform duration-500",
                                        loading: "lazy"
                                    }, void 0, false, {
                                        fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                                        lineNumber: 59,
                                        columnNumber: 37
                                    }, this)
                                }, img.public_id, false, {
                                    fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                                    lineNumber: 54,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                            lineNumber: 52,
                            columnNumber: 25
                        }, this),
                        nextCursor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-12",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>fetchImages(nextCursor),
                                disabled: isLoading,
                                className: "px-8 py-3 rounded-full bg-[#dfba00] text-black font-semibold hover:opacity-90 transition disabled:opacity-50",
                                children: isLoading ? "Loading..." : "Load More"
                            }, void 0, false, {
                                fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                                lineNumber: 72,
                                columnNumber: 33
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                            lineNumber: 71,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true)
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                lineNumber: 39,
                columnNumber: 13
            }, this),
            selectedImg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm",
                onClick: ()=>setSelectedImg(null),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "absolute top-10 right-10 text-white text-4xl font-light hover:text-[#dfba00]",
                        onClick: ()=>setSelectedImg(null),
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: selectedImg,
                        alt: "Full View",
                        className: "max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shahinamehndi/src/components/gallery.tsx",
        lineNumber: 38,
        columnNumber: 9
    }, this);
}
}),
"[project]/shahinamehndi/src/components/contact.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen  py-20 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-4xl md:text-6xl font-bold text-[#dfba00] uppercase tracking-tighter mb-4",
                            children: "Get In Touch"
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                            lineNumber: 9,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-white/80 text-lg",
                            children: "Available for Bridal Bookings & Events across India"
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                            lineNumber: 12,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                    lineNumber: 8,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 gap-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl space-y-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-2xl font-bold text-[#dfba00] mb-6",
                                    children: "Contact Info"
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                    lineNumber: 21,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-[#800000] rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform",
                                            children: "📞"
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 25,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: "Call or Text"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                    lineNumber: 29,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "tel:+917396405569",
                                                    className: "text-white font-bold text-lg hover:text-[#dfba00] transition-colors",
                                                    children: "+91 73964 05569"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                    lineNumber: 30,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 28,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                    lineNumber: 24,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center space-x-4 group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 bg-[#800000] rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform",
                                            children: "✉️"
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 38,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-white/60 text-sm",
                                                    children: "Email Us"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                    lineNumber: 42,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "mailto:shahina3211@gmail.com",
                                                    className: "text-white font-bold text-lg hover:text-[#dfba00] transition-colors lowercase",
                                                    children: "shahina3211@gmail.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                    lineNumber: 43,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 41,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                    lineNumber: 37,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex space-x-4 pt-4 border-t border-white/10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://wa.me",
                                            target: "_blank",
                                            className: "flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl flex items-center justify-center space-x-2 transition-all font-bold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "WhatsApp"
                                            }, void 0, false, {
                                                fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                lineNumber: 57,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 52,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "https://instagram.com",
                                            target: "_blank",
                                            className: "flex-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:opacity-90 text-white py-3 rounded-2xl flex items-center justify-center space-x-2 transition-all font-bold",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Instagram"
                                            }, void 0, false, {
                                                fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                lineNumber: 65,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 60,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                    lineNumber: 50,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl font-bold text-[#dfba00] mb-6",
                                            children: "Service Locations"
                                        }, void 0, false, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 73,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl",
                                                            children: "📍"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                            lineNumber: 77,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-white font-bold text-lg",
                                                                    children: "Hyderabad Central"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                                    lineNumber: 79,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white/70",
                                                                    children: "Quick availability & home services within 24-48 hours notice."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                                    lineNumber: 80,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                            lineNumber: 78,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                    lineNumber: 76,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-start space-x-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-2xl",
                                                            children: "✈️"
                                                        }, void 0, false, {
                                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                            lineNumber: 85,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "text-white font-bold text-lg",
                                                                    children: "All Over India"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                                    lineNumber: 87,
                                                                    columnNumber: 41
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-white/70",
                                                                    children: "Available for destination weddings. Travel & stay charges apply for outstation bookings."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                                    lineNumber: 88,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                            lineNumber: 86,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                            lineNumber: 75,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-10 p-4 bg-[#800000]/30 rounded-2xl border border-[#800000]/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-white text-sm text-center italic",
                                        children: "* Advance booking of 2-3 months is recommended for wedding season dates."
                                    }, void 0, false, {
                                        fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                        lineNumber: 95,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                                    lineNumber: 94,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                            lineNumber: 71,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/shahinamehndi/src/components/contact.tsx",
                    lineNumber: 17,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/shahinamehndi/src/components/contact.tsx",
            lineNumber: 6,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/shahinamehndi/src/components/contact.tsx",
        lineNumber: 5,
        columnNumber: 9
    }, this);
}
}),
"[project]/shahinamehndi/src/components/mainpage.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$home$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/src/components/home.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$service$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/src/components/service.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/src/components/gallery.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/src/components/contact.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/shahinamehndi/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
const navOptions = [
    {
        name: 'Home'
    },
    {
        name: 'Services'
    },
    {
        name: 'Gallery'
    },
    {
        name: 'Contact'
    }
];
function Header() {
    const [activeLink, setActiveLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Home');
    const renderContent = ()=>{
        if (activeLink === 'Home') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$home$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 24,
                columnNumber: 20
            }, this);
        } else if (activeLink === 'Services') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$service$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 26,
                columnNumber: 20
            }, this);
        } else if (activeLink === 'Gallery') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$gallery$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 28,
                columnNumber: 20
            }, this);
        } else if (activeLink === 'Contact') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$contact$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 30,
                columnNumber: 20
            }, this);
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$src$2f$components$2f$home$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
            lineNumber: 32,
            columnNumber: 16
        }, this); // Fallback component
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "w-full shadow-lg ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center px-4 ",
                children: [
                    "      ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/logo.png",
                        alt: "Shahina's Mehndi Logo",
                        width: 80,
                        height: 80,
                        className: "h-auto max-w-[80px] "
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                        lineNumber: 40,
                        columnNumber: 20
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center gap-4 mb-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-[8vw] md:text-7xl text-center whitespace-nowrap font-normal",
                            style: {
                                fontFamily: "'Dancing Script', cursive",
                                background: "linear-gradient(45deg, #d4af37, #f5de50, #b8860b)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)"
                            },
                            children: "Shahin's Mehndi"
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                            lineNumber: 53,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[#7d7460] text-xs md:text-sm font-light tracking-wide text-center uppercase opacity-90 max-w-[250px] md:max-w-none line-clamp-2",
                        style: {
                            textShadow: "1px 1px 1px rgba(0,0,0,0.7)"
                        },
                        children: "Where tradition meets intricate beauty"
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4 mt-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] w-12 bg-[#daa520] opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                                lineNumber: 76,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#daa520]",
                                children: "✦"
                            }, void 0, false, {
                                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                                lineNumber: 77,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "h-[1px] w-12 bg-[#daa520] opacity-70"
                            }, void 0, false, {
                                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                                lineNumber: 78,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                // Use w-full for full width, mt-8 and mb-4 for spacing
                className: "w-full mt-0 mb-0",
                style: {
                    height: '2px',
                    // The gradient starts transparent (dull), goes to gold (glow), back to transparent (dull)
                    background: 'linear-gradient(to right, transparent 0%, #DAA520 50%, transparent 100%)',
                    // Optional: Add a subtle box shadow to enhance the "glow" look
                    boxShadow: '0 0 15px rgba(218, 165, 32, 0.6)'
                }
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "w-full shadow-md bg-[var(--secondery)]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between h-12",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "  ",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-baseline space-x-4 ml-6",
                                children: navOptions.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        onClick: (e)=>{
                                            e.preventDefault(); // Prevents actual navigation, remove if using a router
                                            setActiveLink(item.name);
                                        },
                                        // Dynamically apply classes based on active state
                                        className: `
                                        px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out
                                        ${activeLink === item.name ? 'text-[#daa520] font-semibold border-b-2 border-[#daa520]' // Active (Gold)
                                         : 'text-white hover:text-[#daa520] hover:border-b-2 hover:border-[#daa520]' // Inactive (White with Gold hover)
                                        }
                                        bg-[var(--primary)] // Corrected syntax here as well
                                    `,
                                        children: item.name
                                    }, item.name, false, {
                                        fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                                        lineNumber: 103,
                                        columnNumber: 37
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                                lineNumber: 101,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                            lineNumber: 100,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 96,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$shahinamehndi$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                children: renderContent()
            }, void 0, false, {
                fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
                lineNumber: 134,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/shahinamehndi/src/components/mainpage.tsx",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c258b003._.js.map