type ButtonProps = {
  name: string;
  color: string;
  onClick: () => void;
};

export default function Button({ name, color, onClick }: ButtonProps) {

  const styles = "btn btn-sm lg:btn-lg btn-soft " + color;

  return (

    <button type="button" className={styles} onClick={onClick}>{name}</button>
  )
}