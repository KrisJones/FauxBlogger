import * as React from 'react';
import '../style.css';
import Card from './shared/Card';

export default function FeedbackItem({ item }) {
  return (
    <Card>
      <div className="num-display"> {item.rating} </div>
      <div className="text-display"> {item.text} </div>
    </Card>
  );
}
