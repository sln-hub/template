import { useState } from 'react';

const useFocusState = () => {
  const [focused, setFocused] = useState(false);

  const onFocus = () => {
    setFocused(true);
  };

  const onBlur = () => {
    setFocused(false);
  };

  return { isFocused: focused, onFocus, onBlur };
};

export { useFocusState };
