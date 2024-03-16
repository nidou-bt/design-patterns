import { CountryPayment } from "../models/CountryPayment";

export const formatCheckboxLabel = ({
  agreeToDonate,
  tip,
  strategy,
}: {
  agreeToDonate: boolean;
  tip: number;
  strategy: CountryPayment;
}) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate ${strategy.currencySign} ${tip} to charity.`;
};
