## 使用方式：

### script标签引入
```javascript
<script type="text/javascript" src="./dist/index.js" />

var escapeStrToReg = TfRegExp.default;
escapeStrToReg("^abc/", "^", "g");
escapeStrToReg("^abc/", "g");
```

### es6方式引入
```javascript
import escapeStrToReg from "tf-regexp-escape";

escapeStrToReg("^abc/", "^", "g");
escapeStrToReg("^abc/", "g");
```
