// Various helper functions, though none currently used as I did not 
// actually have async state to deal with, I was just using old state
// instead of up to date state. Leaving this here for reference.

import { useRef, useState } from 'react';
/**
 * Ref using custome hook to solve stale state issues.
 * See this page for a refresher or if you want to make this
 * work when passed down as a prop:
 * https://css-tricks.com/dealing-with-stale-props-and-states-in-reacts-functional-components/
 */
const useAsyncReference = (value, isProp=false) => {
  const ref = useRef(value);
  const [, forceRender] = useState(false);

  const updateState = (newState) => {
    if(!Object.is(ref.current, newState)) {
      ref.current = newState;
      forceRender(s => !s);
    }
  }

  if (isProp) {
    ref.current = value;
    return ref;
  }

  return [ref, updateState];
}

export default useAsyncReference;