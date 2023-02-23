import { Input as AntInput } from "antd";
export default function Input(props) {
  const { name, value, error = null, onChange, ...other } = props;

  return (
    <AntInput
      name={name}
      value={value}
      onChange={onChange}
      {...other}
      {...(error && { status: "error", placeholder: error })}
    />
  );
}
