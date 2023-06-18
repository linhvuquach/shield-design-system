1. Project structure

To ensure the scalability and maintainability of our project structure, we’ve adopted the best practices of Monorepo and Turborepo, which are intelligent build systems specifically designed for JavaScript and Typescript codebases. By leveraging these advanced tools, we can efficiently develop our project while optimizing the build process. This approach allows us to streamline our workflow, manage dependencies more effectively, and enhance the overall maintainability of our codebase.

```
shield-design-system
└── apps                           
|   ├── shield-react
      + ├── .storybook    # UI development, testing, and documentation
      + ├── src           # Design systems
          + ├── app       # Construct a screen out of components (Next.js project) 
          + ├── lib       # Place components, it's also responsible for publishing the NPM package
              + ├── functions # 
              + ├── hooks     # 
              + ├── types     # Global functions, hooks, types, and variables used across the entire components 
              + ├── variables #
              + ├── ui        # Components scoped to a specific component
          + ├── shared    # All the global configuration, etc. get exported from here and used in the app
          + ├── stories   # Show general Storybook like guidelines, design tokens, and introduction
          + ├── styles    # Global styles, and tokens style if needed to show on Storybook stories (it's clone from shield-tokens styles value')
|     
└── packages         
    ├── shield-tokens              # Design tokens
    ├── shield-eslint-config       # Shared eslint config throughout turbo
    ├── shield-tsconfig            # Shared ts config throughout turbo
```

2. Compilation

To make the core library code work across all browsers, we need to compile the raw TypeScript and React code to plain JavaScript. We can accomplish this with tsup, which uses esbuild to greatly improve performance.