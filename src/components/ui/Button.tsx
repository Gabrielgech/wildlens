import React from 'react'

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 bg-primary text-textLight rounded-md">{children}</button>
  )
}
