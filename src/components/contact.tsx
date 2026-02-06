import React from "react";

export default function Contact() {
    return (
        <main className="min-h-screen  py-20 px-6">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold text-[#dfba00] uppercase tracking-tighter mb-4">
                        Get In Touch
                    </h1>
                    <p className="text-white/80 text-lg">
                        Available for Bridal Bookings & Events across India
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* Quick Contact Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl space-y-8">
                        <h3 className="text-2xl font-bold text-[#dfba00] mb-6">Contact Info</h3>

                        {/* Phone */}
                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 bg-[#800000] rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                                📞
                            </div>
                            <div>
                                <p className="text-white/60 text-sm">Call or Text</p>
                                <a href="tel:+917396405569" className="text-white font-bold text-lg hover:text-[#dfba00] transition-colors">
                                    +91 73964 05569
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 bg-[#800000] rounded-2xl flex items-center justify-center text-xl shadow-lg group-hover:scale-110 transition-transform">
                                ✉️
                            </div>
                            <div>
                                <p className="text-white/60 text-sm">Email Us</p>
                                <a href="mailto:shahina3211@gmail.com" className="text-white font-bold text-lg hover:text-[#dfba00] transition-colors lowercase">
                                    shahina3211@gmail.com
                                </a>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex space-x-4 pt-4 border-t border-white/10">
                            {/* WhatsApp Link */}
                            <a
                                href="https://wa.me"
                                target="_blank"
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-2xl flex items-center justify-center space-x-2 transition-all font-bold"
                            >
                                <span>WhatsApp</span>
                            </a>
                            {/* Instagram Link - Update URL below */}
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                className="flex-1 bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 hover:opacity-90 text-white py-3 rounded-2xl flex items-center justify-center space-x-2 transition-all font-bold"
                            >
                                <span>Instagram</span>
                            </a>
                        </div>
                    </div>

                    {/* Availability Card */}
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold text-[#dfba00] mb-6">Service Locations</h3>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="text-2xl">📍</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">Hyderabad Central</h4>
                                        <p className="text-white/70">Quick availability & home services within 24-48 hours notice.</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="text-2xl">✈️</div>
                                    <div>
                                        <h4 className="text-white font-bold text-lg">All Over India</h4>
                                        <p className="text-white/70">Available for destination weddings. Travel & stay charges apply for outstation bookings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10 p-4 bg-[#800000]/30 rounded-2xl border border-[#800000]/50">
                            <p className="text-white text-sm text-center italic">
                                * Advance booking of 2-3 months is recommended for wedding season dates.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
    );
}
