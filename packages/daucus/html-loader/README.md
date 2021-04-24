# `@daucus/html-loader`

> Conceived for Daucus, but can also be used independently.
>
> :book: [Documentation](https://fullweb.dev/daucus)

## Web Components

### html-loader

Load and render remote HTML template files

#### Properties

| Property   | Attribute  | Modifiers | Type     | Description            |
| ---------- | ---------- | --------- | -------- | ---------------------- |
| `fallback` | `fallback` | readonly  | `string` | Default template's URL |
| `href`     | `href`     |           | `string` | Template's URL         |

#### Methods

<!-- prettier-ignore -->
| Method          | Type                    | Description |
| --------------- | ----------------------- | ----------- |
| `staticContent` | `(nodeOrString?: string | Node | undefined): void` | Instantly render a static content instead of a remote HTML template<br /><br />**nodeOrString**: The HTML string or Node to render. |

#### Events

| Event                | Type                             | Description                                           |
| -------------------- | -------------------------------- | ----------------------------------------------------- |
| `html-loaded`        | `CustomEvent<{ href: string; }>` | HTML template successfully loaded                     |
| `html-loading-error` |                                  | An error occured when trying to load an HTML template |
| `html-reset`         | `CustomEvent<any>`               | Element's content reset                               |
