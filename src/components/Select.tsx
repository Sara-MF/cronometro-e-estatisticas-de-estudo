type SelectProps = {
  type: "subject" | "topic";
  id?: string;
  options: string[];
  disabled?: boolean;
  onChange?: (value: string) => void;
  selected: string;
};

export default function Select({ type, id, options = [], disabled = false, onChange, selected }: SelectProps) {

  const title = type === "subject" ? "Selecione uma disciplina" : "Selecione um tema";

  return (

    <div className="w-full flex flex-col gap-2">
      {type === "subject" ? <label>Disciplina:</label> : <label>Tema:</label>}

      <select value={selected} id={id} className="select" disabled={disabled} onChange={(e) => onChange && onChange(e.target.value)}>
        {(type === "subject" || options.length === 0) && <option value="" disabled>
          {title}
        </option>}

        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>

  )
}


