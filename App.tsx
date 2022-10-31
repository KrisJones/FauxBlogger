import { useState } from 'react';
import * as React from 'react';
import './style.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import Card from './components/shared/Card';
import { FeedbackProvider } from './context/FeedbackContext';

export default function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <div>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </div>
  );
}
