import React, { Component } from "react";
import classNames from "classnames";

import "../styles/Button.scss";
import "../styles/Colors.scss";
import { ButtonType } from "../models/buttonType";

const Button = props => {
  const { value, type } = this.props;
  var stylesButton = classNames({
    button: true,
    "button-operator": type === ButtonType.operator,
    "button-equal": type === ButtonType.equal
  });
  return (
    <div className={stylesButton} onClick={() => this.props.onClickItem(value)}>
      {value}
    </div>
  );
};

export default Button;
