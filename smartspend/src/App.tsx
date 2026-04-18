// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import PhoneFrame from './components/PhoneFrame';

// Auth Screens
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ForgotPasswordScreen from './screens/ForgotPasswordScreen';
import OTPVerificationScreen from './screens/OTPVerificationScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen';
import UserTypeSelectionScreen from './screens/UserTypeSelectionScreen';
import WelcomeScreen from './screens/WelcomeScreen';

// Onboarding Screens
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

// Report Screens
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
    <div className="min-h-screen bg-black flex items-center justify-center p-6 overflow-hidden">
      <Routes>
        {/* ====================== AUTH SCREENS ====================== */}
        <Route 
          path="/" 
          element={<PhoneFrame dark><LoginScreen /></PhoneFrame>} 
        />
        <Route 
          path="/signup" 
          element={<PhoneFrame lightBg><SignUpScreen /></PhoneFrame>} 
        />
        <Route 
          path="/forgot-password" 
          element={<PhoneFrame lightBg><ForgotPasswordScreen /></PhoneFrame>} 
        />
        <Route 
          path="/otp-verification" 
          element={<PhoneFrame dark><OTPVerificationScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reset-password" 
          element={<PhoneFrame lightBg><ResetPasswordScreen /></PhoneFrame>} 
        />
        <Route 
          path="/user-type" 
          element={<PhoneFrame lightBg><UserTypeSelectionScreen /></PhoneFrame>} 
        />
        <Route 
          path="/welcome" 
          element={<PhoneFrame dark><WelcomeScreen /></PhoneFrame>} 
        />

        {/* ====================== ONBOARDING SCREENS ====================== */}
        <Route 
          path="/onboarding/name" 
          element={<PhoneFrame lightBg><OnboardingName /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/job" 
          element={<PhoneFrame lightBg><OnboardingJob /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/goals" 
          element={<PhoneFrame lightBg><OnboardingGoals /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/income" 
          element={<PhoneFrame lightBg><OnboardingIncome /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/habits" 
          element={<PhoneFrame lightBg><OnboardingHabits /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/budget" 
          element={<PhoneFrame lightBg><OnboardingBudget /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/bank" 
          element={<PhoneFrame lightBg><OnboardingBank /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/wallet" 
          element={<PhoneFrame lightBg><OnboardingWallet /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/categories" 
          element={<PhoneFrame lightBg><OnboardingCategories /></PhoneFrame>} 
        />
        <Route 
          path="/onboarding/summary" 
          element={<PhoneFrame dark><OnboardingSummary /></PhoneFrame>} 
        />

        {/* ====================== REPORT SCREENS ====================== */}
        <Route 
          path="/reports" 
          element={<PhoneFrame dark><ReportOverviewScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/income" 
          element={<PhoneFrame dark><ReportIncomeScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/expense" 
          element={<PhoneFrame dark><ReportExpenseScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/compare" 
          element={<PhoneFrame dark><ReportCompareScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/trend" 
          element={<PhoneFrame dark><ReportYearTrendScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/ai" 
          element={<PhoneFrame dark><ReportAIScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/score" 
          element={<PhoneFrame dark><ReportHealthScoreScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/export" 
          element={<PhoneFrame lightBg><ReportExportScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/share" 
          element={<PhoneFrame lightBg><ReportShareScreen /></PhoneFrame>} 
        />
        <Route 
          path="/reports/year-review" 
          element={
            <PhoneFrame gradientBg="linear-gradient(160deg,#001A14,#0D1F1A,#001F12)">
              <ReportYearReviewScreen />
            </PhoneFrame>
          } 
        />

        {/* Fallback */}
        <Route path="*" element={<PhoneFrame dark><LoginScreen /></PhoneFrame>} />
      </Routes>
    </div>
  );
}

export default App;