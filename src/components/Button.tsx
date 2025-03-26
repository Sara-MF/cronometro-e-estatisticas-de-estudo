type ButtonProps = {
  name: string;
  color: string;
};

export default function Button({ name, color }: ButtonProps) {

  const styles = "btn btn-sm lg:btn-lg btn-soft " + color;

  return (

    <button type="button" className={styles}>{name}</button>
  )
}