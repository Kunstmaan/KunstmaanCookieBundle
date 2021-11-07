UPGRADE FROM 1.x to 6.0
=======================

The source code of this bundle was moved to the [Kunstmaan/KunstmaanBundlesCMS](https://github.com/Kunstmaan/KunstmaanBundlesCMS) monorepo
and will follow its versioning from 6.0. So projects depending on the library should update the version constraint from 
`^1.O` to `^6.0` to receive new updates (v1.7.0 will be the last 1.x release). 

## BC-breaks in 6.0:

- If you include the js in your website or frontend build process, you should update the index.js file path. This was changed to the default `assets:install` location

Before:

### Via ES Module pattern
```
import '../../../../../../vendor/kunstmaan/cookie-bundle/bin/';
```
### Via buildtool
```
vendor/kunstmaan/cookie-bundle/src/Resources/ui/bin/index.js
```
  
After 

### Via ES Module pattern
```
import '<web or public>/bundles/kunstmaancookie/js/';
```

### Via buildtool
```
<web or public>/bundles/kunstmaancookie/js/cookie-bundle.min.js
```

- The deprecated `views/Components/TabBarContentPanel.html.twig` twig file was removed.
