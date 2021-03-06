import React from "react";
import Burger from "../assets/burger_app.jpg";
import Day from "../assets/day-scheduler.jpg";
import Password from "../assets/end.jpg";
import Start from "../assets/start.jpg";
import Travel from "../assets/travel.jpg";
import Workout from "../assets/workout.jpg";
function Portfolio() {
  return (
    <div className="container">
      <h1>Portfolio</h1>
      <div className="row p-1">
        <div className="col-md-6 p-1">
          <div className="card">
            <img
              src={Day}
              className="card-img-top img-fluid"
              alt="a day scheduler project"
            />
            <div className="card-body">
              <h5 className="card-title">Day Scheduler</h5>
              <p className="card-text">
                A day scheduler app that allows you to add events and saves them
                in your browser.
              </p>
              <a
                href="https://dad1977ut.github.io/Work-Day-Scheduler/"
                className="btn btn-primary"
              >
                Open website
              </a>
              <a
                href="https://github.com/dad1977ut/Work-Day-Scheduler"
                className="btn btn-primary"
              >
                Open repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-1">
          <div className="card">
            <img
              src={Travel}
              className="card-img-top img-fluid"
              alt="Travel planner project"
            />
            <div className="card-body">
              <h5 className="card-title">Travel planner</h5>
              <p className="card-text">
                This app is used to plan an upcoming trip
              </p>
              <a
                href="https://arianaw15.github.io/Trip-Itinerary/"
                className="btn btn-primary"
              >
                Open website
              </a>
              <a
                href="https://github.com/arianaw15/Trip-Itinerary"
                className="btn btn-primary"
              >
                Open repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-1">
        <div className="col-md-6 p-1">
          <div className="card">
            <img src={Start} className="card-img-top img-fluid" alt="quiz" />
            <div className="card-body">
              <h5 className="card-title">Code Quiz</h5>
              <p className="card-text">This a code quiz app</p>
              <a
                href="https://dad1977ut.github.io/Code-Quiz/"
                className="btn btn-primary"
              >
                Open website
              </a>
              <a
                href="https://github.com/dad1977ut/Code-Quiz"
                className="btn btn-primary"
              >
                Open repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-1">
          <div className="card">
            <img
              src={Workout}
              className="card-img-top img-fluid"
              alt="workout"
            />
            <div className="card-body">
              <h5 className="card-title">Workout-Tracker</h5>
              <p className="card-text">This is a app to help track workouts</p>
              <a
                href="https://obscure-chamber-77092.herokuapp.com/"
                className="btn btn-primary"
              >
                Open website
              </a>
              <a
                href="https://github.com/dad1977ut/Workout-Tracker"
                className="btn btn-primary"
              >
                Open repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row p-1">
        <div className="col-md-6 p-1">
          <div className="card">
            <img
              src={Burger}
              className="card-img-top img-fluid"
              alt="workout"
            />
            <div className="card-body">
              <h5 className="card-title">Burger app</h5>
              <p className="card-text">Creates burgers</p>
              <a
                href="https://lit-dawn-18330.herokuapp.com/"
                className="btn btn-primary"
              >
                Open website
              </a>
              <a
                href="https://github.com/dad1977ut/burger"
                className="btn btn-primary"
              >
                Open repo
              </a>
            </div>
          </div>
        </div>
        <div className="col-md-6 p-1">
          <div className="card">
            <img
              src={Password}
              className="card-img-top img-fluid"
              alt="workout"
            />
            <div className="card-body">
              <h5 className="card-title">Password Generator</h5>
              <p className="card-text">Creates a password</p>
              <a
                href="https://dad1977ut.github.io/Password-Generator/"
                className="btn btn-primary"
              >
                Open website
              </a>
              <a
                href="https://github.com/dad1977ut/Password-Generator"
                className="btn btn-primary"
              >
                Open repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Portfolio;
