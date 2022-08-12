var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

var factList = [
  "An estimated 8 Million tons of plastic enters our oceans every year!", 
  "80% of pollution in our oceans comes from land-based sources!", 
  "Plastic bags are illegal in Kenya. People found using, selling, or manufacturing them risk 4 years of incarceration and a $40,000 fine!", 
  "100 million marine animals die each year from plastic waste alone!", 
  "1 in 3 marine mammal species get found entangled in litter, 12-14,000 tons of plastic are ingested by North Pacific fish yearly!"
];

var fact = document.getElementById("fact");
var factBtn = document.getElementById("factBtn");
var count = 0;

if (factBtn) {
  factBtn.addEventListener("click", displayFact);
}

function displayFact() {
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length) {
    count = 0;
  }
}
