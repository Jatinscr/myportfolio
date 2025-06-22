const Underline = ({children, lineColor}) => {
  return (
    <span className={`underline decoration-2 mx-1 mb-2 decoration-${lineColor}-400`}>
      {children}
    </span>
  );
};

export default Underline;
