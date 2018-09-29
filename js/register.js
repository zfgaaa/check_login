var register = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            // 用户名
            this.$inpUserName = this.$ele.querySelector('input');
            this.$nameFalse = document.querySelector('.nameFalse');
            // 电话
            this.$inpTel = document.querySelector('.inpTel');
            this.$telFalse = document.querySelector('.telFalse');
            // 邮箱
            this.$inpEmail = document.querySelector('.inpEmail');
            this.$emailFalse = document.querySelector('.emailFalse');
            //密码
            this.$inpPwd = document.querySelector('.inpPwd');
            this.$pwdFalse = document.querySelector('.pwdFalse');
            this.checkUserName();
            this.checkTel();
            this.checkEmail();
            this.checkPass();
            this.event();
        },
        event(){
            var _this = this;
        },
        //检验用户名
        checkUserName(){
            var _this = this;
            var flag;
            var regUser = /^[a-zA-Z0-9]{6,12}$/;
            this.$inpUserName.onblur = function(){
                var userVal = _this.$inpUserName.value;
                flag = regUser.test(userVal);
                console.log(flag)
                if(flag){
                    _this.$nameFalse.style.display = "none";
                    _this.$inpUserName.style.border = "1px solid #ccc";
                }
                else{
                    _this.$nameFalse.style.display = "block";
                    _this.$inpUserName.style.border = "1px solid red";
                }
            }
        },
        //检测手机号码
        checkTel(){
            var _this = this;
            var flag;
            var regUser = /^[1][3,4,5,7,8][0-9]{9}$/;
            this.$inpTel.onblur = function(){
                var userVal = _this.$inpTel.value;
                flag = regUser.test(userVal);
                console.log(flag)
                if(flag){
                    _this.$telFalse.style.display = "none";
                    _this.$inpTel.style.border = "1px solid #ccc";
                }
                else{
                    _this.$telFalse.style.display = "block";
                    _this.$inpTel.style.border = "1px solid red";
                }
            }
        },
        //检测电子邮箱
        checkEmail(){
            var _this = this;
            var flag;
            var regUser = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
            this.$inpEmail.onblur = function(){
                var userVal = _this.$inpEmail.value;
                flag = regUser.test(userVal);
                console.log(flag)
                if(flag){
                    _this.$emailFalse.style.display = "none";
                    _this.$inpEmail.style.border = "1px solid #ccc";
                }
                else{
                    _this.$emailFalse.style.display = "block";
                    _this.$inpEmail.style.border = "1px solid red";
                }
            }
        },
        //检验密码
        checkPass(){
            var _this = this;
            var flag;
            //密码强度，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
            var regUser = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,16}$/;
            this.$inpPwd.onblur = function(){
                var userVal = _this.$inpPwd.value;
                flag = regUser.test(userVal);
                console.log(flag)
                if(flag){
                    _this.$pwdFalse.style.display = "none";
                    _this.$inpPwd.style.border = "1px solid #ccc";
                }
                else{
                    _this.$pwdFalse.style.display = "block";
                    _this.$inpPwd.style.border = "1px solid red";
                }
            }
        }
        
    }
}())