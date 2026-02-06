"use client";
import React, { useState } from "react";

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
        desc: "Detailed 2026 portrait designs featuring couple caricatures, proposal scenes, and hidden initials.",
    },
    {
        title: "Organic Arabic Fusion",
        image: "/k.png",
        desc: "Bold Arabic strokes mixed with delicate jaali work using 100% chemical-free organic henna.",
    },
    {
        title: "Minimalist Mandalas",
        image: "/min.png",
        desc: "Symmetrical central mandalas with intricate finger lace-work for the contemporary, understated bride.",
    },
    {
        title: "Group Bookings",
        image: "/group.png",
        desc: "Special discounted packages for bridesmaids and family members (Minimum 10 persons).",
    },
];

export default function Services() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <main className="min-h-screen py-20 px-6 bg-[#0a0a0a]">
            <div className="max-w-5xl mx-auto"> {/* Reduced max-width for a tighter look */}
                <h1 className="text-2xl md:text-5xl text-[#dfba00] text-center mb-4 uppercase tracking-tighter">
                    Our Specialised Services
                </h1>
                <p className="text-white/60 text-center mb-16 max-w-xl mx-auto text-sm md:text-base">
                    From traditional patterns to 2026's latest "hidden story" trends, we bring your vision to life with precision.
                </p>

                <div className="grid grid-cols-1 gap-10"> {/* Reduced gap between sections */}
                    {services.map((item, index) => (
                        <div
                            key={index}
                            className={`group flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} 
                            bg-white/5 backdrop-blur-sm border border-white/10 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:bg-white/10 shadow-xl`}
                        >
                            {/* Image Container */}
                            <div className="w-full md:w-1/3 aspect-square md:h-[320px] relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                            </div>

                            {/* Content Container */}
                            <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#dfba00] mb-3">{item.title}</h3>
                                    <p className="text-gray-400 text-base mb-6 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>

                                <div className="flex flex-row justify-between items-center border-t border-white/10 pt-5">
                                    {/* Empty for now */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <section className="min-h-screen bg-[#0a0a0a] py-20 ">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-2xl md:text-2xl text-[#dfba00] text-center mb-4 uppercase tracking-tighter">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-white/60 text-center mb-12 italic">Everything you need to know about your henna experience.</p>

                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-md transition-all duration-300"
                            >
                                <button
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                >
                                    <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                                    <span className={`text-[#dfba00] text-2xl transition-transform duration-300 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                                        +
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <p className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
