# Brilliant Errors

> **Note:** the version 6.x of this library had moved to newer dependencies wand the `callsites` library  _only_ support the ESM module system these days but because we were packaging up in both ESM and CJS it was causing errors. I had intended to keep CJS around for a while longer but in most cases you really should be preferring ESM anyway. In version **7.x** and going forward we are only publishing version ESM. If you still need CJS you can use the latest `0.5.x` release.

The base errors you get from Javascript leave a lot to be desired and this library attempts to provide a _consistent_ way to provide solid meta information on errors raised in Typescript/Javascript projects.

This library provides two _configurators_ for errors:

1. `createError` - the default error type provides an Error with strongly typed classification but does not require an HTTP status code for errors (you _are_ allowed to add the HTTP status code)

    ```ts
    type ErrorType = "not-allowed" | "unexpected" | "missing-info";
    const MyError = createError<ErrorType>(e => e.name("MyError").origin("my-app"));

    // instantiation
    const error = new MyError("I've fallen and I can't get up", "unexpected/old-age");
    
    // static initializers for edge cases
    const error = MyError.withUnderlying(err, "No really, I can't get up", "unexpected/fer-fucks-sake");
    const error = MyError.withHttpCode(500, "Not worth repeating", "unexpected/web-fall");

    // options hash (means you can get to everything if you need it)
    const error = new MyError("Just stop it", "not-allowed/shit-happens", { underlying: err, httpStatus: 500 });
    ```

2. `createHttpError` - an HTTP error produces errors which are guarenteed to have an HTTP status code as part of their payload but they also follow the Type/Subtype conventions in the base error.

    ```ts
    const HttpError = createHttpError<ErrorType, SubType>(e => 
        e.name("HttpError")
         .origin("my-network-app")
         .defaultType("missing-info")
    );

    // instantiotion
    const error = new HttpError(403, "couldn't find member's id", "no-membership-id");

All errors have the following attributes:

- `kind` - a string literal type for the error family the error originates from
- `name` - a string literal type for the error name
- `origin` - a string literal type for the application/service which originated this error
- `classification` - strongly typed Type/Subtype system
- `httpStatus` - a numeric HTTP status code that can (and in some cases must) be set
- `underlying` - all errors _can_ store an underlying error and the wrapper error requires it

They also have brilliant `.toJSON()` and `message` outputs which shine above the plain old vanilla JS error.

For a repo which wants to use these configurators, you will create a file in your repo for the new error and then configure it something like this:

`src/error/MyError.ts`:

```ts
export default MyError = createLibraryError('MyError', { ... });
```

All options in the configurators are strongly typed which includes full documentatory information so rather than try to repeat that here we emplore you to use the _built-in_ Typescript documentation within your code editor of choice.
