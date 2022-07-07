exports.getDate = ()=> {
     const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
     const d = new Date();
     return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
}
exports.getAccountNumber = () =>{
     return '3273283728838'
}
exports.getName = () =>{
     return 'samarth goswami';
}