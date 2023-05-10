interface InputProps {
  placeholder: string;
  label: string;
  value: string;
  onChange?: any;
  type?: any;
}

export default function Input(props: InputProps) {
  return (
    <div>
      <label className="label">
        <span className="label-text text-primary">{props.label}</span>
      </label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="input input-bordered w-full   placeholder-gray-600"
        required
      />
    </div>
  );
}
