import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-600 text-gray-300">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Ajio Section */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Ajio</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Who We Are</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Join Our Team</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors underline">Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">We Respect Your Privacy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Fees & Payments</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Returns & Refunds Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Promotions Terms & Conditions</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Blog</a></li>
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Help</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Track Your Order</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Frequently Asked Questions</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Returns</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Cancellations</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Payments</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Customer Care</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">How Do I Redeem My Coupon</a></li>
                        </ul>
                    </div>

                    {/* Shop by Section */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Shop by</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">All</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Men</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Women</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Kids</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Indie</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Stores</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">New Arrivals</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Brand Directory</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Home</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Collections</a></li>
                        </ul>
                    </div>

                    {/* Follow us Section */}
                    <div>
                        <h3 className="text-white font-medium text-lg mb-6">Follow us</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Facebook</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Instagram- AJIOlife</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Instagram- AJIO LUXE</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Twitter</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">Pinterest</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Separator Line */}
            <div className="border-t border-gray-600"></div>

            {/* Bottom Section - Payment Methods and Security */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
                    {/* Payment Methods */}
                    <div>
                        <h4 className="text-white font-medium text-base mb-4">Payment methods</h4>
                        <div className="flex flex-wrap items-center gap-4">
                            {/* Net Banking */}
                            <div className="flex items-center gap-2">
                                <span className="text-gray-300 text-sm">Net</span>
                                <div className="bg-white px-2 py-1 rounded text-xs font-medium text-gray-800">
                                    Banking
                                </div>
                            </div>

                            {/* Visa */}
                            <div className="bg-white px-3 py-1 rounded">
                                <span className="text-blue-700 font-bold text-sm italic">Verified by VISA</span>
                            </div>

                            {/* Mastercard */}
                            <div className="flex items-center">
                                <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-1">
                                    <div className="w-6 h-6 bg-yellow-400 rounded-full opacity-80"></div>
                                </div>
                            </div>

                            {/* Cash on Delivery */}
                            <div className="flex items-center gap-1">
                                <div className="text-white font-bold text-lg">₹</div>
                                <div>
                                    <div className="text-white font-bold text-xs">CASH ON</div>
                                    <div className="text-white font-bold text-xs">DELIVERY</div>
                                </div>
                            </div>

                            {/* Jio Money */}
                            <div className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold">
                                Jio Money
                            </div>
                        </div>
                    </div>

                    {/* Secure Systems */}
                    <div>
                        <h4 className="text-white font-medium text-base mb-4">Secure systems</h4>
                        <div className="flex items-center gap-2">
                            {/* SSL Icon */}
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white font-bold text-sm">256 BIT</div>
                                    <div className="text-gray-300 text-xs">SSL SECURE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;