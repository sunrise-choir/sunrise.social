# sunrise.social

a landing page for [the Sunrise Social android app](https://github.com/sunrise-choir/sunrise-social-android-app

## Misc

### How to remove offline service worker

In browser console:

```js
navigator.serviceWorker.getRegistrations().then(registrations => {
  for (let registration of registrations) {
    registration.unregister()
  }
})
```
