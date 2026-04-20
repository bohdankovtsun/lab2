import React, { useState, useEffect } from 'react';

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            if (!sessionStorage.getItem('modal_closed')) {
                setIsOpen(true);
            }
        }, 600);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        // Запам'ятовуємо, що користувач закрив вікно
        sessionStorage.setItem('modal_closed', 'true');
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-6 animate-in fade-in duration-500">
            <div className="bg-white p-8 md:p-10 rounded-[40px] shadow-2xl max-w-lg w-full relative border border-gray-100">

                {/* Кнопка закриття */}
                <button
                    onClick={handleClose}
                    className="absolute top-6 right-6 text-4xl font-thin text-gray-400 hover:text-red-500 transition-colors"
                >
                    &times;
                </button>

                <h2 className="text-3xl font-black mb-8 text-gray-900 text-center uppercase tracking-tighter">
                    Зворотний зв'язок
                </h2>

                {/* ТВОЯ ФОРМА З ПРАВИЛЬНИМ ПОСИЛАННЯМ */}
                <form
                    action="https://formspree.io/f/xnjoolgw"
                    method="POST"
                    className="flex flex-col gap-4"
                >
                    {/* Поле: Ім'я */}
                    <input
                        name="Ім'я"
                        type="text"
                        placeholder="Ваше ім'я"
                        required
                        className="p-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />

                    {/* Поле: Email */}
                    <input
                        name="Email"
                        type="email"
                        placeholder="Ваш Email"
                        required
                        className="p-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />

                    {/* Поле: Номер телефону */}
                    <input
                        name="Телефон"
                        type="tel"
                        placeholder="Номер телефону"
                        required
                        className="p-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    />

                    {/* Поле: Текст повідомлення */}
                    <textarea
                        name="Повідомлення"
                        placeholder="Текст повідомлення..."
                        required
                        className="p-4 bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-all h-32 resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-5 rounded-2xl font-black text-xl hover:bg-blue-700 hover:shadow-xl transition-all active:scale-95 shadow-lg shadow-blue-100 mt-2"
                    >
                        Відправити
                    </button>

                </form>
            </div>
        </div>
    );
}

export default ContactForm;