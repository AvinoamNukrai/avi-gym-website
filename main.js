function setupMotivation() {
  const sentences = [
    "Your fitness journey begins today; take the first step!",
    "Every rep, every set, is a step closer to the best version of you.",
    "Sweat is just fat crying; let it out!",
    "It’s not about being the best; it’s about being better than you were yesterday.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Push past your limits today, and you’ll thank yourself tomorrow.",
    "The hardest lift is lifting yourself off the couch—start now!",
    "Your only competition is the person in the mirror.",
    "Discipline trumps motivation; show up and get it done.",
    "One hour a day is just 4% of your time; invest it in your health.",
    "Strive for progress, not perfection.",
    "Small steps every day lead to big changes over time.",
    "It’s not going to be easy, but it will be worth it.",
    "A little progress each day adds up to big results.",
    "The pain you feel today is the strength you’ll feel tomorrow.",
    "What seems impossible now will soon become your warm-up.",
    "When you feel like quitting, think about why you started.",
    "Your body can stand almost anything; it’s your mind you have to convince.",
    "The best project you’ll ever work on is yourself.",
    "The journey of a thousand miles begins with a single squat.",
  ];

  // Select a random sentence
  function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
  }

  // Display the sentence in the #motivation element
  function updateMotivation() {
    const motivationElement = document.getElementById("motivation");
    motivationElement.textContent = getRandomSentence();
  }

  // Display a random sentence when the page loads
  document.addEventListener("DOMContentLoaded", updateMotivation);

  // Expose updateMotivation for the button
  window.updateMotivation = updateMotivation;
}

setupMotivation();
