import PaymentMethod from "../models/PaymentMethod";

const PaymentMethods = ({ options }: { options: PaymentMethod[] }) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    {options.map((method) => (
      <label key={method.provider}>
        <input
          type="radio"
          name="payment"
          value={method.provider}
          defaultChecked={method.isDefaultMethod}
        />
        <span>{method.label}</span>
      </label>
    ))}
  </div>
);

export default PaymentMethods;
