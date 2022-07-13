import React from "react";

const InputField = ({
  value,
  onChange,
  label,
  placeholder,
  urlPrefix,
  name,
  type = "text",
  required = true,
}) => {
  return (
    <div className="w-full max-w-sm relative gap-1 text-center">
      <p className="absolute md:text-sm text-xs -top-6 font-medium">
        <span className="text-slate-800">{label}</span>
        {required === false && (
          <span className="ml-1 text-slate-800/50">{`(optional)`}</span>
        )}
      </p>
      {name === "url" && (
        <span className="absolute  top-[2px] px-2 h-[calc(100%-4px)] overflow-hidden pt-[10px] left-[2px] bg-slate-100 text-slate-500/90 md:text-sm text-xs outline-slate-200 outline-[1px]  rounded-l-md border-r-[1px] ">
          {urlPrefix}
        </span>
      )}
      <input
        className={`w-full max-w-sm p-2 focus:outline-1  border-[1px] rounded-md focus:outline-slate-400 ${
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
