let logo;
let post;
let nymail;
let indstil;
let skrald;
let slettede;
let mails;
let toInput;
let titleInput;
let closeButton;
let header;
let messageInput;
let sendButton;
let attachButton;
let msgDiv;
let deleteBtn;
let GendanBtn;
let msgslet;
let textSpan;
let replyBtn;
let backButton;
let profilePic;
let detailsDiv;
let senderInfo;
let tilInfo;
let titleInfo;
let messageContent;
let detailsBtn;
let msg;
let indstillingerButton;
let storageDiv;
let profileName;
let profileEmail;
let progress;
let progressBar;
let sections;
let sectionDiv;
let arrow; 
let sectionDivs = [];
let currentView = "messages"; 
let message = "Hej Lasse,\n\nTak for besøget her i går. Det var en fornøjelse at møde dig og høre om dine planer.\n\nVenlig hilsen,\nNordea";
let messages = [
  { sender: "Nordea", til: "Lasse Eriksen <lasseeriksen@mail.com>", title: "Tak for besøget her i går", unread: true, slettede: false },
  { sender: "Nordea", til: "Lasse Eriksen <lasseeriksen@mail.com>", title: "Tak for besøget her i går", unread: false, slettede: false },
  { sender: "Nordea", til: "Lasse Eriksen <lasseeriksen@mail.com>", title: "Tak for besøget her i går", unread: false, slettede: false },
  { sender: "Nordea", til: "Lasse Eriksen <lasseeriksen@mail.com>", title: "Tak for besøget her i går", unread: false, slettede: false },

];
function hideall() {

  if (logo) logo.hide();
  if (post) post.hide();
  if (nymail) nymail.hide();
  if (indstil) indstil.hide();
  if (skrald) skrald.hide();
  if (mails) mails.hide();
  if (toInput) toInput.hide();
  if (titleInput) titleInput.hide();
  if (closeButton) closeButton.hide();
  if (header) header.remove();
  if (messageInput) messageInput.hide();
  if (sendButton) sendButton.hide();
  if (attachButton) attachButton.hide();
  if (deleteBtn) deleteBtn.hide();
  if (GendanBtn) GendanBtn.hide();
  if (msgslet) msgslet.remove();
  if (textSpan) textSpan.hide();
  if (replyBtn) replyBtn.hide();
  if (backButton) backButton.hide();
  if (profilePic) profilePic.remove();
  if (detailsDiv) detailsDiv.remove();
  if (senderInfo) senderInfo.remove();
  if (tilInfo) tilInfo.remove();
  if (titleInfo) titleInfo.remove();
  if (messageContent) messageContent.hide();
  if (closeButton) closeButton.hide();
  if (detailsBtn) detailsBtn.hide();
  if (indstillingerButton) indstillingerButton.hide();
  if (profileName) profileName.remove();
  if (profileEmail) profileEmail.remove();
  if (storageDiv) storageDiv.remove();
  if (progress) progress.remove();
  if (progressBar) progressBar.remove();
  if (sectionDiv) sectionDiv.remove();
  if (arrow) arrow.remove();
  if (msgDiv) msgDiv.remove();
  if (sectionDivs) sectionDivs.forEach((div) => div.hide());
  



}

function displayMessageDetails(sender, til, title) {
  clear(); // Rydder canvas
  background(240); // Tegn baggrunden igen
  hideall(); // Skjul alle elementer

  // Tilbage-knap
  backButton = createButton("Tilbage");
  backButton.position(20, 20);
  backButton.mousePressed(() => {
    clear();
    background(240);
    hideall(); // Skjul alle elementer
    displayMessages(); // Gå tilbage til beskedoversigten
  });

  // Profilbillede (placeholder)
  profilePic = createDiv();
  profilePic.position(20, 60);
  profilePic.size(50, 50);
  profilePic.style("background", "black");
  profilePic.style("border-radius", "50%");

  // Beskedoplysninger
  detailsDiv = createDiv();
  detailsDiv.position(80, 60);
  detailsDiv.size(400, 100);
  detailsDiv.style("background", "lightgray");
  detailsDiv.style("padding", "10px");

  senderInfo = createDiv(`FRA: ${sender}`);
  senderInfo.parent(detailsDiv);

  tilInfo = createDiv(`TIL: ${til}`);
  tilInfo.parent(detailsDiv);

  titleInfo = createDiv(`Titel: ${title}`);
  titleInfo.parent(detailsDiv);

  // Beskedindhold (placeholder for beskedens tekst)
  messageContent = createDiv(message);
  messageContent.position(20, 180);
  messageContent.size(450, 300);
  messageContent.style("background", "lightgray");
  messageContent.style("padding", "10px");
}

