type SelectProps = {
  type: "disciplina" | "tema";
  options?: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
};

export default function Select({ type, options = [], disabled = false, onChange }: SelectProps) {

  const title = type === "disciplina" ? "Selecione uma disciplina" : "Selecione um tema";

  const subjects = ["Português", "História", "Ciências", "Geografia", "Matemática"];

  return (

    <select defaultValue={title} className="select" disabled={disabled} onChange={(e) => onChange && onChange(e.target.value)}>
      {type === "disciplina" ? (
          <option value={title} disabled>
          {title}
        </option>
      ) : null}

      {(type === "disciplina" ? subjects : options || []).map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  )
}


