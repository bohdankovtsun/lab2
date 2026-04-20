import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Reviews from './components/Reviews'; // Підключаємо відгуки
import ContactForm from './components/ContactForm'; // Підключаємо форму

function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        
        const hours = new Date().getHours();
       
        if (hours >= 7 && hours < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <div className={theme === 'dark' ? 'bg-gray-800 text-white min-h-screen transition-all duration-700' : 'bg-gray-50 text-gray-900 min-h-screen transition-all duration-700'}>
            <div className="max-w-4xl mx-auto p-8">

                {/* Кнопка ручного перемикання теми */}
                <div className="flex justify-end mb-8">
                    <button
                        onClick={toggleTheme}
                        className="px-6 py-2 rounded-full border-2 border-blue-600 text-blue-600 font-bold hover:bg-blue-600 hover:text-white transition-all shadow-md active:scale-90"
                    >
                        {theme === 'light' ? 'Нічний режим' : 'Денний режим'}
                    </button>
                </div>

                <Header />
                <main>
                    <Experience />
                    <Reviews /> {/* Відображаємо блок відгуків */}
                </main>
                <Footer />

                <ContactForm /> {/* Модальне вікно (з'явиться через 1 хв) */}
            </div>
        </div>
    );
}

export default App;