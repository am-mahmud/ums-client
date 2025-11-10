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
                            How do I create an account?
                        </div>
                        <div className="collapse-content text-sm text-gray-600">
                            Click the <span className="font-semibold">"Sign Up"</span> button in the top right corner and follow the registration process.
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg shadow-sm">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            I forgot my password. What should I do?
                        </div>
                        <div className="collapse-content text-sm text-gray-600">
                            Click on <span className="font-semibold">"Forgot Password"</span> on the login page and follow the instructions sent to your email.
                        </div>
                    </div>

                    <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg shadow-sm">
                        <input type="radio" name="faq-accordion" />
                        <div className="collapse-title font-semibold text-lg">
                            How do I update my profile information?
                        </div>
                        <div className="collapse-content text-sm text-gray-600">
                            Go to <span className="font-semibold">"My Account"</span> settings and select <span className="font-semibold">"Edit Profile"</span> to make changes.
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default HowToSection;