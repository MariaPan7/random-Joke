const message = {
    "joke-1": "world would be better with you...not arround",
    "joke-2": "You are a beautiful...Orka",
    "joke-3": "-grandma why we british are like that?.... They say its from history but i think...its the weather!!",
  };
  
  function randomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  
  function getRandomMessage() {
    const randomIndex = randomNumber(Object.keys(message).length);
    const randomMessage = message[Object.keys(message)[randomIndex]];
    return randomMessage;
  }
  
  console.log(getRandomMessage());