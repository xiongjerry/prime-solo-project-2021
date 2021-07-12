import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1>About Read-Star!</h1>
        <p>Read-Star was developed to help children visualize goals with guardians and parents through the use of reading within a 2-week period.</p>
      </div>

      <div>
        <h1>Technicalities</h1> 
        <p>Some code blocks include learning how to update a progress bar, resetting my database multiple time, and learning async routes.</p>
      </div>

      <div>
        <h1>Technologies Used:</h1>
        <ul>
          <li>react</li>
          <li>react-redux</li>
          <li>html and css</li>
          <li>material-ui</li>
          <li>node</li>
          <li>google books api</li>
          <li>postgresql</li>
        </ul>
      </div>

      <div></div>
      <h1>Future Features</h1>
      <ul>
          <li>avatars for each reader</li>
          <li>pixabay api to display visual img for reward</li>
        </ul>
    </div>
  );
}

export default AboutPage;
