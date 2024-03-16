import { CountryPayment } from "../models/CountryPayment";

export const formatButtonLabel = ({
  total,
  strategy,
}: {
  total: number;
  strategy: CountryPayment;
}) => {
  return `${strategy.currencySign} ${total}`;
};
