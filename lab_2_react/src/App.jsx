// 1. Спочатку імпортуємо всі наші компоненти
import Header from './components/Header';
import Experience from './components/Experience'; // Якщо ти вже створив цей файл
import Footer from './components/Footer';

function App() {
    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', fontFamily: 'Arial' }}>

            {/* 2. Викликаємо компоненти як теги */}
            <Header />

            <main>
                <Experience />
                {/* Можеш додати сюди ще якийсь текст або компоненти */}
            </main>

            <Footer />

        </div>
    );
}

export default App;