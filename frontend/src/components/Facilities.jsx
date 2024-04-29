/* eslint-disable no-unused-vars */
import React from 'react'

const Facilities = () => {
    const services = [
        {
          id: 1,
          url: "/cattering1.avif",
          title: "Cattering Facility",
        },
        {
          id: 2,
          url: "/openhall.jpg",
          title: "Indoor and outdoor Function Hall",
        },
        {
          id: 3,
          url: "/parking.jpg",
          title: "Parking Facility",
        },
      ];
  return (
    <div className="services container">
        <h2>OUR FACILITIES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
  )
}

export default Facilities