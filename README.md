# Logger

A responsive web app to Create New Log Entries. Log entries can be pinned, searched, and deleted.

View live demo at: [log.fakefarm.com](http://log.fakefarm.com)

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your end-to-end tests

```
npm run test:e2e
```

```
Running:  Happy Path
 ✔ Element <#app> was visible after 37 milliseconds.
 ✔ Testing if element <#log> contains text: "Log".
 ✔ Element <#new-log-btn> was visible after 549 milliseconds.
 ✔ Element <#log-title> was visible after 548 milliseconds.
  Warn: WaitForElement found 3 elements for selector ".entry". Only the first one will be checked.
 ✔ Element <.entry> was visible after 33 milliseconds.

OK. 5 assertions passed. (5.8s)
```

### Run your unit tests

```
npm run test:unit
```

```
Nav (components/app/Nav.vue)
    Theme Management
      Mode manages colors
        ✓ #mode
        ✓ #changeMode
      Text manages typography
        ✓ #text
        ✓ #changeText
      Fires a 'style' event
        ✓ #renderStyle

  Entry (components/log/Entry.vue)
    ✓ renders props when passed
    computed
      ✓ title
      ✓ body

  Log Model (components/log/model.js)
    Class Methods
      #destroy(env,'id')
        ✓ archives
      #find(env,'id')
        ✓ by id
      #search(env,'id')
        ✓ by title
      #pin(env,'id')
        ✓ returns a boolean
        ✓ toggles
      #all(env)
        ✓ returns all active entries
      #partition(env)
        ✓ divides entries into pin and not pinned
      #count(env,['log', 'pinned', 'deleted'])
        ✓ log
        ✓ pinned
        ✓ deleted
    Instance Methods
      #title
        ✓ is accessible
        ✓ is required
        ✓ is not valid as null, undefined, or empty string
      #body
        ✓ is accessible
      #save
        ✓ does not save if validation errors
        ✓ returns self if no errors
      #valid
        ✓ check if subject can be saved
      #data
        ✓ returns self if no errors
    Validations
      ✓ Missing title is invalid log
      ✓ Valid logs do not have errors


  28 passing (112ms)
```
