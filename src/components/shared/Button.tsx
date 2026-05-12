'use client'

import type React from 'react'
import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon' | 'accent'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonBaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  disabled?: boolean
  loading?: boolean
  arrow?: boolean
  children: React.ReactNode
  className?: string
}

type ButtonAsButton = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined
  }

type ButtonAsLink = ButtonBaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-parchment border-ink relative overflow-hidden after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:bg-laterite after:transition-all after:duration-500 hover:shadow-lg hover:shadow-ink/20 hover:after:w-3/4 hover:scale-[1.02] active:scale-[0.98]',
  secondary:
    'bg-transparent text-ink border-ink/20 hover:bg-ink hover:text-parchment hover:border-ink hover:shadow-lg hover:shadow-ink/10',
  accent:
    'bg-laterite text-parchment border-laterite hover:bg-laterite-dark hover:border-laterite-dark hover:shadow-xl hover:shadow-laterite/30 hover:scale-[1.02] active:scale-[0.98]',
  outline:
    'bg-transparent text-ink border-ink/30 shadow-[inset_0_0_0_1px_var(--color-ink)] hover:bg-[repeating-linear-gradient(45deg,var(--color-line)_0,var(--color-line)_1px,transparent_1px,transparent_10px)] hover:border-ink/60',
  ghost:
    'bg-transparent text-parchment/80 hover:text-laterite border-transparent relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-laterite after:transition-all after:duration-500 hover:after:w-full',
  icon:
    'bg-transparent text-ink border-ink/10 hover:bg-laterite hover:text-parchment hover:border-laterite',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-[10px]',
  md: 'px-8 py-4 text-[11px]',
  lg: 'px-12 py-6 text-[12px]',
}

function getBaseClasses() {
  return [
    'relative inline-flex items-center justify-center gap-3',
    'font-sans font-bold uppercase tracking-widest',
    'border transition-all duration-500 ease-out cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-laterite focus-visible:outline-offset-2',
    'active:shadow-[0_0_0_3px_var(--color-laterite)]',
  ].join(' ')
}

function getVariantClasses(variant: ButtonVariant) {
  return variantStyles[variant]
}

function getSizeClasses(variant: ButtonVariant, size: ButtonSize) {
  if (variant === 'icon') return 'p-4'
  return sizeStyles[size]
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (props, ref) => {
    const { variant = 'primary', size = 'md', loading, arrow, children, className, ...rest } = props

    const classes = [
      getBaseClasses(),
      getVariantClasses(variant),
      getSizeClasses(variant, size),
      variant !== 'icon' && 'group',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    if ('href' in rest && rest.href !== undefined) {
      const { href, ...anchorRest } = rest as Omit<ButtonAsLink, keyof ButtonBaseProps>
      return (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes + ' cursor-pointer'}
          {...anchorRest}
        >
          {children}
          {arrow && (
            <ArrowRight
              size={14}
              className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 shrink-0"
            />
          )}
        </a>
      )
    }

    const { disabled, ...buttonRest } = rest as Omit<ButtonAsButton, keyof ButtonBaseProps>

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled || loading}
        className={classes}
        {...buttonRest}
      >
        {loading && (
          <span className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
        )}
        {children}
        {arrow && (
          <ArrowRight
            size={14}
            className="transition-all duration-300 group-hover:translate-x-1 group-hover:scale-110 shrink-0"
          />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
