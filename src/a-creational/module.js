const HTMLChanger = (function() {
  const contents = "contents";

  const changeHTML = function() {
    console.log("changeHTML:", "Changing HTML");
  };

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log("Private Variable (accessed inside):", contents);
    }
  };
})();

console.log("\n*** Module Pattern ***");

HTMLChanger.callChangeHTML(); // Outputs: 'contents'
console.log("HTMLChanger.content (accessed outside):", HTMLChanger.contents); // undefined
