import React, { useCallback, useState } from "react";

export default function useResetHook() {
  const [resetState, setResetState] = useState(false);
  const reset = useCallback(() => setResetState(!resetState), [resetState]);

  return { resetState, reset };
}
