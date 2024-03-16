import { useEffect, useState } from "react";
import { RemotePaymentMethod } from "../types";
import PaymentMethod from "../models/PaymentMethod";
import { getPaymentMethods } from "../api/paymentMethodApi";

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

const fetchPaymentMethods = async () => {
  const methods = await getPaymentMethods();
  if (!methods) {
    return [];
  }
  return convertPaymentMethods(methods);
};

export const usePaymentMethods = () => {
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);

  useEffect(() => {
    fetchPaymentMethods().then((methods) => setPaymentMethods(methods));
  }, []);

  return {
    paymentMethods,
  };
};
