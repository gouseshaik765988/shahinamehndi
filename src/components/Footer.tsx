import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#3a3737] text-white pt-16 pb-8 px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-12">

                {/* Brand Section */}
                <div className="space-y-4 ">
                    <img
                        src="/logo.png"
                        alt="Shahina's Mehndi Logo"
                        width={40} // Adjust size as needed
                        height={40} // Adjust size as needed
                        className="h-auto max-w-[80px]"
                    />
                    <h2 className="text-2xl font-bold text-[#dfba00] tracking-widest uppercase">
                        Shahina Mehndi
                    </h2>
                    <p className="text-gray-300 max-w-xs">
                        Exquisite bridal artistry and traditional henna services for your most precious moments.
                    </p>
                </div>

                {/* Contact Details */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-[#dfba00]">Get in Touch</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center group">
                            <span className="mr-3 text-[#800000] bg-white rounded-full p-1 text-sm group-hover:scale-110 transition-transform">📞</span>
                            <a href="tel:+917659889124" className="hover:text-[#dfba00] transition-colors">+91 76598 89124</a>
                        </li>
                        <li className="flex items-center group">
                            <span className="mr-3 text-[#800000] bg-white rounded-full p-1 text-sm group-hover:scale-110 transition-transform">✉️</span>
                            <a href="mailto:shahina3211@gmail.com" className="hover:text-[#dfba00] transition-colors lowercase">shahina3211@gmail.com</a>
                        </li>
                    </ul>
                </div>

                {/* Working Hours/Location */}
                <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-[#dfba00]">Availability</h4>
                    <p className="text-gray-300">
                        Mon - Sun: 09:00 AM - 09:00 PM<br />
                        <span className="text-sm italic">Booking required for Bridal Mehndi</span>
                    </p>
                </div>
            </div>

            {/* Bottom Copyright */}
            <div className="max-w-6xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                <p>© 2026 Shahina Mehndi Artist. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-[#dfba00]">Privacy Policy</a>
                    <a href="#" className="hover:text-[#dfba00]">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
}