import React from 'react';

function QuestionItem(props) {
  return (
    <div className={props.className}>
      <input id="tab-two" type="checkbox" name="tabs" />
      <label onClick={props.onClick} for="tab-two">
        {props.title}
      </label>
      <div className="tab-content">
        <p>{props.text}</p>
      </div>
    </div>
  );
}

export default QuestionItem;
