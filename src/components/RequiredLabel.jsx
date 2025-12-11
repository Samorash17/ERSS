const RequiredLabel = ({ children }) => {
  return (
    <label>
      {children} <span className="required-star">*</span> :
    </label>
  );
};

export default RequiredLabel;