function displayNewMessageForm() {
  clear(); // Rydder canvas
  background(240); // Tegn baggrunden igen

  // Opret en overskrift
  header = createDiv("Ny besked");
  header.position(20, 20);
  header.style("background", "lightgreen");
  header.style("padding", "10px");
  header.style("font-size", "18px");
  header.style("font-weight", "bold");
  header.style("display", "flex");
  header.style("justify-content", "space-between");
  header.style("align-items", "center");
  header.style("width", "450px");

  // Luk-knap
  closeButton = createButton("❌");
  closeButton.style("background", "red");
  closeButton.style("color", "white");
  closeButton.style("border", "none");
  closeButton.style("cursor", "pointer");
  closeButton.mousePressed(() => {
    clear();
    background(240);
    hideall(); 
    displayMessages(); // Gå tilbage til beskedvisningen
  });
  header.child(closeButton);

  // Inputfelt til modtager
  toInput = createInput();
  toInput.position(20, 80);
  toInput.size(450, 30);
  toInput.attribute("placeholder", "Til");

  // Inputfelt til titel
  titleInput = createInput();
  titleInput.position(20, 120);
  titleInput.size(450, 30);
  titleInput.attribute("placeholder", "Titel");

  // Tekstområde til besked
  messageInput = createElement("textarea");
  messageInput.position(20, 160);
  messageInput.size(450, 200);
  messageInput.attribute("placeholder", "Skriv din besked her...");

  // Send-knap
  sendButton = createButton("Send");
  sendButton.position(20, 380);
  sendButton.style("background", "lightgreen");
  sendButton.style("border", "none");
  sendButton.style("padding", "10px 20px");
  sendButton.style("cursor", "pointer");


  // Vedhæft-knap
  attachButton = createButton("➕");
  attachButton.position(100, 380);
  attachButton.style("background", "lightgray");
  attachButton.style("border", "none");
  attachButton.style("padding", "10px 20px");
  attachButton.style("cursor", "pointer");
};

function displayMessages() {
  let yOffset = 60;
  

  nymail.position(100, 20);
  nymail.style("background", "lightgreen");
  nymail.show();

  indstil.position(180, 20);
  indstil.style("background", "lightblue");
  indstil.show();
  
  skrald.position(280, 20);
  skrald.style("background", "lightgray");
  skrald.show();
  
  mails = createButton("Postkasse");
  mails.position(20, 20);
  mails.style("background", "red");
  mails.style("color", "white");
  mails.show();

  for (let i = 0; i < messages.length; i++) {
    let msg = messages[i];
    // Hvis beskeden er slettet, så spring over den
    if (msg.slettede) {
      continue;
    }
    msgDiv = createDiv();
    msgDiv.position(20, yOffset);
    msgDiv.size(450, 40);
    msgDiv.style("display", "flex");
    msgDiv.style("align-items", "center");
    msgDiv.style("justify-content", "space-between");
    msgDiv.style("padding", "5px");
    msgDiv.style("border", "1px solid black");
    
    // Ulæste beskeder får gul baggrund, læste får grå
    if (msg.unread) {
      msgDiv.style("background", "lightyellow");
    } else {
      msgDiv.style("background", "lightgray");
    }

    textSpan = createSpan(`${msg.sender}: ${msg.title}`);
    msgDiv.child(textSpan);

        // Tilføj en "Vis detaljer"-knap
        detailsBtn = createButton("Vis detaljer");
        detailsBtn.style("background", "lightblue");
        detailsBtn.style("border", "none");
        detailsBtn.style("padding", "5px 10px");
        detailsBtn.style("cursor", "pointer");
        detailsBtn.mousePressed(() => {
          displayMessageDetails(msg.sender, msg.til, msg.title);
        });
        msgDiv.child(detailsBtn);

    deleteBtn = createButton("🗑️");
    deleteBtn.mousePressed(() => {
      // sætter slettede til true i arrayet
      messages[i].slettede = true;
      clear(); // Rydder canvas
      background(240); // Tegn baggrunden igen
      hideall(); // Skjul alle elementer
      displayMessages(); // Opdater visningen
    });
    msgDiv.child(deleteBtn);

    replyBtn = createButton("Besvar");
    replyBtn.style("background", "lightblue");
    
    msgDiv.child(replyBtn);
    // mellemrumet mellem mails
    yOffset += 50;

    mails.mousePressed(function() {
      clear(); // Rydder canvas
      background(240); // Tegn baggrunden igen
      hideall(); // Skjul alle elementer
      if (currentView === "messages") {
        displayMessages();
        currentView = "deleted";
      } else {
        displayslettede();
        currentView = "messages";
      }
    });
    
  }
}


