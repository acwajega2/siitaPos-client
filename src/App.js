import "./styles.css";
import SaleForm from "./components/SalesForm";
import ExpenseForm from "./components/ExpenseForm";
import { ContextProvider } from "./context/Context";

import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Daily Sales',
      children: <SaleForm />,
    },
    {
      key: '2',
      label: 'Daily Expenses',
      children: <ExpenseForm />,
    }
  ];
  return (
    <ContextProvider>
      <div className="App">
        <h1 className="app-title">Daily Transactions Tracker</h1>
        <Tabs defaultActiveKey="1" items={items} />
     
      </div>
    </ContextProvider>
  );
}
