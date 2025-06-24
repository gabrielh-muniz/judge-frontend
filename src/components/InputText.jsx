function InputText({
  label = "",
  id,
  name,
  type = "text",
  autoComplete = "",
  className = "",
  register = () => {},
  errors = {},
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[13px] font-medium text-gray-700"
      >
        {label || name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
      <input
        id={id}
        type={type}
        autoComplete={autoComplete}
        className={`mt-1 block w-full px-3 py-1 border ${
          errors[name] ? "border-red-500" : "border-gray-300"
        } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${className}`}
        {...register(name)}
      />
      {errors[name] && (
        <p className="mt-1 text-sm text-red-600">{errors[name].message}</p>
      )}
    </div>
  );
}

export default InputText;
