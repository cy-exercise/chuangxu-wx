let util = {
  random_string: function (len) {
    len = len || 32
    let chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
    let maxPos = chars.length
    let pwd = ''
    for (let i = 0; i < len; i++) {
      pwd += chars.charAt(Math.floor(Math.random() * maxPos))
    }
    return pwd
  },

  get_suffix: function (filename) {
    let pos = filename.lastIndexOf('.')
    let suffix = ''
    if (pos != -1) {
      suffix = filename.substring(pos)
    }
    return suffix
  },

  get_object_name: function (filename) {
    let suffix = this.get_suffix(filename)
    return this.random_string(10) + suffix
  },

  wordCount: function (txt) {
    if (txt != '') {
      // txt = $.trim(txt);
      // if (txt == "") return 0;

      let content = txt.split(/\s+/g)
      let len = 0
      for (let i = content.length - 1; i >= 0; i--) {
        let part = content[i].replace(/[^\u2400-\u27ff|\u2e80-\u2eff|\u3000-\u32ff|\u4e00-\u9fff|\uac00-\ud7af|\uff00-\uff40|\u0E00-\u0E7F]+/g, ' ').split(' ')
        for (let j = part.length - 1; j >= 0; j--) {
          len += part[j].length
        }
        // 前后有字母
        let bais = 0
        if (part[0] == '') {
          len++
          bais++
        }
        if (part[part.length - 1] == '') {
          len++
          bais++
        }
        len += (part.length - 1 - bais)
      }
      return len
    }
    let content = txt.replace(/\n/g, '\r\n').replace(/^[\n\r\f\t\v\x20]+/, '').replace(/[\n\r\f\t\v\x20]+$/, '')
    return content.length
  }
}

export default util
