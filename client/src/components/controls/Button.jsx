import React from "react";

import { Button as AntButton } from "antd";
export default function Button(props) {
  const { text, onClick, ...other } = props;

  return (
    <AntButton onClick={onClick} {...other}>
      {text}
    </AntButton>
  );
}
