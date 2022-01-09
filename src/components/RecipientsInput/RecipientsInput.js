import { useState } from 'react';
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

  return (
    <div className="RecipientsInput-container">
      <input
          className="RecipientsInput-input"
          placeholder="Enter recipients..."
          value={currentValue}
          onChange={handleChange} />
    </div>
  )
}