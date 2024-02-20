import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';


const Contact = () => {
    return (
        <Container className="contact-form">
            <h2>Contactez-Nous</h2>
            <Form>
                <Form.Group controlId="contactForm.Name">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Votre nom" />
                </Form.Group>

                <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Votre email" />
                </Form.Group>

                <Form.Group controlId="contactForm.Phone">
                    <Form.Label>Téléphone</Form.Label>
                    <Form.Control type="tel" placeholder="Votre numéro de téléphone" />
                </Form.Group>

                <Form.Group controlId="contactForm.Subject">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control type="text" placeholder="Le sujet de votre message" />
                </Form.Group>

                <Form.Group controlId="contactForm.Message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={4} placeholder="Votre message" />
                </Form.Group>

                <Button variant="primary" type="submit" className="submit-btn">
                    Envoyer
                </Button>
            </Form>
        </Container>
    );
};

export default Contact;
