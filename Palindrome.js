 function fn1(){
        var str = document.getElementById("string").value;
        
        var re = /[\W_]/g;
        
        var s = str.toLowerCase().replace(re, '');
        
        var palindrome = s.split("").reverse().join("");
        
        var n = palindrome.localeCompare(s);
        
        if( n == 0 ){
            text = "The string is a palindrome.";
        }else{
            text = "The string is not a palindrome.";    
            }
        
         document.getElementById("display").innerHTML = text;
}
    