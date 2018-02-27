thiny-tpl
===
一个精简的JS模板引擎

## 使用
### 模板标签
`<% %>`一对JSP风格的模板标签

### parse

```
let parse = require('../src/index.js')
let data = { skills: ["js", "html", "css"] }
let tpl = "My skills:" + "<%for(var index in data.skills) {%>" + '<a href="#"><%data.skills[index]%></a>' + "<%}%>"

let res = parse(tpl, data)
```

### todo
* 模板标签配置
