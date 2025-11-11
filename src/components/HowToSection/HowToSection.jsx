import React from 'react';

const HowToSection = () => {
    return (
        <div className="text-gray-800 bg-base-200 py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">How It Works</h1>

                <div className="space-y-4">
                    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg shadow-sm">
                        <input type="radio" name="faq-accordion" defaultChecked />
                        <div className="collapse-title font-semibold text-lg">
                            How do I start managing my bills?
                        </div>
                        <div className="collapse-content text-sm text-gray-600">
                            Simply click the <span className="font-semibold">"Sign Up"</span> button at the top right corner, create your account, and start adding or paying your utility bills from the dashboard.
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg shadow-sm">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            How can I pay my utility bills through this platform?
                        </div>
                        <div className="collapse-content text-sm text-gray-600">
                            Go to the <span className="font-semibold">"Bills"</span> section, select your desired bill, and click <span className="font-semibold">"Pay Bill"</span>. Fill in your details and confirm the payment securely.
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg shadow-sm">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            Where can I see all the bills I’ve paid?
                        </div>
                        <div className="collapse-content text-sm text-gray-600">
                            You can view your payment history in the <span className="font-semibold">"My Bills"</span> page. It shows all your paid bills with details and lets you download a full report anytime.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowToSection;
