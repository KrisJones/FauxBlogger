import * as React from 'react';
import '../style.css';
import Card from './shared/Card';

import { FaTimes, FaEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ item }) {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className="title-display"> {item.title} </div>
      <div className="mood-display"> {item.mood} </div>

      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>

      <div className="text-display"> {item.text} </div>
    </Card>
  );
}
