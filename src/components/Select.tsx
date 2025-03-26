type SelectProps = {
  type: string;
};
export default function Select({ type }: SelectProps) {

  const title = type === "disciplina" ? "Selecione uma disciplina" : "Selecione um tema";

  return (

    <select defaultValue={title} className="select">
      <option disabled={true}>{title}</option>
      <option>Português</option>
      <option>História</option>
      <option>Ciências</option>
      <option>Geografia</option>
      <option>Matemática</option>
    </select>
  )
}



