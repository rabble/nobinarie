# Homepage Design Decisions

## Overview

This document explains the design decisions made for the Nobinarie website homepage, focusing on visual design, component structure, and accessibility considerations.

## Color Scheme

We chose a vibrant rainbow color scheme for several reasons:

1. **Rainbow connection**: The rainbow is a widely recognized symbol for diversity and inclusion, which aligns with our project's inclusive language focus.
2. **Visual appeal**: The gradient provides visual interest and creates a cheerful, welcoming atmosphere.
3. **Contrast possibilities**: Each color in the rainbow provides good contrast options for both light and dark mode.
4. **Metaphor for spectrum**: The rainbow represents a spectrum rather than binary options, reinforcing our message about language inclusivity beyond binary gender structures.

The specific rainbow colors are defined in CSS variables to ensure consistency and easy theming:

- `--rainbow-red: #ff595e`
- `--rainbow-orange: #ff924c`
- `--rainbow-yellow: #ffca3a`
- `--rainbow-green: #8ac926`
- `--rainbow-blue: #1982c4`
- `--rainbow-purple: #6a4c93`
- `--rainbow-pink: #e84a7f`

## Layout Structure

The homepage uses a vertical section-based layout:

1. **Hero section**: Bold, attention-grabbing header with primary CTA buttons
2. **Features section**: Three-card layout explaining the "why" of inclusive language
3. **Tools section**: Three-card layout showcasing practical resources
4. **CTA section**: Final call-to-action to encourage user engagement

This structure follows a narrative flow:
- Introduce the concept → Explain the benefits → Show practical resources → Encourage action

We chose to use spacing, shadows, and subtle animations to create visual hierarchy rather than strong dividing lines or borders, creating a more fluid, modern feel.

## Component Design

### Card Components

Cards use a consistent structure with:
- Rainbow gradient borders at the top
- Clean white/dark backgrounds with good contrast
- Consistent padding and typography
- Subtle shadow effects
- Hover interactions where appropriate

Alternatives considered:
- Full gradient backgrounds (rejected for readability concerns)
- Border-only designs (rejected for insufficient visual impact)
- Individual color-coded cards (rejected for less unified visual identity)

### Typography

We chose a system font stack to ensure:
- Optimal performance (no font loading)
- Native appearance on each platform
- Excellent readability

Text sizes scale appropriately from mobile to desktop, with a focus on readability and proper hierarchy.

## Accessibility Considerations

The design incorporates several accessibility features:

1. **Dark mode support**: Full support for both light and dark color schemes, respecting user preferences
2. **Keyboard navigation**: All interactive elements are properly focusable with clear focus states
3. **Semantic HTML**: Properly structured headings, landmarks and semantic HTML elements
4. **Color contrast**: All text meets WCAG AA standards for contrast
5. **Decorative elements**: Bubble animations are purely decorative and don't interfere with content understanding

## Responsive Design

The homepage is designed with a mobile-first approach:
- Single-column layouts on small screens
- Multi-column layouts on larger screens
- Properly scaled typography and spacing
- Touch-friendly target sizes for interactive elements

## Animation and Interactivity

Animations are subtle and purposeful:
- Rainbow text gradient animation draws attention to the main headline
- Floating "bubble" background elements add visual interest without distraction
- Hover effects on cards and buttons provide feedback without being disruptive
- All animations respect user preferences for reduced motion

## Future Considerations

Areas for potential future enhancement:
- Adding a language switcher for international audiences
- Implementing a cookie consent banner
- Adding testimonials or usage examples section
- Incorporating interactive demos of inclusive language in action