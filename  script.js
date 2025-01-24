const apologies = [
    "I’m sorry I accidentally texted you a photo of my cat instead of the report. 🐱📄",
    "I’m sorry I laughed when you tripped... but your dance move was legendary. 💃",
    "I’m sorry I ate your lunch. I mistook it for a sacrifice to the fridge gods. 🍔🙏",
    "I’m sorry I called you by your ex’s name. My brain was on autopilot. 🧠✈️",
    "I’m sorry I ghosted you. My phone was abducted by aliens. 👽📱"
  ];
  
  document.getElementById('generateBtn').addEventListener('click', () => {
    const scenario = document.getElementById('scenarioInput').value;
    const apology = scenario ? generateCustomApology(scenario) : getRandomApology();
    displayApology(apology);
  });
  
  document.getElementById('randomBtn').addEventListener('click', () => {
    displayApology(getRandomApology());
  });
  
  function getRandomApology() {
    return apologies[Math.floor(Math.random() * apologies.length)];
  }
  
  function generateCustomApology(scenario) {
    const formats = [
      `I’m sorry ${scenario}. It was a glitch in the matrix. 🕶️`,
      `I’m sorry ${scenario}. Blame it on the caffeine! ☕`,
      `I’m sorry ${scenario}. My pet rock distracted me. 🪨`
    ];
    return formats[Math.floor(Math.random() * formats.length)];
  }
  
  function displayApology(apology) {
    document.getElementById('apologyText').textContent = apology;
    document.getElementById('apologyDisplay').style.display = 'block';
  }