
function openNav() {
  document.getElementById("main").style.marginLeft = "16%";
  document.getElementById("mySidebar").style.width = "16%";
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("openNav").style.display = 'none';
}
function closeNav() {
  document.getElementById("main").style.marginLeft = "0%";
  document.getElementById("mySidebar").style.width = "0%";
  document.getElementById("openNav").style.display = "inline-block";
} 

function compproduct(inputproduk){
    var produk = "CHocs Dark Chocolate";
    var produk1 = "CHocs White Chocolate";
    var produk2 = "CHocs Cookies Chocolate";
    var produk3 = "CHocs Pecan Pie";
    var produk4 = "CHocs Chocolate Cake";
    var produk5 = "CHocs Strawberry Chocolate Cake";

  if(inputproduk.toLowerCase() == produk.toLocaleLowerCase() || inputproduk.toLowerCase() == produk1.toLocaleLowerCase()||inputproduk.toLowerCase() == produk2.toLocaleLowerCase()||inputproduk.toLowerCase() == produk3.toLocaleLowerCase()||inputproduk.toLowerCase() == produk4.toLocaleLowerCase()||inputproduk.toLowerCase() == produk5.toLocaleLowerCase()){
    return true;
  }
  else {
    return false;
  }
}

function validateData(){
  var flag = 0;
  var nama = document.getElementById("name_input").value;
  var phone = document.getElementById("phone_input").value;
  var quantity = document.getElementById("quantity_input").value;
  var product = document.getElementById("product_input").value;
  var address = document.getElementById("address_input").value;
  // var age = document.getElementById("age_input").value
  var male = document.getElementById("gendermale");
  var female = document.getElementById("genderfemale");
  var checker =  document.getElementById("checkbox_input");


  if(nama.length < 5 || nama.length > 15){
      alert("Your name must be at least 5 characters and max 15 characters");
  }
  else if(phone.length <10 || phone.length>20){
      alert("Phone number must consist of 10-20 numbers");
  }
  else if(quantity >99999 || quantity <= 0){
      alert("Input quantity between 1 - 99999");
  }
  else if(compproduct(product) === false ){
      alert("Sorry we don't have that product right now.");
  }
  else if(address.length > 99){
    alert("Input address can't be more than 99 characters");
  }
  else if(male.checked == false && female.checked == false){
      alert("Please choose your gender");
  }
  else if(checker.checked == false){
      alert("Click agree to terms and conditions"); 
  }
  else{
    alert("Order success. Thank you for ordering at CHocs.");
  }
}
document.getElementById("Submit").addEventListener("click", ()=>{
  validateData();
  
})