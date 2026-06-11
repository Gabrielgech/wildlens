import React from 'react'

export default function FieldCard({ children }: { children?: React.ReactNode }) {
  return <div className="p-3 bg-surface rounded-md">{children}</div>
}
