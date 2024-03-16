import DonationCheckbox from "../components/DonationCheckbox";
import PaymentMethods from "../components/PaymentMethods";
import { formatButtonLabel } from "../helper/formatButtonLabel";
import { formatCheckboxLabel } from "../helper/formatCheckboxLabel";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import useRoundUp from "../hooks/useRoundUp";
import { CountryPayment } from "../models/CountryPayment";

type Props = {
  amount: number;
  strategy?: CountryPayment;
};

const roundUpToNearestInteger = (amount: number) => {
  return Math.floor(amount + 1);
};

const PaymentTemplate = ({
  amount,
  strategy = new CountryPayment("$", roundUpToNearestInteger),
}: Props) => {
  const { paymentMethods } = usePaymentMethods();
  const { agreeToDonate, tip, total, updateAgreeToDonate } = useRoundUp({
    amount,
    strategy,
  });

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel({ agreeToDonate, tip, strategy })}
      />
      <button>{formatButtonLabel({ strategy, total })}</button>
    </div>
  );
};

export default PaymentTemplate;
