function passToRegister()
{
        document.getElementById("login").className = " bg_container hidden";
        document.getElementById("register").className = " bg_containerx";
        document.getElementById("selecter").className = " containerR";
		console.log("string: a");

}
    function passToLogin()
{
        document.getElementById("login").className = " bg_container ";
        document.getElementById("register").className = " bg_containerx hidden";
        document.getElementById("selecter").className = " container";
		console.log("string: b");
}
    function login(){
         window.location="/api/unit1";
         //
    }