import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import MechanicImage from '../assets/img/logo/logo-parrot.png'; // Remplacez par le chemin correct de votre image

const AboutSection = () => {
    return (
        <section className="about-section">
            <Container>
                <Row>
                    <Col md={6} className="col-image">
                        <div className="image-container">
                            <Image src={MechanicImage} alt="Garage V. Parrot" fluid />
                        </div>
                    </Col>
                    <Col md={6} className="col-text">
                        <h2>À propos de Garage V. Parrot</h2>

                        <p>
                            Fondé en 2021 à Toulouse par Vincent Parrot, un mécanicien chevronné, notre garage offre des
                            services de haute qualité et un service client exceptionnel.
                        </p>
                        <h3 className="right-title">Notre Philosophie</h3>
                        <p className="right-content">
                            Nous valorisons la qualité, la transparence et le respect de l'environnement. Nous sommes
                            fiers d'offrir des services qui respectent les normes environnementales strictes.
                        </p>


                        <h3 className="left-title">L'Équipe</h3>
                        <p className="left-content">
                            Notre équipe dédiée est composée de spécialistes de l'automobile passionnés, garantissant
                            des services fiables et efficaces à chaque visite.
                        </p>


                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default AboutSection;
