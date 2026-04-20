import React, { useState, useEffect } from 'react';

function Reviews() {
    // Стан для зберігання списку коментарів
    const [comments, setComments] = useState([]);

   
    const myVariant = 5;

    useEffect(() => {
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${myVariant}/comments`)
            .then(response => response.json()) 
            .then(data => {
                
                setComments(data.slice(0, 4));
            })
            .catch(error => console.error("Помилка завантаження відгуків:", error));
    }, []); 

    return (
        <section className="my-10 p-8 bg-white rounded-3xl shadow-xl border-t-8 border-blue-600 transition-all hover:shadow-2xl">
            <h2 className="text-3xl font-black text-gray-800 mb-8 uppercase tracking-tighter">
                Відгуки роботодавців (Dynamic Data)
            </h2>

            <div className="grid gap-6">
                {comments.map((comment) => (
                    <div key={comment.id} className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 transition-transform hover:scale-[1.01]">
                        <p className="text-blue-700 font-bold text-sm mb-2 lowercase italic">
                            {comment.email}
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            "{comment.body}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews;