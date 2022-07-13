import React from "react";

const InputField = ({
  value,
  onChange,
  label,
  placeholder,
  urlPrefix,
  name,
  type = "text",
  required = false,
}) => {
  return (
    <div className="w-full relative gap-1 text-center">
      <span className="text-sm absolute -top-6 font-medium text-slate-800">
        {label}
      </span>
      {name === "url" && (
        <span className="absolute z-10 top-[2px] px-2 h-[calc(100%-4px)] overflow-hidden border-2 pt-[10px] left-16 bg-slate-100 text-slate-500/90 text-sm outline-slate-200 outline-1  rounded-l-md ">
          {urlPrefix}
        </span>
      )}
      <input
        className={`w-full max-w-sm p-2 focus:outline-1  border-[2px] rounded-md outline-slate-400 ${
          name === "url" && "pl-36"
        } `}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        type={type}
      />
    </div>
  );
};

export default InputField;
