import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          As adults, we live a busy life and may often regret our lack of time and energy to spend more time with our family.
          As we know, the most crucial part of a child’s growth takes place during their adolescent years.
          Introducing Read-Star, a mobile friendly web-abb that strengthens a parent’s/caregiver’s relationship with their child through a goal and reward system based on reading.
          This racing-themed app creates a “road to success” for your child by helping your child visualize goals and rewarding them upon completion.
          Here, goals act as a set number of books agreed upon by you and your child.
          Then, a reward should also be determined. Say if your child really wanted that new toy, we can add that toy as a reward.
          Parents would then find a copy of a book suitable for their child and add it to the “road goal” via the app.
          Once a book is added, it’s up to you and your child to get reading and make them a “Read-Star!” 
          </p>

        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
