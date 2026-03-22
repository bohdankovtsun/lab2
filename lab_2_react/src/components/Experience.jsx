function Experience() {
    return (
        <section className="bg-white p-8 rounded-2xl shadow-lg border-l-8 border-blue-600 mb-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-default">
           
            <h2 className="text-3xl font-extrabold text-gray-800 mb-6 border-b-2 border-blue-50 pb-2 tracking-tight">
                My Experience
            </h2>

            <ul className="space-y-4">
                
                <li className="flex items-center p-3 rounded-xl transition-colors hover:bg-blue-50 group">
                    
                    <span className="w-3 h-3 bg-blue-500 rounded-sm mr-4 group-hover:scale-125 transition-transform"></span>

                    <p className="text-lg text-gray-700 font-medium">
                        <span className="text-blue-600 font-bold">HTML/CSS</span> — Base level
                    </p>
                </li>

                
                <li className="flex items-center p-3 rounded-xl transition-colors hover:bg-blue-50 group">
                    <span className="w-3 h-3 bg-blue-500 rounded-sm mr-4 group-hover:scale-125 transition-transform"></span>
                    <p className="text-lg text-gray-700 font-medium">
                        <span className="text-blue-600 font-bold">Git & GitHub</span> — Working with repositories
                    </p>
                </li>
            </ul>
        </section>
    );
}

export default Experience;