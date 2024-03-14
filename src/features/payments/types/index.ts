export type LocalPaymentMethod = {
  provider: string;
  label: string;
};

export type RemotePaymentMethod = Record<string, string>;
