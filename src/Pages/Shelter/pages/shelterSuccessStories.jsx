import React from "react";
import ShelterNavbar from "../components/ShelterNavbar";
import "../css/shelterSuccessStories.css";
import successStoriesData from "../data/successStories.json";
import Footer from "../../../Components/Footer/Footer";

function ShelterSuccessStories() {
  const allStories = successStoriesData.adoptionStories;
  const stories = [
    ...allStories.dogs,
    ...allStories.cats,
    ...allStories.rabbits,
  ];

  return (
    <>
      <ShelterNavbar />
      <section className="hero-section-inner">
        <div className="container">
          <h1 className="section-title">Success Stories</h1>
          <p>
            Read about the heartwarming success stories of pets that have found
            their forever homes through our shelter.
          </p>
        </div>
      </section>
      <div className="success-stories-page">
        <div className="success-stories-container">
          <div className="stories-container">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className={`story-wrapper ${
                  index % 2 === 0 ? "image-left" : "image-right"
                }`}
              >
                <div className="story-visual">
                  <div className="story-image-container">
                    <img
                      src={story.image}
                      alt={story.name}
                      className="story-image"
                    />
                  </div>
                </div>

                <div className="story-content-container">
                  <div className="story-content">
                    <span className="adoption-badge">Success Story</span>
                    <h3>{story.title}</h3>
                    <p className="story-text">{story.story}</p>
                    <div className="story-details">
                      <p>
                        <strong>Adopted on:</strong> {story.adoptedOn}
                      </p>
                      <p>
                        <strong>Location:</strong> {story.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ShelterSuccessStories;