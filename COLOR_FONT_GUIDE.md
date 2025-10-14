# 🎨 Niel Academy - Color & Font Usage Guide

## 🎨 **Color System**

### **Brand Colors**
```jsx
// Primary (Orange: #D97757)
<h1 className="text-brand-primary">Title</h1>
<button className="bg-brand-primary text-white">Button</button>

// Secondary (Purple: #7c3aed)
<h2 className="text-brand-secondary">Subtitle</h2>
<div className="bg-brand-secondary text-white">Card</div>

// Accent (Yellow: #f59e0b)
<span className="text-brand-accent">Highlight</span>
<button className="bg-brand-accent text-white">CTA</button>
```

### **Neutral Colors (50-950 scale)**
```jsx
// Light to Dark
<p className="text-neutral-50">Lightest text</p>
<p className="text-neutral-500">Medium text</p>
<p className="text-neutral-900">Darkest text</p>

// Backgrounds
<div className="bg-neutral-50">Light background</div>
<div className="bg-neutral-100">Slightly darker</div>
<div className="bg-neutral-900">Dark background</div>
```

### **Status Colors**
```jsx
// Success (Green)
<div className="bg-success text-white">Success message</div>
<span className="text-success">Success text</span>

// Warning (Yellow)
<div className="bg-warning text-white">Warning message</div>

// Error (Red)
<div className="bg-error text-white">Error message</div>

// Info (Blue)
<div className="bg-info text-white">Info message</div>
```

## 🔤 **Font System**

### **Automatic Typography**
```jsx
// Headings automatically use Source Serif 4
<h1>Large Serif Title</h1>      // Source Serif 4 Bold
<h2>Medium Serif Title</h2>     // Source Serif 4 SemiBold
<h3>Small Serif Title</h3>      // Source Serif 4 SemiBold

// Body text automatically uses Roboto
<p>This paragraph uses Roboto</p>
<span>This span uses Roboto</span>
<button>This button uses Roboto</button>
<div>This div uses Roboto</div>
```

### **Manual Font Override**
```jsx
// Force Source Serif 4
<div className="font-serif">This uses Source Serif 4</div>

// Force Roboto
<div className="font-sans">This uses Roboto</div>
```

## 🎯 **Common Patterns**

### **Hero Section**
```jsx
<div className="text-center py-12">
  <h1 className="text-brand-primary text-5xl font-bold">Main Title</h1>
  <h2 className="text-brand-secondary text-2xl">Subtitle</h2>
  <p className="text-neutral-600 text-lg">Description</p>
</div>
```

### **Card Component**
```jsx
<div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
  <h3 className="text-neutral-800 text-xl font-semibold">Card Title</h3>
  <p className="text-neutral-600">Card description</p>
  <button className="bg-brand-primary text-white px-4 py-2 rounded">
    Action Button
  </button>
</div>
```

### **Status Messages**
```jsx
<div className="bg-success text-white p-4 rounded-lg">
  <h4 className="font-semibold">✅ Success!</h4>
  <p>Your action was successful.</p>
</div>
```

### **Button Variations**
```jsx
// Primary Button
<button className="bg-brand-primary text-white px-4 py-2 rounded">
  Primary Action
</button>

// Secondary Button
<button className="bg-brand-secondary text-white px-4 py-2 rounded">
  Secondary Action
</button>

// Accent Button
<button className="bg-brand-accent text-white px-4 py-2 rounded">
  Accent Action
</button>
```

## 🚀 **Quick Tips**

1. **Always use utility classes** instead of hardcoded colors
2. **Headings automatically get Source Serif 4** - no need to specify
3. **Body text automatically gets Roboto** - no need to specify
4. **Use semantic colors** for status messages (success, warning, error)
5. **Use neutral colors** for text hierarchy (600 for body, 800 for headings)
6. **Combine colors and fonts** for consistent design

## 📝 **Examples in Your App**

Your current App.tsx demonstrates all these patterns:
- Hero section with brand colors
- Course cards with neutral colors
- Interactive buttons with brand colors
- Status messages with semantic colors
- Automatic font usage (Source Serif 4 for headings, Roboto for body)

