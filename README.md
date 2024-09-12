# @nashanunais/npm-package

## Description

A utility package for generating mock organiser data with customizable properties.

## Installation

To install this package, use npm or yarn:

```bash
npm install @nashanunais/npm-package
```

or

```bash
yarn add @nashanunais/npm-package
```

## Usage

### Importing

```typescript
import generateMockOrganiser from "@nashanunais/npm-package";
```

### Generating Default Data

```typescript
const defaultOrganiser = generateMockOrganiser();
console.log(defaultOrganiser);
```

### Customizing Data

```typescript
const customOrganiser = generateMockOrganiser({
  email: "custom@example.com",
  city: "Custom City",
});
console.log(customOrganiser);
```

### Parameters

- **`overrides`** (optional): An object to override any subset of `Organiser` properties.
