/**
 * a simple javascript template parser
 */

function parse(tpl, data) {
    // 模板标签
    var re = /<%([^]+?)(?=%>)%>/g;
    // 用于检测是否存在JS关键词
    var jsExp = /(^( )?(if|for|else|switch|case|break|{|}))(.*)?/g;
    var res = null;

    var fnStr = 'var str = "";\n';
    var cursor = 0;

    while ((res = re.exec(tpl))) {
        fnStr += 'str += "' + tpl
                .slice(cursor, res.index)
                .replace(/"/g, "'") + '";\n';

        if (jsExp.test(res[1])) {
            // 如果存在则直接保留
            fnStr += res[1] + "\n";
        } else {
            // 否则进入字符串拼接环节
            fnStr += "str += " + res[1] + ";\n";
        }

        cursor = res.index + res[0].length;
    }

    fnStr += 'str += "' + tpl.substr(cursor) + '";';
    fnStr += "return str;";

    // 拼接执行函数
    var fn = new Function("data", fnStr);
    
    return fn(data);
}

module.exports = parse;