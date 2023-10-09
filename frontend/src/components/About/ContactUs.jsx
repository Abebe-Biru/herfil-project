
const ContactUs = () => {
    return (
        <div className="p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
                <span className="inline-block mr-2 text-yellow-500">📞</span>Contact Us
            </h2>
            <div className="mb-2">
                <span className="inline-block mr-2">🇪🇹 Ethiopia:</span>
                <a href="tel:+251911200845">+251911200845</a>
            </div>
            <div className="mb-2">
                <span className="inline-block mr-2">🇺🇸 USA:</span>
                <a href="tel:+571-276-4952">+571-276-4952</a>
            </div>
            <div className="mb-2">
                <span className="inline-block mr-2">🇸🇬 Singapore:</span>
                <a href="[Contact Information]">--</a>
            </div>
        </div>
    );
};

export default ContactUs;
