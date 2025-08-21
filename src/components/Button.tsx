// Button.tsx
import React from "react";

interface IButton {
  label: string;
  onClick: () => void;
}

export const Button = ({ label, onClick }: IButton) => {
  return <button onClick={onClick}>{label}</button>;
};