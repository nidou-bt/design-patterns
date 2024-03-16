type RoundUpStrategy = (amount: number) => number;

const calculateTipFor = (roundUpFunc: RoundUpStrategy) => (amount: number) => {
  // Get the rounded-up amount using the provided roundUpFunc
  const amountWithTip = roundUpFunc(amount);
  return parseFloat((amountWithTip - amount).toPrecision(10));
};

export class CountryPayment {
  private readonly _currencySign: string;
  private readonly algorithm: RoundUpStrategy;

  public constructor(currencySign: string, roundUpAlgorithm: RoundUpStrategy) {
    this._currencySign = currencySign;
    this.algorithm = roundUpAlgorithm;
  }

  get currencySign(): string {
    return this._currencySign;
  }

  getRoundUpAmount(amount: number): number {
    return this.algorithm(amount);
  }

  getTip(amount: number): number {
    return calculateTipFor(this.getRoundUpAmount.bind(this))(amount);
  }
}
