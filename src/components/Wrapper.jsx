function Wrapper({ children }) {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}

export default Wrapper;
