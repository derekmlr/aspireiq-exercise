import './Recipient.scss';

export default function Recipient({ value, remove }) {
  return (
    <div className="Recipient">
      <span>{value}</span>
      <button className="Recipient-remove" onClick={() => remove(value)}>&times;</button>
    </div>
  );
}