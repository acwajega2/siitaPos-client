import "./styles.css";
import SaleForm from "./components/SalesForm";
import ExpenseForm from "./components/ExpenseForm";
import { ContextProvider } from "./context/Context";

export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <h1 className="app-title">Expense Tracker</h1>
        <div className="form-container">
          <SaleForm />
          <ExpenseForm />
        </div>
      </div>
    </ContextProvider>
  );
}
