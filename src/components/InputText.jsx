function InputText({
  id,
  name,
  type = "text",
  required = false,
  autoComplete = "",
  className = "",
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[13px] font-medium text-gray-700"
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={`mt-1 block w-full px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
      />
    </div>
  );
}

export default InputText;
