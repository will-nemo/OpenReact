import './styles/button.scss';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {

  return (
    <button className="button">
      {label}
    </button>
  );
};

export default Button;
