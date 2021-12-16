import React, { useState } from 'react';
import QuestionItem from './QuestionItem';

function FAQ() {
  let [activeIndex, setActiveIndex] = useState(null);

  const onSelectIndex = (index) => {
    
    setActiveIndex(activeIndex === index ? null : index);
    
    console.log(activeIndex);
  };

  const arrQuestionItems = [
    {
      id: 1,
      title: 'Сколько всего мест в доме?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!',
    },
    {
      id: 2,
      title: 'Самая дорогая квартира?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!',
    },
    {
      id: 3,
      title: 'Могу ли я отменить бронирование?',
      text: 'Да, вы можете отменить забронированную квартиру в течение 3 дней.',
    },
    {
      id: 4,
      title: 'Можно ли купить квартиру?',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non quos nemo corporis velit culpa veritatis asperiores deserunt, commodi ipsum at? Esse quibusdam dignissimos recusandae enim. Eaque expedita eum provident totam!',
    },
  ];

  return (
    <div>
      <div id="app">
        <div className="app-container">
          <h1 className="app-title">FAQ</h1>
          <div className="app-tabs">
            {arrQuestionItems.map((obj, index) => (
              <QuestionItem
                className={obj.id === activeIndex ? 'tab active' : 'tab'}
                key={obj.id}
                title={obj.title}
                text={obj.text}
                onClick={() => onSelectIndex(obj.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
