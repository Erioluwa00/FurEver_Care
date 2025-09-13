import Sidebar from "../../Component/Sidebar/Sidebar";
import "../../Styling/PetCareStyle.css";
import React, { useState, useEffect } from "react";
import Audio1 from "../../../../../assets/Audio/Audio1.mp3";
import Audio2 from "../../../../../assets/Audio/Audio2.mp3";
import Audio3 from "../../../../../assets/Audio/Audio3.mp3";

function TrainingTips() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [ownerName, setOwnerName] = useState("John Doe");

  const capitalize = (s) => {
    if (typeof s !== "string" || s.length === 0) return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  useEffect(() => {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      const userData = JSON.parse(currentUser);
      if (userData.fullName) {
        setOwnerName(capitalize(userData.fullName));
      }
    }
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
      <div class="header">
        <div class="header-content">
          <div class="header-logo">
            <i class="fas fa-paw"></i>
            <span>FurEver Care</span>
          </div>
          <div className="hamburger-menu" onClick={toggleSidebar}>
            <i className={`fas ${sidebarOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
        </div>
      </div>

      <div
        className={`overlay ${sidebarOpen ? "active" : ""}`}
        onClick={toggleSidebar}
      ></div>

      <div class="content-wrapper">
        <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
        <div class="main-content">
          <header class="dashboard-header">
            <div class="header-content">
              <h2 class="header-title">Training Tips</h2>
              <div class="user-profile">
                <img
                  src="https://images.unsplash.com/photo-1543852786-1cf6624b9987?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                  alt="User Avatar"
                  class="avatar"
                />
                <span>{ownerName}</span>
              </div>
            </div>
          </header>
          <div id="training-tips" class="section">
            <h2>Training Tips</h2>
            <p>Effective techniques to train and bond with your pet</p>

            <div class="card-grid">
              <div class="card">
                <div class="card-header">
                  <i class="fas fa-volume-up"></i>
                  <span>Audio Commands</span>
                </div>
                <div class="card-body">
                  <div class="tip-card">
                    <h4>
                      “Sit Command” - Plays an audio cue to help your pet learn
                      the “sit” command.
                    </h4>
                    <audio controls>
                      <source src={Audio1} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>

                  <div class="tip-card">
                    <h4>
                      “Come Command” - Plays an audio cue to call your pet over.
                    </h4>
                    <audio controls>
                      <source src={Audio2} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>

                  <div class="tip-card">
                    <h4>
                      “Go Command” - Plays an audio cue to guide your pet away
                      or toward a target.
                    </h4>
                    <audio controls>
                      <source src={Audio3} type="audio/mp3" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>

             
              <div class="card">
                <div class="card-header">
                  <i class="fas fa-puzzle-piece"></i>
                  <span>Behavior Solutions</span>
                </div>
                <div class="card-body">
                  <div class="tip-card">
                    <h4>Scratching Furniture</h4>
                    <p>
                      Provide appropriate scratching posts and use deterrent
                      sprays on furniture.
                    </p>
                  </div>
                  <div class="tip-card">
                    <h4>Litter Box Issues</h4>
                    <p>
                      Keep the box clean and try different litter types if your
                      cat is avoiding it.
                    </p>
                  </div>
                  <div class="tip-card">
                    <h4>Excessive Meowing</h4>
                    <p>
                      Ensure needs are met (food, water, attention) before
                      assuming it's behavioral.
                    </p>
                  </div>
                </div>
              </div>

              <div class="card">
                <div class="card-header">
                  <i class="fas fa-brain"></i>
                  <span>Mental Stimulation</span>
                </div>
                <div class="card-body">
                  <div class="tip-card">
                    <h4>Puzzle Feeders</h4>
                    <p>
                      Use food puzzles to make mealtime engaging and mentally
                      stimulating.
                    </p>
                  </div>
                  <div class="tip-card">
                    <h4>Training Sessions</h4>
                    <p>
                      Short, daily training sessions keep your pet's mind sharp.
                    </p>
                  </div>
                  <div class="tip-card">
                    <h4>New Toys</h4>
                    <p>
                      Rotate toys regularly to maintain novelty and interest.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <h3 style={{ marginTop: "30px" }}>Training Progress</h3>
            <div class="card">
              <div class="card-body">
                <div class="progress-container">
                  <div class="progress-label">
                    <span>Obedience Training</span>
                    <span>60%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style={{ width: "60%" }}></div>
                  </div>
                </div>

                <div class="progress-container">
                  <div class="progress-label">
                    <span>Behavioral Goals</span>
                    <span>80%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style={{ width: "80%" }}></div>
                  </div>
                </div>

                <div class="progress-container">
                  <div class="progress-label">
                    <span>Consistency</span>
                    <span>70%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-fill" style={{ width: "70%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default TrainingTips;
