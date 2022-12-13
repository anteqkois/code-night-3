import Spinner from './Spinner';

export const PageSpinner = () => {
  return (
    <div className="absolute scale-150 top-1/2 left-1/2 -translate-x-1/2 -transalte-y-1/2">
      <Spinner></Spinner>
    </div>
  );
};
