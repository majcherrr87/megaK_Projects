type Props = {
  role: "PrimaryAction" | "SecondaryAction" | "Reset";
  onClick: () => void;
  text: string;
};

export const Button = ({ role, onClick, text }: Props) => {
  return (
    <button className={role} onClick={onClick}>
      {text}
    </button>
  );
};
