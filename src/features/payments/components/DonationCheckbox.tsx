type DonationCheckboxProps = {
  onChange: () => void;
  checked: boolean;
  content: string;
};

const DonationCheckbox = ({
  onChange,
  checked,
  content,
}: DonationCheckboxProps) => {
  return (
    <label style={{ display: "flex", gap: "10px" }}>
      <input type="checkbox" onChange={onChange} checked={checked} />
      <p>{content}</p>
    </label>
  );
};

export default DonationCheckbox;
