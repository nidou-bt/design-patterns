import DonationCheckbox from "../components/DonationCheckbox";
import PaymentMethods from "../components/PaymentMethods";
import { formatCheckboxLabel } from "../helper/formatCheckboxLabel";
import { usePaymentMethods } from "../hooks/usePaymentMethods";
import useRoundUp from "../hooks/useRoundUp";

type Props = {
  amount: number;
  countryCode: string;
};

const PaymentTemplate = ({ amount, countryCode }: Props) => {
  const { paymentMethods } = usePaymentMethods();
  const { agreeToDonate, tip, total, updateAgreeToDonate } = useRoundUp({
    amount,
    countryCode,
  });

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <DonationCheckbox
        onChange={updateAgreeToDonate}
        checked={agreeToDonate}
        content={formatCheckboxLabel({ agreeToDonate, tip })}
      />
      <button>
        {countryCode}
        {total}
      </button>
    </div>
  );
};

export default PaymentTemplate;
