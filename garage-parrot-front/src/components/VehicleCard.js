import React from 'react';

import PropTypes from 'prop-types';
const VehicleCard = ({ vehicle }) => {
    return (
        <div className="vehicle-card">
            <img src={vehicle.imageUrl} alt={vehicle.model} className="vehicle-image" />
            <div className="vehicle-details">
                <h3 className="vehicle-title">{vehicle.model}</h3>
                <span className="badge year-badge">{vehicle.year}</span>
                <span className="badge mileage-badge">
          <i className="fas fa-tachometer-alt"></i>
                    {vehicle.mileage}
        </span>
                <div className="price-and-details">
                    <p className="vehicle-price">{vehicle.price}</p>
                    <button className="btn-view-details">Voir détails</button>
                </div>
            </div>
        </div>
    );
};
VehicleCard.propTypes = {
    vehicle: PropTypes.shape({
        imageUrl: PropTypes.string.isRequired,
        model: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        mileage: PropTypes.string.isRequired,
    }).isRequired
};
export default VehicleCard;
