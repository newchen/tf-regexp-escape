/**
 * 字符串转为正则
 * @param  {String} str              待转化的字符串
 * @param  {String|Array} exclude    str中有些正则符号不需要转换，可选，该值也可能是flag参数
 * @param  {[type]} flag             正则表达式的修饰符，'i' 'g' 'u' 'y'等，可选
 * @return {RegExp}                  转化后的正则
 */
export default function (str, exclude, flag) {
    // exclude其实是修饰符
    if (typeof exclude === 'string' &&
        /[a-zA-Z]+/.test(exclude)) {
        flag = exclude;
        exclude = null;
    }

    exclude = exclude ? [].concat(exclude) : [];

    let symbol = ['-', '[', ']', '/', '{', '}', '(', ')', '*', '+', '?', '.', '\\', '^', '$', '|'];

    if (exclude.length > 0) {
        symbol = symbol.filter(v => exclude.indexOf(v) === -1);
    }

    // 最终生成类似：/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g
    let reg = new RegExp('[\\' + symbol.join('\\') + ']', 'g');
    str = str.replace(reg, "\\$&");

    return new RegExp(str, flag || '');
}