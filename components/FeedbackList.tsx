import * as React from 'react';
import '../style.css';
import { useState } from 'react';
import FeedbackItem from './FeedbackItem';

export default function FeedbackList({ feedback }) {
  if (!feedback || feedback.length === 0) return <p>No posts yet </p>;

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}
