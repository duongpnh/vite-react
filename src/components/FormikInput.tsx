import React from "react";
import { Field, FieldProps, FastField, FastFieldProps } from "formik";
import { Form, Input } from "antd";
import { FormItemProps } from "antd/lib/form";
import { InputProps } from "antd/lib/input";

type Props = InputProps & {
  label?: string;
  name: string;
  fast?: boolean;
  FormItemProps?: FormItemProps;
};

const getInputByType = (type: string | undefined) => {
  switch (type) {
    case 'password':
      return Input.Password
    default: 
      return Input;
  }
}

export const FormikInput: React.FC<Props> = ({
  name,
  label,
  fast,
  type,
  onChange,
  FormItemProps = {},
  ...rest
}) => {
  const FieldComponent = fast ? FastField : Field;
  const AntdInput = getInputByType(type);

  return (
    <FieldComponent name={name}>
      {({ field, meta, form }: FieldProps | FastFieldProps) => (
        <Form.Item
          label={label}
          name={name}
          validateStatus={meta.touched && meta.error ? "error" : "success"}
          help={meta.touched && meta.error}
          {...FormItemProps}
        >
          <AntdInput
            {...field}
            {...rest}
            onChange={(e) => {
              onChange?.(e); // onChange passed into the field
              field.onChange(e);
              if (!meta.touched) form.setFieldTouched(name, true);
            }}
          />
        </Form.Item>
      )}
    </FieldComponent>
  );
};
