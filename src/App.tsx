import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { store } from './core/redux';
import './css/main.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Screen } from '_app/components/Screen/Screen';
import { Table } from '_app/features/Table/Table';
import { MAIN_ROUTE, playersArr } from '_app/constatnts';
import { PlayerScreen } from '_app/Screens/PlayerScreen';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Screen>
          <Routes>
            <Route path={`${MAIN_ROUTE}/`} element={<Table />} />
            {playersArr.map(([name, id]) => (
              <Route
                key={id}
                path={`${MAIN_ROUTE}/${name.toLowerCase()}`}
                element={<PlayerScreen player={name} id={id} />}
              />
            ))}
          </Routes>
        </Screen>
      </Provider>
    </Router>
  );
}

export default App;
