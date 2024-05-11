import { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

//component for testing ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);

  const onThrowError = () => setError(true);

  useEffect(() => {
    if (error) throw new Error();
  }, [error]);

  // eslint-disable-next-line i18next/no-literal-string
  return <Button onClick={onThrowError}>throw bug</Button>;
};
