import React from 'react';
import { useParams } from 'react-router';

const withParams = WrappedComponent => {
  const NewComponent = props => {
    const params = useParams();
    return <WrappedComponent params={params} {...props} />;
  };

  return NewComponent;
};

export default withParams;
