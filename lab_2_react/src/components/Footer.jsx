function Footer() {
    return (
        <footer className="mt-12 py-8 bg-gray-900 text-gray-300 rounded-t-3xl shadow-inner text-center">
            {/* Копірайт: напівжирний, з невеликим відступом */}
            <p className="text-lg font-bold text-white mb-4 tracking-wide">
                © 2026 Bohdan Kovtsun
            </p>

            {/* Контакти: флекс-контейнер для вирівнювання посилань */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">

                {/* Посилання на GitHub з ефектом підсвічування при наведенні */}
                <p className="flex items-center group">
                    <span className="mr-2">🔗</span>
                    GitHub:
                    <a
                        href="https://github.com/bohdankovtsun"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-1 text-blue-400 font-semibold transition-colors duration-300 hover:text-blue-300 hover:underline"
                    >
                        My profile
                    </a>
                </p>

                {/* Пошта: виправлено "messages" та додано стилізацію */}
                <p className="flex items-center group">
                    <span className="mr-2">📧</span>
                    Messages:
                    <a
                        href="mailto:bohdan2006kov@gmail.com"
                        className="ml-1 text-blue-400 font-semibold transition-colors duration-300 hover:text-blue-300 hover:underline"
                    >
                        bohdan2006kov@gmail.com
                    </a>
                </p>
            </div>

            {/* Маленька декоративна лінія внизу */}
            <div className="mt-6 mx-auto w-12 h-1 bg-blue-600 rounded-full opacity-50"></div>
        </footer>
    );
}

export default Footer;