let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
console.log('parseParam(url)',parseParam(url)) 
function parseParam(url) {
    console.log('/.+\?(.+)$/.exec(url)',/.+\?(.+)$/.exec(url)) 

    const paramsStr = /.+\?(.+)$/.exec(url)[1]; // 将 ? 后面的字符串取出来

    console.log('paramsStr',paramsStr) 
    const paramsArr = paramsStr.split('&'); // 将字符串以 & 分割后存到数组中
    console.log('paramsArr',paramsArr) 
    let paramsObj = {};
    // 将 params 存到对象中
    paramsArr.forEach(param => {
      if (/=/.test(param)) { // 处理有 value 的参数
        let [key, val] = param.split('='); // 分割 key 和 value
        val = decodeURIComponent(val); // 解码
        val = /^\d+$/.test(val) ? parseFloat(val) : val; // 判断是否转为数字
  
        if (paramsObj.hasOwnProperty(key)) { // 如果对象有 key，则添加一个值
          paramsObj[key] = [].concat(paramsObj[key], val);
        } else { // 如果对象没有这个 key，创建 key 并设置值
          paramsObj[key] = val;
        }
      } else { // 处理没有 value 的参数
        paramsObj[param] = true;
      }
    })
  
    return paramsObj;
  }


  function parseURL(url){
    var urlObj={};
    urlObj.scheme = url.substring(0,url.indexOf(":")); //协议头
    var temp1=url.substring(url.indexOf("//")+2); //去掉协议头后剩下部分
    var temp2=temp1.substring(0,temp1.indexOf("/"))//域名+端口号,substring(start,stop) stop要比最后一个提取的字符位置多1
    urlObj.domaine = temp2.substring(0,temp1.indexOf(":"));
    urlObj.port = temp2.substring(temp1.indexOf(":")+1);
    
    if(temp1.indexOf("?")!=-1){
        urlObj.path =temp1.substring(temp1.indexOf("/")+1,temp1.indexOf("?"))//路径+文件名
        temp1.indexOf("#")!=-1? urlObj.params=temp1.substring(temp1.indexOf("?")+1,temp1.IndexOf("#"))
        :urlObj.params=temp1.substring(temp1.indexOf("?")+1)
    }else{
        urlObj.path =temp1.substring(temp1.indexOf("/")+1);
    }
    urlObj.fragment=temp1.substring(temp1.indexOf("#")+1);
    
    return urlObj;
  }

  console.log('url',parseURL(url))
  