/**
 * A shared Stylelint configuration for the repository.
 *
 * @type {import("stylelint").Config}
 */
export const config = {
  extends: [
    "stylelint-config-standard",
    "stylelint-config-recommended",
    "@stylistic/stylelint-config",
  ],
  plugins: ["stylelint-order"],
  rules: {
    // Property order
    "order/properties-alphabetical-order": true,
    
    // Color
    "color-no-invalid-hex": true,
    "color-hex-length": "short",
    
    // Font
    "font-family-no-duplicate-names": true,
    "font-family-no-missing-generic-family-keyword": true,
    
    // Function
    "function-calc-no-unspaced-operator": true,
    "function-linear-gradient-no-nonstandard-direction": true,
    
    // String
    "string-no-newline": true,
    
    // Unit
    "unit-no-unknown": true,
    
    // Property
    "property-no-unknown": true,
    
    // Declaration
    "declaration-block-no-duplicate-properties": true,
    "declaration-block-no-shorthand-property-overrides": true,
    
    // Block
    "block-no-empty": true,
    
    // Selector
    "selector-pseudo-class-no-unknown": true,
    "selector-pseudo-element-no-unknown": true,
    "selector-type-no-unknown": true,
    
    // Media feature
    "media-feature-name-no-unknown": true,
    
    // At-rule
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "variants",
          "responsive",
          "screen",
          "layer",
        ],
      },
    ],
    
    // Comment
    "comment-no-empty": true,
    
    // General / Sheet
    "no-duplicate-at-import-rules": true,
    "no-duplicate-selectors": true,
    "no-empty-source": true,
    "no-extra-semicolons": true,
    "no-invalid-double-slash-comments": true,
  },
  ignoreFiles: [
    "node_modules/**/*",
    "dist/**/*",
    "build/**/*",
    ".next/**/*",
    "coverage/**/*",
    "storybook-static/**/*",
  ],
}; 