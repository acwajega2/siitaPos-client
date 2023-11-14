import "./styles.css";
import SaleForm from "./components/SalesForm";
import ExpenseForm from "./components/ExpenseForm";
import { ContextProvider } from "./context/Context";
import { Tab, Tabs } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App() {
  return (
    <ContextProvider>
      <div className="App">
        <h1 className="app-title">Expense Tracker</h1>
        <Tabs defaultActiveKey="sale" id="expense-tracker-tabs">
          <Tab eventKey="sale" title="Daily Sale">
            <SaleForm />
          </Tab>
          <Tab eventKey="expense" title="Daily Expense">
            <ExpenseForm />
          </Tab>
        </Tabs>
      </div>
    </ContextProvider>
  );
}
