import { CountryPayment } from "./features/payments/models/CountryPayment";
import PaymentTemplate from "./features/payments/templates/PaymentTemplate";

const roundUpToNearestInteger = (amount: number) => {
  return Math.floor(amount / 100 + 1) * 100;
};

function App() {
  const strategy = new CountryPayment("¥", roundUpToNearestInteger);
  return <PaymentTemplate amount={1333} strategy={strategy} />;
}

export default App;
