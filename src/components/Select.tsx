type SelectProps = {
  type: "subject" | "topic";
  id?: string;
  options?: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export default function Select({ type, id, options = [], disabled = false, onChange }: SelectProps) {

  const title = type === "subject" ? "Selecione uma disciplina" : "Selecione um tema";

  const subjects = ["Português", "História", "Ciências", "Geografia", "Matemática"];

  return (

    <select defaultValue={title} id={id} className="select" disabled={disabled} onChange={(e) => onChange && onChange(e.target.value)}>
      {type === "subject" ? (
          <option value={title} disabled>
          {title}
        </option>
      ) : null}

      {(type === "subject" ? subjects : options || []).map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}


