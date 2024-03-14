export const formatCheckboxLabel = ({
  agreeToDonate,
  tip,
}: {
  agreeToDonate: boolean;
  tip: number;
}) => {
  return agreeToDonate
    ? "Thanks for your donation."
    : `I would like to donate $${tip} to charity.`;
};
