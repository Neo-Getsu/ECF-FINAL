import React, { useState, useEffect } from 'react';
import { Button, Form, Row, Col, Table, Container } from 'react-bootstrap';
import axios from 'axios';

axios.defaults.withCredentials = true;

const AdminDashboard = () => {
    const [employees, setEmployees] = useState([]);
    const [form, setForm] = useState({
        email: '',
        role: '',
        firstName: '',
        lastName: ''
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get('http://localhost:5000/api/employees');
            setEmployees(data);
        } catch (err) {
            setError('Erreur de récupération des employés.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const addEmployee = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { data: newEmployee } = await axios.post('http://localhost:5000/api/employe', form);
            setEmployees(currentEmployees => [...currentEmployees, newEmployee]);
            // Réinitialiser le formulaire après l'ajout
            setForm({ email: '', role: '', firstName: '', lastName: '' });
        } catch (err) {
            setError('Erreur lors de l’ajout de l’employé.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const deleteEmployee = async (id) => {
        setLoading(true);
        setError('');
        try {
            // Supposons que l'endpoint de suppression retourne l'id de l'employé en cas de succès
            await axios.delete(`http://localhost:5000/api/employe/${id}`);
            setEmployees(currentEmployees => currentEmployees.filter(employee => employee.id !== id));
        } catch (err) {
            setError('Erreur de la suppression de l’employé.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <h2>Tableau de bord d'administration</h2>
            {loading && <p>Chargement des employés...</p>}
            <Table striped bordered hover responsive className="my-4">
                <thead>
                <tr>

                    <th>Email</th>
                    <th>Nom</th>
                    <th>Prénom</th>

                </tr>
                </thead>
                <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>

                        <td>{employee.email}</td>
                        <td>{employee.nom}</td>
                        <td>{employee.prenom}</td>

                        <td>
                            {/* Boutons Modifier et Supprimer */}
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>

            {error && <div style={{color: 'red', marginBottom: '10px'}}>{error}</div>}

            <h3>Ajouter un employé</h3>
            <Form onSubmit={addEmployee}>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleFormChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Rôle</Form.Label>
                            <Form.Control
                                type="text"
                                name="role"
                                value={form.role}
                                onChange={handleFormChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control
                                type="text"
                                name="lastName"
                                value={form.lastName}
                                onChange={handleFormChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                    <Col md={6}>
                        <Form.Group className="mb-3">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control
                                type="text"
                                name="firstName"
                                value={form.firstName}
                                onChange={handleFormChange}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Button variant="primary" type="submit">Ajouter</Button>
            </Form>
        </div>
    );
};

export default AdminDashboard;

