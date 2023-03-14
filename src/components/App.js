import React from 'react';
import '../styles/App.css';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');
  const name = queryParams.get('name');
  const designation = queryParams.get('designation');

  return (
    <div className="details">
      Employee {id} named {name} works as {designation}
    </div>
  );
}

export default App;
