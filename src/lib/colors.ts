/**
 * Color system for Niel Academy
 * This file provides a centralized way to manage colors throughout the application
 */

export const colors = {
  // Brand Colors
  brand: {
    primary: '#D97757',
    secondary: '#7c3aed',
    accent: '#f59e0b',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
  },
  
  // Neutral Colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  
  // Status Colors
  status: {
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Semantic Colors
  semantic: {
    text: {
      primary: 'var(--color-text-primary)',
      secondary: 'var(--color-text-secondary)',
      muted: 'var(--color-text-muted)',
      inverse: 'var(--color-text-inverse)',
    },
  },
} as const;

// Type definitions for better TypeScript support
export type BrandColor = keyof typeof colors.brand;
export type NeutralColor = keyof typeof colors.neutral;
export type StatusColor = keyof typeof colors.status;

// Utility functions for color usage
export const getBrandColor = (color: BrandColor) => colors.brand[color];
export const getNeutralColor = (shade: NeutralColor) => colors.neutral[shade];
export const getStatusColor = (status: StatusColor) => colors.status[status];

// CSS custom property helpers
export const cssVar = (property: string) => `var(--${property})`;

// Common color combinations
export const colorCombinations = {
  primary: {
    bg: colors.brand.primary,
    text: '#ffffff',
    hover: '#1d4ed8',
  },
  secondary: {
    bg: colors.brand.secondary,
    text: '#ffffff',
    hover: '#6d28d9',
  },
  success: {
    bg: colors.status.success,
    text: '#ffffff',
    hover: '#059669',
  },
  warning: {
    bg: colors.status.warning,
    text: '#ffffff',
    hover: '#d97706',
  },
  error: {
    bg: colors.status.error,
    text: '#ffffff',
    hover: '#dc2626',
  },
} as const;
