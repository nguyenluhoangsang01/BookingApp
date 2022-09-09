import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useForm = (initialValue, action) => {
  // State
  const [values, setValues] = useState(initialValue);
  // Redux
  const dispatch = useDispatch();
  // Router
  const navigate = useNavigate();

  // Handle change
  const onChange = (e) => {
    const { name, value } = e.target;

    setValues((prevValues) => ({ ...prevValues, [name]: value }));
  };
  // Handle submit
  const onSubmit = (e) => {
    // Prevent default
    e.preventDefault();

    // Reset form
    setValues(initialValue);
    // Dispatch action
    dispatch(action(values, navigate));
    // Scroll to top
    window.scrollTo(0, 0);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};

export default useForm;
