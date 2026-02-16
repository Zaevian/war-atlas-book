import React from "react";

/**
 * Parses a string for **bold** markdown syntax and returns
 * an array of React elements with <strong> tags for bolded segments.
 * If the input is not a string, it is returned as-is.
 */
export function renderBold(text) {
  if (typeof text !== "string") return text;
  const parts = text.split(/\*\*(.+?)\*\*/g);
  if (parts.length === 1) return text;
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part,
  );
}
