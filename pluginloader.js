const parser =  require('@babel/parser') ;// 可以把js源码转成 ast语法树
const traverse = require('@babel/traverse').default // 可以递归遍历 ast节点
const generator = require('@babel/generator').default; // 把修改好的ast语法树 再转成源码字符串
const types = require('@babel/types') // 操作节点的增删改
// loader
module.exports = function(source){
    const ast = parser.parse(source,{sourceType:'module'})
    // console.log(ast.program.body);
    traverse(ast,{
        CallExpression(path){
            // console.log(path)
            if(types.isMemberExpression(path.node.callee) && types.isIdentifier(path.node.callee.object,{name:'console'})){
               path.remove()
            }  
        }
    })
    const output = generator(ast,{},source);
    return output.code
}

// plugin
class Myplugin{
    // 可以再打包的时候产生一个新的文件
        constructor(options){
        // new 这个插件是传进来的参数
            this.options = options
        }
        apply(compiler){
            const hooks = compiler.hooks;
            if(hooks){
                hooks.emit.tap('myplugin',function(complication,callback){
                    var str = '文件列表是:\n';
                    for(let k in complication.assets){
                        str += `文件名:${k},,,大小是 ${ complication.assets[k].size()} \n\n`
                    }
                    complication.assets['myfile.md'] = {
                        source(){
                            return str
                        },
                        size(){
                            return str.length
                        }
                    }
                    callback&&callback()
                })
            }else{
                compiler.plugin('emit',function(complication,callback){
                    var str = '文件列表是:\n';
                    for(let k in complication.assets){
                        str += `文件名:${k},,,大小是 ${ complication.assets[k].size()} \n\n`
                    }
                    complication.assets['myfile.md'] = {
                        source(){
                           return str
                        },
                        size(){
                           return str.length
                        }
                    }
                    callback&&callback()
                })
            }
        }
}
module.exports = Myplugin


// plugins/FileListPlugin.js

class FileListPlugin {
    constructor (options) {
    	// 获取插件配置项
        this.filename = options && options.filename ? options.filename : 'FILELIST.md';
    }

    apply(compiler) {
        // 注册 compiler 上的 emit 钩子
        compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
            
            // 通过 compilation.assets 获取文件数量
            let len = Object.keys(compilation.assets).length;

            // 添加统计信息
            let content = `# ${len} file${len>1?'s':''} emitted by webpack\n\n`;

            // 通过 compilation.assets 获取文件名列表
            for(let filename in compilation.assets) {
                content += `- ${filename}\n`;
            }

            // 往 compilation.assets 中添加清单文件
            compilation.assets[this.filename] = {
            	// 写入新文件的内容
                source: function() {
                    return content;
                },
                // 新文件大小（给 webapck 输出展示用）
                size: function() {
                    return content.length;
                }
            }

            // 执行回调，让 webpack 继续执行
            cb();
        })
    }
}

module.exports = FileListPlugin;