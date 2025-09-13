import React from "react";
import ShelterNavbar from "../components/ShelterNavbar";
import "../css/ShelterEvents.css";
import eventsData from "../data/events.json";
import Footer from "../../../Components/Footer/Footer";

function ShelterEvents() {
    const events = eventsData.events;
    return (
        <>
            <ShelterNavbar />
            <section className="hero-section-inner">
              <div className="container">
                <h1 className="section-title">Upcoming Events</h1>
                <p>Join us for our upcoming events to support our shelter and meet some of our adorable pets.</p>
              </div>
            </section>
            <div className="shelter-events-page">
                <div className="events-container">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            <img src={event.image} alt={event.title} />
                            <h3 className="left">{event.title}</h3>
                            <div className="event-details text-left">
                            <p>{event.description}</p>
                            <p><strong>Date:</strong> {event.date}</p>
                            <p><strong>Location:</strong> {event.location}</p>
                            </div> 
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
export default ShelterEvents;
