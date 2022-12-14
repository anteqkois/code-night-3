import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

export const ErrorMessage = ({ children, className }) => {
  return (
    <h6 className={`text-danger text-center flex-center ${className}`}>
      <ExclamationCircleIcon className="icon bg-transparent stroke-danger-600 stroke-2" />
      {children}
    </h6>
  );
};

export default ErrorMessage;