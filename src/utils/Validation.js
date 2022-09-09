//validate email
export const isValidEmail = (stringEmail) => 
{
    var filter = /^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;
    return String(stringEmail).search (filter) != -1;
}

//validate password
export const isValidPassword = (stringPassword) => stringPassword.length >= 6
export const isConfirmPassword = (pass1, pass2) => pass1==pass2
