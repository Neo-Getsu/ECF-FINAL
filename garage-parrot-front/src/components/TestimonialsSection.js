import React from 'react';

const TestimonialsSection = () => {
    const testimonials = [
        { id: 1, message: "Service impeccable et accueil chaleureux. Ma voiture est comme neuve !", name: "Jean Dupont", rating: 5 },
        { id: 2, message: "Réparations rapides et prix abordables. Je recommande vivement !", name: "Sophie Lemaire", rating: 4 },
        { id: 3, message: "Un personnel compétent et un service fiable. Un garage de confiance.", name: "Lucas Martin", rating: 5 },
        { id: 4, message: "Qualité de service exceptionnelle et conseils d'experts. Très satisfait.", name: "Amélie Durand", rating: 5 },
        { id: 5, message: "Prise en charge rapide et travail soigné. Je suis très content du résultat.", name: "Émile Zola", rating: 4 },
    ];

    return (
        <div className="testimonials-section">
            <div className="container my-5">
                <h1 className="text-center mb-4">Témoignages</h1>
                <div className="testimonials-grid">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.id} className="testimonial-card">
                            <div className="testimonial-content">
                                <p>{testimonial.message}</p>
                                <footer>
                                    <div className="testimonial-name">{testimonial.name}</div>
                                    <div className="testimonial-rating">
                                        {'★'.repeat(testimonial.rating)}
                                    </div>
                                </footer>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TestimonialsSection;
