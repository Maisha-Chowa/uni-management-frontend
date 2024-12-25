import { Form, Select } from "antd";
import React from "react";
import { Controller } from "react-hook-form";

type TPHSelectProps = {
  label: string;
  name: string;
  options: {
    value: string;
    label: string;
    disabled?: boolean;
  }[];
};

function PHSelect({ label, name, options }: TPHSelectProps) {
  return (
    <Controller
      name={name}
      //   field: { onChange }
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            style={{ width: "100%" }}
            // onChange={onChange} //*field er onChange
            {...field}
            options={options}
            size="large"
          />
          {error && <small style={{ color: "red" }}>{error.message}</small>}
        </Form.Item>
      )}
    />
  );
}

export default PHSelect;
