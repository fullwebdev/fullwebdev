function isEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (let i = 0; i < newInputs.length; i += 1) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }
  return true;
}

export function memLatest(fn) {
  let lastArgs;
  let lastResult;
  let calledOnce;

  function memoized(...newArgs) {
    if (calledOnce && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = fn.apply(this, newArgs);
    calledOnce = true;
    lastArgs = newArgs;
    return lastResult;
  }

  return memoized;
}