function displayslettede() {
  let yOffset = 60;
  nymail.position(100, 20);
  nymail.style("background", "lightgreen");
  nymail.show();
  
  indstil.position(180, 20);
  indstil.style("background", "lightblue");
  indstil.show();

  skrald.position(280, 20);
  skrald.style("background", "lightgray");
  skrald.show();

  mails = createButton("Postkasse");
  mails.position(20, 20);
  mails.style("background", "red");
  mails.style("color", "white");
  mails.show();

  for (let i = 0; i < messages.length; i++) {
    msg = messages[i];
    // Hvis beskeden ikke er slettet, så spring over den
    if (!msg.slettede) {
      continue;
    }
    msgslet = createDiv();
    msgslet.position(20, yOffset);
    msgslet.size(450, 40);
    msgslet.style("display", "flex");
    msgslet.style("align-items", "center");
    msgslet.style("justify-content", "space-between");
    msgslet.style("padding", "5px");
    msgslet.style("border", "1px solid black");

    // Ulæste beskeder får gul baggrund, læste får grå
    if (msg.unread) {
      msgslet.style("background", "lightyellow");
    } else {
      msgslet.style("background", "lightgray");
    }

    textSpan = createSpan(`${msg.sender}: ${msg.title}`);
    msgslet.child(textSpan);

    GendanBtn = createButton("Gendan");
    GendanBtn.mousePressed(() => {
      // sætter slettede til false i arrayet men kun den jeg trykker på
      messages[i].slettede = false;
            
      clear(); // Rydder canvas
      background(240); // Tegn baggrunden igen
      hideall(); // Skjul alle elementer
      displayslettede(); // Opdater visningen
    });
    msgslet.child(GendanBtn);

    // mellemrumet mellem mails
    yOffset += 50;
    mails.mousePressed(function() {
      clear(); // Rydder canvas
      background(240); // Tegn baggrunden igen
      hideall(); // Skjul alle elementer
      if (currentView === "messages") {
        displayMessages();
        currentView = "deleted";
      } else {
        displayslettede();
        currentView = "messages";
      }
    });
    
  }
}

