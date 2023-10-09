
const ManagementBackground = () => {
    return (
        <div className="p-4 rounded shadow-md">
            <h2 className="text-2xl font-semibold mb-4">
                <span className="inline-block mr-2 text-yellow-500">👨‍💼</span>Management Background
            </h2>
            <ul className="list-none pl-6">
                <li className="mb-2">
                    <span className="inline-block mr-2">🎓</span>Experienced Professionals
                </li>
                <li>
                    <span className="inline-block mr-2">🏢</span>Diverse Expertise
                </li>
            </ul>
            <div className="mt-4">
                <h3 className="text-lg font-semibold mb-2">Available Facilities</h3>
                <ul className="list-none pl-6">
                    <li className="mb-2">
                        <span className="inline-block mr-2">🏢</span>Spacious Office in Addis Ababa
                    </li>
                    <li>
                        <span className="inline-block mr-2">🏭</span>Well-Equipped Store
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ManagementBackground;
