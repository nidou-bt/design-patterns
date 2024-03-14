import { useEffect, useState } from "react";
import { RemotePaymentMethod } from "../types";
import PaymentMethod from "../models/PaymentMethod";
import { methods } from "../data/paymentMethods";

const payInCash = new PaymentMethod({ name: "cash" });

const convertPaymentMethods = (methods: RemotePaymentMethod[]) => {
  if (methods.length === 0) {
    return [];
  }

  const extended: PaymentMethod[] = methods.map(
    (method) => new PaymentMethod(method)
  );
  extended.push(payInCash);

  return extended;
};

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      // const url = "https://online-ordering.com/api/payment-methods";

      // const response = await fetch(url);
      // const methods: RemotePaymentMethod[] = await response.json();

      setPaymentMethods(convertPaymentMethods(methods));

      // if (methods.length > 0) {
      //   const extended: LocalPaymentMethod[] = methods.map((method) => ({
      //     provider: method.name,
      //     label: `Pay with ${method.name}`,
      //   }));
      //   extended.push({ provider: "cash", label: "Pay in cash" });
      //   setPaymentMethods(extended);
      // } else {
      //   setPaymentMethods([]);
      // }
    };

    fetchPaymentMethods();
  }, []);

  return {
    paymentMethods,
  };
};
