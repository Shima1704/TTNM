// src/App.tsx
import { Routes, Route } from 'react-router-dom';

// Auth
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import UserTypeSelectionScreen from './screens/UserTypeSelectionScreen';
import WelcomeScreen from './screens/WelcomeScreen';

// Onboarding
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

// Reports / Dashboard
import ReportOverviewScreen from './screens/ReportOverviewScreen';
import ReportIncomeScreen from './screens/ReportIncomeScreen';
import ReportExpenseScreen from './screens/ReportExpenseScreen';
import ReportCompareScreen from './screens/ReportCompareScreen';
import ReportYearTrendScreen from './screens/ReportYearTrendScreen';
import ReportAIScreen from './screens/ReportAIScreen';
import ReportHealthScoreScreen from './screens/ReportHealthScoreScreen';
import ReportExportScreen from './screens/ReportExportScreen';
import ReportShareScreen from './screens/ReportShareScreen';
import ReportYearReviewScreen from './screens/ReportYearReviewScreen';

function App() {
  return (
    <Routes>
      {/* Auth */}
      <Route path="/" element={<LoginScreen />} />
      <Route path="/signup" element={<SignUpScreen />} />
      <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
      <Route path="/otp-verification" element={<OTPVerificationScreen />} />
      <Route path="/reset-password" element={<ResetPasswordScreen />} />
      <Route path="/user-type" element={<UserTypeSelectionScreen />} />
      <Route path="/welcome" element={<WelcomeScreen />} />

      {/* Onboarding */}
      <Route path="/onboarding/name" element={<OnboardingName />} />
      <Route path="/onboarding/job" element={<OnboardingJob />} />
      <Route path="/onboarding/goals" element={<OnboardingGoals />} />
      <Route path="/onboarding/income" element={<OnboardingIncome />} />
      <Route path="/onboarding/habits" element={<OnboardingHabits />} />
      <Route path="/onboarding/budget" element={<OnboardingBudget />} />
      <Route path="/onboarding/bank" element={<OnboardingBank />} />
      <Route path="/onboarding/wallet" element={<OnboardingWallet />} />
      <Route path="/onboarding/categories" element={<OnboardingCategories />} />
      <Route path="/onboarding/summary" element={<OnboardingSummary />} />

      {/* Reports / Dashboard */}
      <Route path="/reports" element={<ReportOverviewScreen />} />
      <Route path="/reports/income" element={<ReportIncomeScreen />} />
      <Route path="/reports/expense" element={<ReportExpenseScreen />} />
      <Route path="/reports/compare" element={<ReportCompareScreen />} />
      <Route path="/reports/trend" element={<ReportYearTrendScreen />} />
      <Route path="/reports/ai" element={<ReportAIScreen />} />
      <Route path="/reports/score" element={<ReportHealthScoreScreen />} />
      <Route path="/reports/export" element={<ReportExportScreen />} />
      <Route path="/reports/share" element={<ReportShareScreen />} />
      <Route path="/reports/year-review" element={<ReportYearReviewScreen />} />

      {/* Fallback */}
      <Route path="*" element={<LoginScreen />} />
    </Routes>
  );
}

export default App;