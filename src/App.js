import React from 'react';
import AmountEditor from './components/AmountEditor/AmountEditor'
import './App.css';

function App() {
  return (
    <div className="App">
      <AmountEditor
        min={10000}
        max={30000}
        step={2000}
        marks={[
          { value: 10000 },
          { value: 12000 },
          { value: 14000 },
          { value: 16000 },
          { value: 18000 },
          { value: 20000 },
          { value: 22000 },
          { value: 24000 },
          { value: 26000 },
          { value: 28000 },
          { value: 30000 },
        ]}
      />
    </div>
  );
}

export default App;