import { useMemo, useState } from "react";

const useRoundUp = ({
  amount,
  countryCode,
}: {
  amount: number;
  countryCode: string;
}) => {
  const [agreeToDonate, setAgreeToDonate] = useState<boolean>(false);

  const { total, tip } = useMemo(
    () => ({
      total: agreeToDonate
        ? countryCode === "JP"
          ? Math.floor(amount / 100 + 1) * 100
          : Math.floor(amount + 1)
        : amount,
      tip: parseFloat((Math.floor(amount + 1) - amount).toPrecision(10)),
    }),
    [amount, agreeToDonate, countryCode]
  );

  const updateAgreeToDonate = () => {
    setAgreeToDonate((agreeToDonate) => !agreeToDonate);
  };

  return {
    total,
    tip,
    agreeToDonate,
    updateAgreeToDonate,
  };
};

export default useRoundUp;
