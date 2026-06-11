import React from 'react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'danger' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  icon?: ReactNode
  loading?: boolean
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary: 'bg-[#2D6A4F] text-white hover:bg-[#52B788] focus:ring-[#52B788]/50',
  danger: 'bg-[#E63946] text-white hover:bg-[#d62828] focus:ring-[#E63946]/50',
  secondary: 'bg-[#16213E] border border-[#2D6A4F] text-[#52B788] hover:bg-[#1b2641] focus:ring-[#52B788]/40',
  ghost: 'bg-transparent text-[#52B788] hover:bg-white/5 focus:ring-[#52B788]/40'
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-3 text-lg'
}

export default function Button({
  variant = 'primary',
  size = 'md',
  icon,
  loading,
  disabled,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition duration-200 ease-out ${variantClasses[variant]} ${sizeClasses[size]} ${disabled || loading ? 'cursor-not-allowed opacity-70' : 'hover:shadow-lg'}`}
      {...rest}
    >
      {loading ? <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" /> : icon}
      <span>{children}</span>
    </button>
  )
}
