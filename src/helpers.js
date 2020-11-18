// Various helper functions.
import { useRef, useState } from 'react';
/**
 * Ref using custome hook to solve stale state issues.
 * 
 */
const useAsyncReference = (value, isProp=false) => {
  const ref = useRef(value);
  const [, forceRender] = useState(false);

  const updateState = (newState) => {
    ref.current = newState;
    forceRender(s => !s);
  }

  if (isProp) {
    ref.current = value;
    return ref;
  }

  return [ref, updateState];
}

export default useAsyncReference;