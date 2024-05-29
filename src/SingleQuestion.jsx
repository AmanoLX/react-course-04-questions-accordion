import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const SingleQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        {showInfo ? (
          <button type="button" className="question-btn">
            <AiOutlineMinus onClick={toggleInfo} />
          </button>
        ) : (
          <button type="button" className="question-btn">
            <AiOutlinePlus onClick={toggleInfo} />
          </button>
        )}
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
};
export default SingleQuestion;
