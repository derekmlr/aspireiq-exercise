import { useState } from 'react';
import RecipientsSuggest from '../RecipientsSuggest/RecipientsSuggest';
import './RecipientsInput.scss';

export default function RecipientsInput() {
  const [ currentValue, setCurrentValue ] = useState('');

  /**
   * Updates state with current input value.
   * @param event Input event object.
   */
  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  }

  /**
   * Adds a recipient email and renders a tag.
   * @param tag Text to add.
   */
  const addTag = (tag) => {
    console.log('add tag', tag);
  }

  return (
    <div className="RecipientsInput-container">
      <div className="RecipientsInput-input-wrapper">
        <input
            className="RecipientsInput-input"
            placeholder="Enter recipients..."
            value={currentValue}
            onChange={handleChange} />
        <RecipientsSuggest currentValue={currentValue} addTag={addTag} />
      </div>
    </div>
  )
}