import React from 'react';
import './App.scss';
import AlignItemsList from './components/AlignItemsList';
import BasicTextFields from './components/BasicTextFields';
import SimplePaper from './components/SimplePaper';

function App() {
  const [comments, setComments] = React.useState([]);

  React.useEffect(() => {
    setComments(JSON.parse(localStorage.getItem('comments')));
  }, []);

  React.useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  

  const onAddComment = (obj) => {
    setComments([...comments, obj]);
  };

  const deleteComment = (index) => {
    setComments( comments.filter((obj, i) => {
      return i !== index}));
  };

  return (
    <div className="wrapper">
      <div>
        <SimplePaper>
          <AlignItemsList comments={comments} deleteComment={deleteComment} />
        </SimplePaper>
        <SimplePaper>
          <h2 style={{ textAlign: 'center' }}>Обратная связь:</h2>
          <BasicTextFields onSubmit={onAddComment} />
        </SimplePaper>
      </div>
    </div>
  );
}

export default App;
