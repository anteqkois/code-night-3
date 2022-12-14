'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import classNames from 'classnames';
import classnames from 'classnames';
import { ButtonHTMLAttributes, forwardRef } from 'react';

type ButtonVariant =
  | 'default'
  | 'success'
  | 'danger'
  | 'info'
  | 'clear'
  | 'overlay'
  | 'link'
  | 'ghost'
  | 'special'
  | 'minimalist';

type ButtonProps = {
  variant?: ButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant = 'default', ...props }, ref) => {
    return (
      <button
        {...props}
        // onKeyDown={(key) => key.code === 'Enter' && props.onClick()}
        // tabIndex='0'
        ref={ref}
        className={classNames(
          className,
          'rounded select-none text-sm font-medium state-focus',
          {
            'px-4 py-2 text-primary-50': [
              'default',
              'success',
              'danger',
              'special',
            ].includes(variant),
            'px-3.5 py-1.5': ['overlay', 'ghost'].includes(variant),
          },
          {
            default:
              'bg-primary-orange text-black hover:text-primary-200 hover:from-primary hover:via-primary hover:to-primary',
            success:
              'bg-gradient-to-tr from-secondary-500 via-secondary-600 to-secondary-700 hover:text-secondary-200 hover:from-secondary-700 hover:via-secondary-700 hover:to-secondary-800',
            danger:
              'bg-gradient-to-tr from-danger-400 via-danger-500 to-danger-500 hover:text-danger-200 hover:from-danger-500 hover:via-danger-600 hover:to-danger-600',
            info: '',
            clear: 'text-neutral-500 hover:text-neutral-900',
            overlay:
              'bg-neutral-100 text-neutral-800 shadow-md hover:bg-neutral-150',
            ghost:
              'border-2 border-neutral-200 outline-2 text-neutral-800 hover:bg-neutral-150',
            link: 'flex items-center gap-1 underline decoration-1.5 decoration-primary-light',
            special:
              'bg-gradient-to-tr from-primary  to-secondary-700 hover:from-primary-dark hover:to-secondary-800',
            minimalist:
              'block text-neutral-900 underline decoration-2 decoration-primary',
          }[variant]
        )}
      >
        {children}
        {variant === 'link' && <ArrowTopRightOnSquareIcon className="w-5" />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
