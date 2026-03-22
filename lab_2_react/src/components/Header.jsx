import React from 'react';

function Header() {
    return (
        <header className="flex flex-col items-center bg-blue-600 text-white p-10 shadow-2xl rounded-3xl mb-10 transition-all duration-300 hover:bg-blue-700 hover:scale-[1.02] cursor-default">
            {/* Ім'я: великий шрифт, жирний, з невеликим відступом між літерами */}
            <h1 className="text-5xl font-black mb-2 tracking-tight">
                Bohdan Kovtsun
            </h1>

            {/* Посада: середній розмір, напівпрозорий, курсив */}
            <p className="text-2xl font-semibold opacity-90 italic">
                Frontend Developer
            </p>

            {/* Контакти: окремий блок з фоном для виділення */}
            <div className="mt-4 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20">
                <p className="text-sm font-medium tracking-wide">
                    Email: <span className="font-mono">bohdan2006@gmail.com</span>
                </p>
            </div>
        </header>
    );
}

export default Header;