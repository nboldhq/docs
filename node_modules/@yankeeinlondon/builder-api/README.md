# Builder API

This repo exposes everything you'll need to create your own "builder api" for the `vite-plugin-md` plugin.

## Example

`index.ts`

```ts
import { createBuilder, PipelineStage } from "@yankeeinlondon/builder-api";

export default createBuilder("my_builder", PipelineStage.parser)
    .options<{quantity: number}>()
    .initializer()
    .handler(
        // ok, this plugin doesn't do much :)
        async (payload, options) => payload
    )
    .meta()
```
