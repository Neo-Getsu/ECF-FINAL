import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Assurez-vous d'avoir importé axios
import { useNavigate } from 'react-router-dom'; // Importez useNavigate

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum huit caractères, au moins une lettre et un chiffre

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailValid(emailRegex.test(value));
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setPasswordValid(passwordRegex.test(value));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        if (!emailValid || !passwordValid) {
            setError('Veuillez corriger les erreurs avant de soumettre.');
            setLoading(false);
            return;
        }

        try {
            const response = await axios.post('http://localhost:5000/api/auth', { email, password });
            console.log(response.data);
            const role = response.data.role;
            setLoading(false);
            
            if (role === 'administrateur') {
                navigate('/admin');
            } else if (role === 'employe') {
                navigate('/employe');
            } else {

                setError('Accès refusé.');
            }
        } catch (err) {
            setError('Erreur de connexion');
            setLoading(false);
        }
    };

    return (
        <Container className="login-container">
            <h2>Connexion</h2>
            <Form className="login-form" onSubmit={handleLogin}>
                <Form.Group controlId="loginForm.Username">
                    <Form.Label>Utilisateur</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Adresse e-mail"
                        isInvalid={!emailValid}
                        onChange={handleEmailChange}
                        onFocus={() => setEmailValid(true)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Veuillez entrer une adresse e-mail valide.
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="loginForm.Password">
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Mot de passe"
                        isInvalid={!passwordValid}
                        onChange={handlePasswordChange}
                        onFocus={() => setPasswordValid(true)}
                    />
                    <Form.Control.Feedback type="invalid">
                        Le mot de passe doit contenir au moins 8 caractères, une lettre et un chiffre.
                    </Form.Control.Feedback>
                </Form.Group>

                {error && <div style={{ color: 'red' }}>{error}</div>}

                <Button variant="primary" type="submit" className="login-btn" disabled={loading}>
                    {loading ? 'Connexion...' : 'Se connecter'}
                </Button>
            </Form>
        </Container>
    );
};

export default Login;
