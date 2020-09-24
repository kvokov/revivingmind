import React, { useEffect } from 'react';

const NotFoundPage = () => {
  useEffect(() => { document.title = 'Page Not Found'; }, []);

  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  );
}

export default NotFoundPage;
