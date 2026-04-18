// src/App.tsx
import { Routes, Route } from 'react-router-dom';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import UserTypeSelectionScreen from './screens/UserTypeSelectionScreen';
import WelcomeScreen from './screens/WelcomeScreen';

function App() {
  return (
    <Routes>
      {/* ── Auth ── */}
      <Route path="/" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      <Route path="/otp-verification" element={<OTPVerificationScreen />} />
      <Route path="/reset-password" element={<ResetPasswordScreen />} />
      <Route path="/user-type" element={<UserTypeSelectionScreen />} />
      <Route path="/welcome" element={<WelcomeScreen />} />
    </Routes>
  );
}

export default App;