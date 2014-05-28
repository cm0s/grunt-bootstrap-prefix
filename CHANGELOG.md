# rCrumbs changelog

## 0.0.1
Initial release

## 0.1.0
### Breaking change:
  - Replace cssPath and jsPath options by cssSource and jsSource options. Instead of specifying a folder,
    these two new options require specific path(s) to the bootstrap css and js file(s).

### Fix:
  - Ensure the files are read as binary to avoid LF conversion to CRLF on Windows OS.