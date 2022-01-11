import { useState, useRef } from 'react';
import Recipient from '../Recipient/Recipient';
import RecipientsSuggest from '../RecipientsSuggest/RecipientsSuggest';
import './RecipientsInput.scss';

export default function RecipientsInput() {
  const [ currentValue, setCurrentValue ] = useState('');
  const [ recipients, setRecipients ] = useState([]);
  const inputRef = useRef(null);

  /**
   * Updates state with current input value.
   * @param event Input event object.
   */
  const handleChange = (event) => {
    setCurrentValue(event.target.value);
  }

  /**
   * Adds a recipient email to the list.
   * @param recipient Recipient to add.
   */
  const addRecipient = (recipient) => {
    const updatedRecipients = [ ...recipients ];
    updatedRecipients.push(recipient);
    setRecipients(updatedRecipients);
    setCurrentValue('');
    inputRef.current.focus(); // UX fix for adding via dropdown.
  }

  /**
   * Removes a recipient email from the list.
   * @param recipient Recipient to remove.
   */
  const removeRecipient = (recipient) => {
    const indexToRemove = recipients.findIndex(item => item === recipient);
    const updatedRecipients = [...recipients];
    updatedRecipients.splice(indexToRemove, 1);
    setRecipients(updatedRecipients);
  }

  /**
   * Removes recipient from list and populates input with recipient text.
   * @param recipient Recipient to edit.
   */
  const reviseRecipient = (recipient) => {
    removeRecipient(recipient);
    setCurrentValue(recipient);
    setTimeout(() => inputRef.current.select(), 10);
  }

  /**
   * Listens to keypress and keydown
   * @param recipient Recipient text to add.
   */
  const handleSubmitEvent = (event) => {
    if (event.key === 'Enter' || event.key === 'Tab') {
      event.preventDefault();
      if (currentValue.trim() !== '') addRecipient(event.target.value);
    }
  }

  const placeholder = recipients.length > 0 ? '' : 'Enter recipients...';

  return (
    <div className="RecipientsInput-container">
    {recipients.map((recipient, index) =>
        <Recipient
            key={index}
            value={recipient}
            remove={removeRecipient}
            revise={reviseRecipient} />)}
      <div className="RecipientsInput-input-wrapper">
        <input
            ref={inputRef}
            className="RecipientsInput-input"
            placeholder={placeholder}
            value={currentValue}
            onChange={handleChange}
            onKeyDown={handleSubmitEvent} />
        <RecipientsSuggest currentValue={currentValue} addRecipient={addRecipient} />
      </div>
    </div>
  )
}