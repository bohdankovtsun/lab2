import React, { useState, useEffect } from 'react';

function Footer() {
  // 1. Створюємо стан для відображення інфо
  const [sysInfo, setSysInfo] = useState('');

  useEffect(() => {
    // 2. Зчитуємо дані через navigator (Пункт 1 завдання)
    const info = `Браузер: ${navigator.userAgent} | Платформа: ${navigator.platform}`;
    
    // 3. Зберігаємо ці дані в localStorage (Вимога ЛР)
    localStorage.setItem('react_system_info', info);
    
    // 4. Отримуємо дані з localStorage назад і записуємо в стан
    const savedData = localStorage.getItem('react_system_info');
    setSysInfo(savedData);
    
  }, []); // Порожній масив [] означає: виконати 1 раз при старті додатка

  return (
    <footer className="mt-12 py-8 bg-gray-900 text-gray-400 rounded-t-3xl text-center">
      <p className="text-white font-bold mb-2">© 2026 Ковцун Богдан</p>

      {/* Відображення системної інформації (Пункт 1 завдання) */}
      <div className="text-[10px] opacity-40 px-4 mb-4 italic leading-tight">
        Системна інформація (з LocalStorage): <br/> {sysInfo}
      </div>

      <div className="flex justify-center gap-6 text-sm text-blue-400">
        <a href="https://github.com/bohdankovtsun" target="_blank" className="hover:underline transition-all">GitHub</a>
        <a href="mailto:bogdan2006kov@gmail.com" className="hover:underline transition-all">Email</a>
      </div>
    </footer>
  );
}

export default Footer;