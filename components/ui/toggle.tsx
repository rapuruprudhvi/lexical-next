import React from 'react';

interface ToggleProps {
  ariaLabel: string;
  onToggle?: () => void;
  children: React.ReactNode;
}

export function Toggle({ ariaLabel, onToggle, children }: ToggleProps) {
  const handleClick = () => {
    if (onToggle) onToggle();
  };

  return (
    <button
      aria-label={ariaLabel}
      onClick={handleClick}
      className="p-2 rounded hover:bg-gray-300"
    >
      {children}
    </button>
  );
}
