import { CountryPayment } from "./features/payments/models/CountryPayment";
import PaymentTemplate from "./features/payments/templates/PaymentTemplate";
import ProductTemplate from "./features/product/templates/ProductTemplate";

const roundUpToNearestInteger = (amount: number) => {
  return Math.floor(amount / 100 + 1) * 100;
};

function App() {
  const strategy = new CountryPayment("¥", roundUpToNearestInteger);
  return (
    <div>
      <PaymentTemplate amount={1333} strategy={strategy} />

      <ProductTemplate />
    </div>
  );
}

export default App;
