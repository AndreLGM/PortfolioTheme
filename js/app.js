// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEzh9BpNsqDQAIc6G06ZmpbclWHB8wr2I",
  authDomain: "portfoliothemecontact.firebaseapp.com",
  databaseURL: "https://portfoliothemecontact.firebaseio.com",
  projectId: "portfoliothemecontact",
  storageBucket: "",
  messagingSenderId: "418556419270"
};
firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Close section when other section selected
$('.port-item').click(function(){
  $('.collapse').collapse('hide');
});

// Event listner form submit
document.getElementById("contactForm").addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var nome = getInputVal('nome');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var mensagem = getInputVal('mensagem');
  
  //Salvar mensagem
  saveMessage(nome, email, phone, mensagem);

  // // Hide sent alert
  // setTimeout(function(){
  //   document.querySelector('#myModal').modal('hide');
  // },3000);

  // Clear Contact Form
  document.getElementById("contactForm").reset();

}

// function para pegar valor do contactForm
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(nome, email, phone, mensagem){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    nome: nome,
    email: email,
    phone: phone,
    mensagem: mensagem
  });
}

