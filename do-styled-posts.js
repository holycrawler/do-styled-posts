const createStyledPost = (children, style = {}) => {
  // Convert children to a string
  const childrenString = Array.isArray(children) ? children.join("") : children;

  // Convert camelCase to kebab-case and filter out 'color'
  const styleEntries = Object.entries(style).filter(([key]) => key !== "color");
  const mappedStyles = styleEntries
    .map(([key, value]) => {
      const kebabCaseKey = key.replace(/([A-Z])/g, "-$1").toLowerCase();
      return `${kebabCaseKey}:${value}`;
    })
    .join(";");

  // Construct style string with color first
  const styleString = `${style.color || "black"};${mappedStyles}`;

  // Return the BBCode formatted string
  return `[color=${styleString}]${childrenString}[/color]`;
};
