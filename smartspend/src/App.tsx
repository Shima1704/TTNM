// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
    </Routes>
  );
}

export default App;