'use client'

import type React from 'react'
import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon'
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
    'bg-ink text-parchment border-ink hover:bg-laterite hover:border-laterite',
  secondary:
    'bg-parchment text-ink border-parchment hover:bg-laterite hover:text-parchment hover:border-laterite',
  outline:
    'bg-transparent text-ink border-ink/20 hover:bg-ink hover:text-parchment hover:border-ink',
  ghost:
    'bg-transparent text-parchment/80 hover:text-laterite border-transparent',
  icon:
    'bg-transparent text-ink border-ink/10 hover:bg-ink hover:text-parchment rounded-full',
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
    'border transition-all duration-500 overflow-hidden cursor-pointer',
    'focus-visible:outline-2 focus-visible:outline-laterite focus-visible:outline-offset-2',
  ].join(' ')
}

function getVariantClasses(variant: ButtonVariant) {
  let classes = variantStyles[variant]
  if (variant === 'ghost') {
    classes +=
      ' after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-laterite after:transition-all after:duration-500 hover:after:w-full'
  }
  return classes
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
              className="transition-transform duration-300 group-hover:translate-x-1"
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
            className="transition-transform duration-300 group-hover:translate-x-1 shrink-0"
          />
        )}
      </button>
    )
  }
)

Button.displayName = 'Button'
