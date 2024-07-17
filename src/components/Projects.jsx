import React from 'react';
import './projects.css';

const Projects = () => (
  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li>
        <strong>Stock Price Prediction:</strong>
        Historical stock prices are normalized and transformed into sequences of 60 days, which are used to train a Recurrent Neural Network (RNN) to predict the next day's stock price, capturing temporal dependencies in the data. The trained RNN model processes new sequences of test data to predict future stock prices, which are then inverse-transformed to their original scale for accurate comparison with actual prices, visualized through plotting.
      </li>
      <li>
        <strong>Music Suggestion App:</strong>
        Developed an application that allows users to search for songs, receive suggestions based on their preferences, and explore detailed information about each song. Designed a well-structured schema in MongoDB to handle complex relationships and queries, optimizing data retrieval and storage.
      </li>
      <li>
        <strong>A DVD sales website:</strong>
        Created using basic HTML and CSS.
      </li>
    </ul>
  </section>
);

export default Projects;
