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

// Dashboard Screens
import DashboardScreen from './screens/DashboardScreen';
import DashboardTotal from './screens/DashboardTotal';
import DashboardAI from './screens/DashboardAI';
import DashboardAlert from './screens/DashboardAlert';
import DashboardBills from './screens/DashboardBills';
import DashboardChart from './screens/DashboardChart';
import DashboardDaily from './screens/DashboardDaily';
import DashboardMonth from './screens/DashboardMonth';
import DashboardMonthly from './screens/DashboardMonthly';
import DashboardWeekly from './screens/DashboardWeekly';
import DashboardEmpty from './screens/DashboardEmpty';

// Transaction Screens
import AddExpense from './screens/AddExpense';
import AddIncome from './screens/AddIncome';
import TransactionList from './screens/TransactionList';
import TransactionDetail from './screens/TransactionDetail';
import EditTransaction from './screens/EditTransaction';
import DeleteConfirm from './screens/DeleteConfirm';
import TransactionWithImage from './screens/TransactionWithImage';
import TransactionSearch from './screens/TransactionSearch';
import TransactionFilter from './screens/TransactionFilter';
import RecurringTransaction from './screens/RecurringTransaction';

// Report Screens (đã tự bọc PhoneFrame bên trong)
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
        {/* ====================== AUTH ====================== */}
        <Route path="/" element={<PhoneFrame dark><LoginScreen /></PhoneFrame>} />
        <Route path="/signup" element={<PhoneFrame lightBg><SignUpScreen /></PhoneFrame>} />
        <Route path="/forgot-password" element={<PhoneFrame lightBg><ForgotPasswordScreen /></PhoneFrame>} />
        <Route path="/otp-verification" element={<PhoneFrame dark><OTPVerificationScreen /></PhoneFrame>} />
        <Route path="/reset-password" element={<PhoneFrame lightBg><ResetPasswordScreen /></PhoneFrame>} />
        <Route path="/user-type" element={<PhoneFrame lightBg><UserTypeSelectionScreen /></PhoneFrame>} />
        <Route path="/welcome" element={<PhoneFrame dark><WelcomeScreen /></PhoneFrame>} />

        {/* ====================== ONBOARDING ====================== */}
        <Route path="/onboarding/name" element={<PhoneFrame lightBg><OnboardingName /></PhoneFrame>} />
        <Route path="/onboarding/job" element={<PhoneFrame lightBg><OnboardingJob /></PhoneFrame>} />
        <Route path="/onboarding/goals" element={<PhoneFrame lightBg><OnboardingGoals /></PhoneFrame>} />
        <Route path="/onboarding/income" element={<PhoneFrame lightBg><OnboardingIncome /></PhoneFrame>} />
        <Route path="/onboarding/habits" element={<PhoneFrame lightBg><OnboardingHabits /></PhoneFrame>} />
        <Route path="/onboarding/budget" element={<PhoneFrame lightBg><OnboardingBudget /></PhoneFrame>} />
        <Route path="/onboarding/bank" element={<PhoneFrame lightBg><OnboardingBank /></PhoneFrame>} />
        <Route path="/onboarding/wallet" element={<PhoneFrame lightBg><OnboardingWallet /></PhoneFrame>} />
        <Route path="/onboarding/categories" element={<PhoneFrame lightBg><OnboardingCategories /></PhoneFrame>} />
        <Route path="/onboarding/summary" element={<PhoneFrame dark><OnboardingSummary /></PhoneFrame>} />

        {/* ====================== DASHBOARD ====================== */}
        <Route path="/dashboard" element={<PhoneFrame dark><DashboardScreen /></PhoneFrame>} />
        <Route path="/dashboard/total" element={<PhoneFrame dark><DashboardTotal /></PhoneFrame>} />
        <Route path="/dashboard/ai" element={<PhoneFrame dark><DashboardAI /></PhoneFrame>} />
        <Route path="/dashboard/alert" element={<PhoneFrame dark><DashboardAlert /></PhoneFrame>} />
        <Route path="/dashboard/bills" element={<PhoneFrame dark><DashboardBills /></PhoneFrame>} />
        <Route path="/dashboard/chart" element={<PhoneFrame dark><DashboardChart /></PhoneFrame>} />
        <Route path="/dashboard/daily" element={<PhoneFrame dark><DashboardDaily /></PhoneFrame>} />
        <Route path="/dashboard/month" element={<PhoneFrame dark><DashboardMonth /></PhoneFrame>} />
        <Route path="/dashboard/monthly" element={<PhoneFrame dark><DashboardMonthly /></PhoneFrame>} />
        <Route path="/dashboard/weekly" element={<PhoneFrame dark><DashboardWeekly /></PhoneFrame>} />
        <Route path="/dashboard/empty" element={<PhoneFrame dark><DashboardEmpty /></PhoneFrame>} />

        {/* ====================== TRANSACTIONS ====================== */}
        <Route path="/add-expense" element={<PhoneFrame dark><AddExpense /></PhoneFrame>} />
        <Route path="/add-income" element={<PhoneFrame dark><AddIncome /></PhoneFrame>} />
        <Route path="/transactions" element={<PhoneFrame dark><TransactionList /></PhoneFrame>} />
        <Route path="/transaction/:id" element={<PhoneFrame dark><TransactionDetail /></PhoneFrame>} />
        <Route path="/edit" element={<PhoneFrame dark><EditTransaction /></PhoneFrame>} />
        <Route path="/delete-confirm" element={<PhoneFrame dark><DeleteConfirm /></PhoneFrame>} />
        <Route path="/transaction-image" element={<PhoneFrame dark><TransactionWithImage /></PhoneFrame>} />
        <Route path="/search" element={<PhoneFrame dark><TransactionSearch /></PhoneFrame>} />
        <Route path="/filter" element={<PhoneFrame dark><TransactionFilter /></PhoneFrame>} />
        <Route path="/recurring" element={<PhoneFrame dark><RecurringTransaction /></PhoneFrame>} />

        {/* ====================== REPORTS ====================== */}
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
        <Route path="*" element={<PhoneFrame dark><DashboardScreen /></PhoneFrame>} />
      </Routes>
    </div>
  );
}

export default App;