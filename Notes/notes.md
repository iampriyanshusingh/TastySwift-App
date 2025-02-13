# REDUX TOOLKIT

## Writing Data

- this is `not mandatory`.
- just like this `redux` there is another `justang` like thing to use.
- `react-redux` is older version of writing redux `(vanila redux)`.
- `react-toolkit` is newer version of writing redux `(RTK Query)`.
- it having part of the redux store, and it is known as `slices`.
- just suppose we have one button and we clicked on it and it `dispatches`an `action` and this `action will call the function` and it will be changed or do something we that.
- and this function is known as `reducer`.

## Getting Data

- here we use something known as `selector`.
- this phenomena is known as `subscribing to the store`.
- ![alt text](image-1.png)

### WorkFlow

- Install `@reduxjs/toolkit` and `react-redux`.
- Build our store.
- Connect our store to our app.
- `Slice (cartSlice)`.
- `dispatch(action)`.
- Selector.

- importing `configure Store` from `react-redux` in `appStore.js`.
- importing `Provider` from `react-redux` in `app.jsx`.
- added `Provider` Component with `appStore` as a `prop`.
- importing `createSlice` from `react-redux` in the `cartSlice.js` file.
- 