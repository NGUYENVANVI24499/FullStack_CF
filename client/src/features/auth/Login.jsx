import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Controls from "../../components/controls/Controls";
import { Form, useForm } from "../../hooks/useForm";
import useTitle from "../../hooks/useTitle";
import { useNavigate, Link } from "react-router-dom";
import { useLoginMutation } from "./authApiSlice";
import { setCredentials } from "./authSlice";
import usePersist from "../../hooks/usePersist";
const initialFValues = {
  username: "",
  password: "",
};
const Login = () => {
  useTitle("Employee Login");

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("username" in fieldValues)
      temp.username = fieldValues.username ? "" : "This field is required.";
    if ("password" in fieldValues)
      temp.password = /$^|.+@.+..+/.test(fieldValues.password)
        ? ""
        : "pass is not valid.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };
  const { values, setValues, errors, setErrors, handleInputChange, resetForm } =
    useForm(initialFValues, true, validate);
  const [persist, setPersist] = usePersist();
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleToggle = () => {
    setPersist((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const username = values.username;
      const password = values.password;
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setValues(initialFValues);
      navigate("/dash");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
    }
  };
  const [login, { isLoading }] = useLoginMutation();
  return (
    <>
      <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
      <Form className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-5 items-center justify-items-end">
        <label htmlFor="userName">Username</label>
        <Controls.Input
          onChange={handleInputChange}
          name="username"
          id="userName"
          error={errors.username}
        />
        <label htmlFor="password">Password</label>
        <Controls.Input
          name="password"
          onChange={handleInputChange}
          id="passWord"
          error={errors.password}
        />
        <Controls.Button
          onClick={handleSubmit}
          className="col-span-full"
          text="Login"
        />
        <label htmlFor="persist" className="form__persist">
          <input
            type="checkbox"
            className="form__checkbox"
            id="persist"
            onChange={handleToggle}
            checked={persist}
          />
          Trust This Device
        </label>
      </Form>
    </>
  );
};

export default Login;