function displaySettings() {
  clear(); // Rydder canvas
  background(240); // Tegn baggrunden igen

  if (backButton) backButton.show();
  if (profilePic) profilePic.show();
  if (profileName) profileName.show();
  if (profileEmail) profileEmail.show();
  if (storageDiv) storageDiv.show();
  if (progressBar) progressBar.show();
  
  // Tilbage-knap
  backButton = createButton("Tilbage");
  backButton.position(20, 20);
  backButton.mousePressed(() => {
    clear();
    background(240);
    hideall(); // Skjul alle elementer
    displayMessages(); // Gå tilbage til beskedoversigten
   
  });

  // Overskrift
  header = createDiv();
  header.position(20, 60);
  header.size(450, 40);
  header.style("display", "flex");
  header.style("justify-content", "space-between");
  header.style("align-items", "center");
  header.style("background", "lightgray");
  header.style("padding", "10px");

  mails = createButton("Postkasse");
  mails.style("background", "white");
  mails.style("border", "none");
  mails.style("cursor", "pointer");
  mails.mousePressed(() => {
    clear();
    background(240);
    hideall(); // Skjul alle elementer
    displayMessages();
  });
  header.child(mails);

  indstillingerButton = createButton("Indstillinger");
  indstillingerButton.style("background", "red");
  indstillingerButton.style("color", "white");
  indstillingerButton.style("border", "none");
  indstillingerButton.style("cursor", "pointer");
  header.child(indstillingerButton);

  // Profilbillede og navn
  profilePic = createDiv();
  profilePic.position(200, 120);
  profilePic.size(100, 100);
  profilePic.style("background", "black");
  profilePic.style("border-radius", "50%");

  profileName = createDiv("Lasse Eriksen");
  profileName.position(200, 230);
  profileName.style("text-align", "center");
  profileName.style("font-size", "18px");
  profileName.style("font-weight", "bold");

  profileEmail = createA("mailto:lasseeriksen@mail.com", "lasseeriksen@mail.com");
  profileEmail.position(200, 260);
  profileEmail.style("text-align", "center");
  profileEmail.style("color", "blue");
  profileEmail.style("text-decoration", "none");

  // Indstillinger sektioner
  sections = ["Sprog", "Adgangskode", "Link Konto"];
  let yOffset = 300;

  sections.forEach((section) => {
    sectionDiv = createDiv(section);
    sectionDiv.position(20, yOffset);
    sectionDiv.size(450, 40);
    sectionDiv.style("background", "lightgray");
    sectionDiv.style("padding", "10px");
    sectionDiv.style("display", "flex");
    sectionDiv.style("justify-content", "space-between");
    sectionDiv.style("align-items", "center");

    arrow = createDiv("▼");
    arrow.style("font-size", "18px");
    arrow.style("cursor", "pointer");
    sectionDiv.child(arrow);
    sectionDivs.push(sectionDiv);
    
    yOffset += 50;
  });
  
  // Lagerplads sektion
  storageDiv = createDiv("36% plads Brugt, af 15 GB");
  storageDiv.position(20, yOffset);
  storageDiv.size(450, 40);
  storageDiv.style("background", "lightgray");
  storageDiv.style("padding", "10px");
  storageDiv.style("display", "flex");
  storageDiv.style("justify-content", "space-between");
  storageDiv.style("align-items", "center");
  
  progressBar = createDiv();
  progressBar.position(20, yOffset + 50);
  progressBar.size(450, 20);
  progressBar.style("background", "lightgray");
  progressBar.style("border-radius", "10px");

  progress = createDiv();
  progress.size(162, 20); // 36% af 450px
  progress.style("background", "lightgreen");
  progress.style("border-radius", "10px");
  progress.parent(progressBar);
}


function setup() {
  createCanvas(1000, 1000);
  background(240);
  

  logo = createButton("Postkassen").position(200,200);
  logo.show();
  post = createButton("post").position(200,200);
  post.hide();
  nymail = createButton("Ny besked").position(500,500);
  nymail.hide();
  indstil = createButton("Indstillinger").position(200,500);
  indstil.hide();
  skrald = createButton("Skraldespand").position(500,200);
  skrald.hide();
  //lave en mousepressed funktion der skifter mellem de 2 knapper
  logo.mousePressed(function() {
    hideall();
    post.show();
    skrald.show();
    nymail.show();
    indstil.show();
  });
  post.mousePressed(function() {
    clear(); // Rydder canvas
    hideall(); // Skjul alle elementer
    
    if (currentView === "messages") {
      displayMessages();
      currentView = "deleted";
    } else {
      displayslettede();
      currentView = "messages";
    }

  });
  
  skrald.mousePressed(function() {
    clear(); // Rydder canvas
    background(240); // Tegn baggrunden igen
    hideall(); // Skjul alle elementer
    if (currentView === "messages") {
      displayMessages();
      currentView = "deleted";
    } else {
      displayslettede();
      currentView = "messages";
    }
  });
  nymail.mousePressed(function() {
    clear(); // Rydder canvas
    background(240); // Tegn baggrunden igen
    hideall(); // Skjul alle elementer
    displayNewMessageForm();
  }); 
  indstil.mousePressed(function () {
    clear();
    background(240);
    hideall(); // Skjul alle elementer
    displaySettings();
  }); 
}


