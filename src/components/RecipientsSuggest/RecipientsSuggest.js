import { useEffect, useState } from 'react';
import mockEmails from '../../mocks/emails';
import RecipientsSuggestItem from '../RecipientsSuggestItem/RecipientsSuggestItem';

import './RecipientsSuggest.scss';

export default function RecipientsSuggest({ currentValue, addTag }) {
  const [ emailList, setEmailList ] = useState([]);
  const [ scrollStateClass, setScrollStateClass ] = useState('');

  useEffect(() => {
    const filteredEmailList = mockEmails.filter(email => email.includes(currentValue));
    setEmailList(filteredEmailList);
  }, [ currentValue ]);

  /**
   * Toggles the fade effect on scroll.
   * @param event Scroll event object.
   */
  const handleScrollEffect = (event) => {
    const container = event.target;
    const atBottom = (container.scrollTop + container.offsetHeight) === container.scrollHeight;
    if (container.scrollTop > 0 && !atBottom) {
      setScrollStateClass('RecipientsSuggest-fade-topBottom');
    } else if (container.scrollTop > 0 && atBottom) {
      setScrollStateClass('RecipientsSuggest-fade-top');
    } else if (container.scrollTop === 0 && container.offsetHeight >= 240) {
      setScrollStateClass('RecipientsSuggest-fade-bottom');
    } else {
      setScrollStateClass('');
    }
  }

  // Don't show if currentValue is blank.
  if (currentValue.trim() === '') return null;

  return (
    <div className={`RecipientsSuggest-container ${scrollStateClass}`}>
      <ul className="RecipientsSuggest-list"
          onScroll={handleScrollEffect}>
        {emailList.map((email, index) =>
            <RecipientsSuggestItem key={index} value={email} handleClick={addTag} />)}
      </ul>
    </div>
  );
}