import './RecipientsSuggestItem.scss';

export default function RecipientsSuggestItem({ value, handleClick }) {
  return <li className="RecipientsSuggestItem" onClick={() => handleClick(value)}>{value}</li>;
}