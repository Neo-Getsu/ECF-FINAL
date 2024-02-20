import React from 'react';
import VehicleCard from '../components/VehicleCard';
import { Container, Row, Col } from 'react-bootstrap';

import sellCar from '../assets/img/logo/logocar1.png';
import sellCar2 from '../assets/img/logo/logocar2.png';
import sellCar3 from '../assets/img/logo/logocar3.png';





const VehicleList = () => {
    const vehiclesData = [
        {
            id: 1,
            title: "Peugeot 208",
            price: "10 500€",
            year: "2017",
            mileage: "50 000 km",
            imageUrl:sellCar,
            description: "Une citadine agile et économique.",
            model: "Model Vehicule",
        },
        {
            id: 2,
            title: "Renault Clio",
            model: "Model Vehicule",
            price: "8 300€",
            year: "2015",
            mileage: "85 000 km",
            imageUrl: sellCar2,
            description: "Parfait pour la ville et les petits trajets."
        },

        {
            id: 10,
            title: "Audi A4",
            model: "Model Vehicule",
            price: "22 000€",
            year: "2019",
            mileage: "30 000 km",
            imageUrl: sellCar3,
            description: "Confort et élégance, une berline premium."
        }
    ];

    return (
        <Container className="vehicle-list-container">


            <Row>
                <h2 className="mt-3"> Véhicule d'occasions</h2>
                {vehiclesData.map(vehicle => (
                    <Col sm={12} md={6} lg={4} key={vehicle.id}>
                        <VehicleCard vehicle={vehicle}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default VehicleList;
