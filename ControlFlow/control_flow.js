let userRole = "admin";
let accessLevel;
let isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin"){
        accessLevel = "Full access granted";
        userMessage = "Welcome, Admin!";
    }else if (userRole === "manager"){
        accessLevel = "Limited access granted";
        userMessage = "Welcome, Manager!";
    }else{
        accessLevel = "No access granted";
        userMessage = "Welcome, User!";
    }
}else{
    userMessage = "Please log in to access the system.";
}

let userType="subscriber";
let userCategory;
let isAuthenicated = true;
let authenticationStatus;

switch (userType){
    case "admin":
        authenticationStatus = isAuthenicated ? "Authenticated" : "Not authenticated";
        userCategory = "Administrator";
        break;
    case "manager":
        authenticationStatus = isAuthenicated ? "Authenticated" : "Not authenticated";
        userCategory = "Manager";
        break;
    case "subscriber":
        authenticationStatus = isAuthenicated ? "Authenticated" : "Not authenticated";
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}


console.log("Access Level:", accessLevel);
console.log("User Message:", userMessage);
console.log("User Category:", userCategory);
console.log("Authentication Status:", authenticationStatus);