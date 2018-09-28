var register = (function(){
    return {
        init(ele){
            this.$ele = document.querySelector(ele);
            this.$usernameTable = document.querySelector('.username');
            console.log(this.$usernameTable);
            this.event();
        },
        event(){
            var _this = this;
        }

    }
}())