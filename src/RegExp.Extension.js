
class RegExtension{

    /**
     * 身份证15/18
     */
    static isIdentityCard(str){
        //15位数身份证正则表达式
        const arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
        //18位数身份证正则表达式
        const arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
        if(str.match(arg1) === null && str.match(arg2) === null){
            return false;
        }else {
            return true;
        }
    }

    /**
     * 非法字符
     */
    static isIllegalChar(str){
        let items = new Array("~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "{", "}", "[", "]", "(", ")");
        items.push(":", ";", "'", "|", "\\", "<", ">", "?", "/", "<<", ">>", "||", "//");
        items.push("admin", "administrators", "administrator", "管理员", "系统管理员");
        items.push("select", "delete", "update", "insert", "create", "drop", "alter", "trancate");
        str = str.toLowerCase();
        for(let i=0;i<items.length;i++){
            if(str.indexOf(items[i])>=0){
                return true;
            }
        }
        return false;
    }

    /**
     * url地址
     */
    static isUrl(url){
        if(url.match(/(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i)==null){
            return false;
        }else{
            return true;
        }
    }

    /**
     * 手机号码
     */
    static isPhoneNum(strPhone){
        const phoneRegWithArea = /^[0][1-9]{2,3}-[0-9]{5,10}$/;
        const phoneRegNoArea = /^[1-9]{1}[0-9]{5,8}$/;
        if(strPhone.length>9){
            if(phoneRegWithArea.test(strPhone)){
                return true;
            }else{
                return false;
            }
        }else{
            if(phoneRegNoArea.test(strPhone)){
                return true;
            }else{
                return false;
            }
        }
    }

    /**
     * 是否为false
     */
    static isNull(str){
        if(str==='')return true;
        const regstr = '^[ ]+$';
        const reg = new RegExp(regstr);
        return reg.test(str);
    }

    /**
     * IP
     */
    static isIp(strIP){
        if (RegExtension.isNull(strIP)) return false;
        var re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g //匹配IP地址的正则表达式
        if (re.test(strIP)) {
            if (RegExp.$1 < 256 && RegExp.$2 < 256 && RegExp.$3 < 256 && RegExp.$4 < 256) {
                return true;
            }
        }
        return false;
    }

    /**
     * 整数
     */
    static isInteger(str){
        return /^[-]{0,1}[0-9]{1,}$/.test(str);
    }

    /**
     * 正整数
     */
    static isNumber(s){
        const regu = "^[0-9]+$";
        const re = new RegExp(regu);
        if (s.search(re) != -1) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 正负浮点数
     */
    static isDecimal(str){
        if (RegExtension.isInteger(str)) {
            return true;
        }
        const re = /^[-]{0,1}(\d+)[\.]+(\d+)$/;
        if (re.test(str)) {
            if (RegExp.$1 == 0 && RegExp.$2 == 0) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }

    /**
     * 端口号格式
     */
    static isPort(str) {
        return (isNumber(str) && str < 65536);
    }

    /**
     * E-Mail格式
     */
    static isEmail(str) {
        var myReg = /^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
        if (myReg.test(str)) return true;
        return false;
    }

    /**
     * 金额格式
     */
    static isMoney(s) {
        var regu = "^[0-9]+[\.][0-9]{0,3}$";
        var re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 是否是数字或字母或下划线
     */
    static isNumberOr_Letter(s) {
        var regu = "^[0-9a-zA-Z\_]+$";
        var re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 数字或字母
     */
    static isNumberOrLetter(s) {
        var regu = "^[0-9a-zA-Z]+$";
        var re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * 否只由汉字、字母、数字组成
     */
    static isChinaOrNumbOrLett(s) {//判断是否是汉字、字母、数字组成、下划线
        var regu = "^[0-9a-zA-Z\u4e00-\u9fa5\_]+$";
        var re = new RegExp(regu);
        if (re.test(s)) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * 用途：判断是否是日期
    * 输入：date：日期；fmt：日期格式
    */
    static isDate(date, fmt) {
        function getMaxDay(year, month) {
            if (month == 4 || month == 6 || month == 9 || month == 11)
                return "30";
            if (month == 2)
                if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)
                    return "29";
                else
                    return "28";
            return "31";
        }
        if (fmt == null) fmt = "yyyyMMdd";
        var yIndex = fmt.indexOf("yyyy");
        if (yIndex == -1) return false;
        var year = date.substring(yIndex, yIndex + 4);
        var mIndex = fmt.indexOf("MM");
        if (mIndex == -1) return false;
        var month = date.substring(mIndex, mIndex + 2);
        var dIndex = fmt.indexOf("dd");
        if (dIndex == -1) return false;
        var day = date.substring(dIndex, dIndex + 2);
        if (!isNumber(year) || year > "2100" || year < "1900") return false;
        if (!isNumber(month) || month > "12" || month < "01") return false;
        if (day > getMaxDay(year, month) || day < "01") return false;
        return true;
    }

    /**
    * 用途：字符1是否以字符串2结束
    * 输入：str1：字符串；str2：被包含的字符串
    */
    static isLastMatch(str1, str2) {
        var index = str1.lastIndexOf(str2);
        if (str1.length == index + str2.length) return true;
        return false;
    }

    /**
    * 用途：字符1是否以字符串2开始
    * 输入：str1：字符串；str2：被包含的字符串
    */
    static isFirstMatch(str1, str2) {
        var index = str1.indexOf(str2);
        if (index == 0) return true;
        return false;
    }
    /**
    * 用途：字符1是包含字符串2
    * 输入：str1：字符串；str2：被包含的字符串
    */
    static isMatch(str1, str2) {
        var index = str1.indexOf(str2);
        if (index == -1) return false;
        return true;
    }

    /**
    * 用途：检查输入的起止日期是否正确，规则为两个日期的格式正确，
    * 且结束如期>=起始日期
    */
    static checkTwoDate(startDate, endDate) {
        if (!isDate(startDate)) {
            alert("起始日期不正确!");
            return false;
        } else if (!isDate(endDate)) {
            alert("终止日期不正确!");
            return false;
        } else if (startDate > endDate) {
            alert("起始日期不能大于终止日期!");
            return false;
        }
        return true;
    }
    /**
    * 用途：检查输入的Email信箱格式是否正确
    */
    static checkEmail(strEmail) {
        //var emailReg = /^[_a-z0-9]+@([_a-z0-9]+\.)+[a-z0-9]{2,3}$/;
        var emailReg = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
        if (emailReg.test(strEmail)) {
            return true;
        } else {
            alert("您输入的Email地址格式不正确！");
            return false;
        }
    }


    /****************************************************
        function:cTrim(sInputString,iType)
        description:字符串去空格的函数
        parameters:iType：1=去掉字符串左边的空格
        2=去掉字符串左边的空格
        0=去掉字符串左边和右边的空格
        return value:去掉空格的字符串
    ****************************************************/
    static cTrim(sInputString, iType) {
        var sTmpStr = ' ';
        var i = -1;
        if (iType == 0 || iType == 1) {
            while (sTmpStr == ' ') {
                ++i;
                sTmpStr = sInputString.substr(i, 1);
            }
            sInputString = sInputString.substring(i);
        }
        if (iType == 0 || iType == 2) {
            sTmpStr = ' ';
            i = sInputString.length;
            while (sTmpStr == ' ') {
                --i;
                sTmpStr = sInputString.substr(i, 1);
            }
            sInputString = sInputString.substring(0, i + 1);
        }
        return sInputString;
    }

    /**
     * 验证是否为数字
     */
    static pm_exp(e) {
        e = e ? e : event;
        if (!(e.keyCode == 46) && !(e.keyCode == 8) && !(e.keyCode == 37) && !(e.keyCode == 39)) {
            if (!((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105))) {
                if (document.all)
                    e.returnValue = false;
                else
                    e.preventDefault();
            }
        }
    }
}
