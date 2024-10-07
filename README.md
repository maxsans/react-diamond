
# ![logo](https://raw.githubusercontent.com/maxsans/template-react-diamond/refs/heads/main/img/react-diamond.png) `react-diamond`

[![npm version](https://badge.fury.io/js/react-diamond-container.svg)](https://badge.fury.io/js/react-diamond)

A React component library for creating diamond-shaped containers with lazy-loaded images and customizable styles.

<img src='https://raw.githubusercontent.com/maxsans/template-react-diamond/refs/heads/main/img/FullScreen5items.png' alt='Diamond Container on PC' />
<img src='https://github.com/maxsans/template-react-diamond/blob/main/img/FullScreenMobile5items.png?raw=true' alt='Diamond Container on Mobile' />
<img src='https://github.com/maxsans/template-react-diamond/blob/main/img/FullScreen3items.png?raw=true' alt='Diamond Container with Three Items' />

### Current Maintainers:
- [Maxsans](https://github.com/maxsans) 

### Content

- Installation
- Usage
- Customization
- Example
- Questions?

### Installation

```bash
yarn add react-diamond@lastest
```

### Usage

#### DiamondContainer

| Property | Type | Description | Default |
| ----------- | ----------- | ----------- | ----------- |
| `items` | `Array<DiamondItem>` | Array of items to display in the diamond containers | `[]` |

#### DiamondItem

| Property | Type | Description |
| ----------- | ----------- | ----------- |
| `title` | `string` | Title of the item |
| `onClick` | `function` | Function to call when the item is clicked |
| `image` | `string` | URL of the image to display |

### Customization

You can customize the appearance of the diamond containers using CSS variables:

| Variable | Description |
| ----------- | ----------- |
| `--borderColorDiamond` | Color of the diamond border |
| `--textColorDiamond` | Color of the text |
| `--backgroundColorDiamond` | Background color behind the images |

### Example

```tsx
import React from 'react';
import Diamond from 'react-diamond-container';
import img1 from 'path/to/img1.png';
import img2 from 'path/to/img2.png';

const items = [
  {
    title: "Part 1",
    onClick() { alert("Part 1 clicked"); },
    image: img1,
  },
  {
    title: "Part 2",
    onClick() { alert("Part 2 clicked"); },
    image: img2,
  },
  // Add more items as needed
];

const App = () => (
  <div style={{
    '--borderColorDiamond': '#5e3a78',
    '--textColorDiamond': '#ffffff',
    '--backgroundColorDiamond': '#000000',
  }}>
    <Diamond items={items} />
  </div>
);

export default App;
```

Tip: For a better experience, if you want the component in full screen, deactivate the scroll bar.
```scss
body {
  overflow: auto;
}

/* Firefox */
@supports (-moz-appearance: none) {
  body {
    scrollbar-width: none;
  }
}

/* WebKit (Chrome, Safari) */
@media screen and (-webkit-min-device-pixel-ratio: 0) {
  body::-webkit-scrollbar {
    width: 0;
  }
}
```

Tip: Add this link to your `index.html` for the font family.

```html
<link
  href="https://fonts.googleapis.com/css?family=JetBrains Mono"
  rel="stylesheet"
/>
```

### Questions?

Feel free to [create an issue](https://github.com/maxsans/react-diamond/issues/new) if you encounter any problems or have any questions.

### Demo

Check out the [template](https://github.com/maxsans/template-react-diamond) to see the component in action.

### Notes

- The library is available only for React.
- The layout changes from horizontal to vertical on mobile devices.
- Single item layouts are also supported.
- Images are lazy-loaded for performance optimization.
- Continuous improvements and updates are being made.

