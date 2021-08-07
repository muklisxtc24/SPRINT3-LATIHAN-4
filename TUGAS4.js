function login (username, password){
    if(username == 'muklis' && password == '123'){
        function goHome (){
            console.log('halaman Home');
        }
        return goHome
    }else {
        if (username == 'muklis'){
            if(password == '123'){
                function goHome(){
                    console.log('Halaman Home'); 
                }
                return goHome
            }else {
                function backLogin (){
                    console.log("Login Gagal");
                }
                return backLogin
            }
        }else {
            function backLogin(){
                console.log('Login Gagal')
            }
            return backLogin
        }
    }
}
let username = prompt('Masukan username')
let password = prompt('Masukan password')

let cobaLogin = login(username, password)
cobaLogin()