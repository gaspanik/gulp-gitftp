# gulp-gitftp

Simple git-ftp upload tasks w/ gulp.

## Requirement

* [git ftp](https://github.com/git-ftp/git-ftp)

### Install w/ Homebrew

```
$ brew install curl --with-ssl --with-libssh2 git-ftp
```

## Usage

Install gulp and some dependencies.

```
$ npm install
```

Open `gulpfile.js` and set your environment.

```js
var config = {
  'username': 'your ftp username',
  'passwd': 'your ftp password',
  'host': 'ftp.example.com/public_html', // set ftp hostname. eg. 'ftp.example.com/htdocs'
  'root': './' // set local syncroot path. eg. './', './public_html' etc
}
```

* git-ftp options:  [git-ftp/git-ftp.1.md at develop](https://github.com/git-ftp/git-ftp/blob/develop/man/git-ftp.1.md)

First time, you need to run `gulp ftp-init`.

```
$ gulp ftp-init
```

`gulp ftp-init` initializes the first upload to remote host.

Uploads files which have changed since last upload.

```
$ gulp ftp-push
```

---

MIT
