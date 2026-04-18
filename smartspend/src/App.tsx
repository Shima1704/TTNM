// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import OnboardingName from './screens/OnboardingName';
import OnboardingJob from './screens/OnboardingJob';
import OnboardingGoals from './screens/OnboardingGoals';
import OnboardingIncome from './screens/OnboardingIncome';
import OnboardingHabits from './screens/OnboardingHabits';
import OnboardingBudget from './screens/OnboardingBudget';
import OnboardingBank from './screens/OnboardingBank';
import OnboardingWallet from './screens/OnboardingWallet';
import OnboardingCategories from './screens/OnboardingCategories';
import OnboardingSummary from './screens/OnboardingSummary';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />

      <Route path="/onboarding/name"       element={<OnboardingName />} />
      <Route path="/onboarding/job"        element={<OnboardingJob />} />
      <Route path="/onboarding/goals"      element={<OnboardingGoals />} />
      <Route path="/onboarding/income"     element={<OnboardingIncome />} />
      <Route path="/onboarding/habits"     element={<OnboardingHabits />} />
      <Route path="/onboarding/budget"     element={<OnboardingBudget />} />
      <Route path="/onboarding/bank"       element={<OnboardingBank />} />
      <Route path="/onboarding/wallet"     element={<OnboardingWallet />} />
      <Route path="/onboarding/categories" element={<OnboardingCategories />} />
      <Route path="/onboarding/summary"    element={<OnboardingSummary />} />
    </Routes>
  );
}

export default App;