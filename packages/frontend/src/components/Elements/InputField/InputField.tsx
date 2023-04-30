import React from "react";

type InputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  labelName?: string;
};

export const InputField: React.FC<InputFieldProps> = ({
  className,
  type = "text",
  labelName,
  ...props
}) => {
  return (
    <div className={className}>
      <label className="text-slate-500 pb-1">
        {labelName ? labelName : props.name}
      </label>
      <input
        type={type}
        className="shadow border rounded w-full py-2 px-3 mr-4 text-gray-600 focus:outline-none"
        {...props}
      />
    </div>
  );
};
