import { useEffect, useRef, useState } from 'react';
import { getEmailsList } from '../../api/emails';
import RecipientsSuggestItem from '../RecipientsSuggestItem/RecipientsSuggestItem';

import './RecipientsSuggest.scss';

export default function RecipientsSuggest({ currentValue, addRecipient }) {
  const [ loading, setLoading ] = useState(true);
  const [ emailsList, setEmailsList ] = useState([]);
  const [ filteredEmailsList, setFilteredEmailsList ] = useState([]);
  const [ scrollStateClass, setScrollStateClass ] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    const fetchEmailsList = async () => {
      setEmailsList(await getEmailsList());
      setLoading(false);
    }
    fetchEmailsList();
  }, []);

  useEffect(() => {
    setFilteredEmailsList(emailsList.filter(email => email.includes(currentValue)));
    setTimeout(() => displayFades(), 10);
  }, [ currentValue ]);

  // Previously I sent the API a value and have it respond with a filtered list.
  // However, it would be a lot of unnecessary HTTP requests and possible race conditions.
  //
  // useEffect(() => {
  //   const delayedTyping = setTimeout(() => {
  //     const fetchEmailList = async () => {
  //       setLoading(true);
  //       setFilteredEmailList(await getEmailsListByValue(currentValue));
  //       setLoading(false);
  //       displayFades();
  //     }
  //     if (currentValue.trim() !== '') fetchEmailList();
  //   }, 500);
  //   return () => clearTimeout(delayedTyping);
  // }, [ currentValue ]);

  /**
   * Displays the right combination of top/bottom fades.
   */
  const displayFades = () => {
    const container = listRef.current;
    if (!container) return;
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
  };

  // Don't show if currentValue is blank.
  if (currentValue.trim() === '') return null;

  return (
    <div className={`RecipientsSuggest-container ${loading ? '' : scrollStateClass}`}>
      <ul className="RecipientsSuggest-list"
          onScroll={() => displayFades()}
          ref={listRef}>
        {loading && <li className="RecipientsSuggest-list-loading"><small>Loading...</small></li>}
        {!loading && filteredEmailsList.map((email, index) =>
            <RecipientsSuggestItem key={index} value={email} handleClick={addRecipient} />)}
      </ul>
    </div>
  );
}