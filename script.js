function getValidResolution(promptMessage) {
    let resolution;
    while (true) {
      resolution = parseInt(prompt(promptMessage));
      if (isNaN(resolution) || resolution <= 0) {
        alert("Please enter a valid positive number for pixels.");
      } else {
        break;
      }
    }
    return resolution;
  }
  
  let resolusiA = getValidResolution('Enter your first resolution (PIXELS): ');
  let resolusiB = getValidResolution('Enter your second resolution (PIXELS): ');
  
  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
  
  function finalCal(resolusiA, resolusiB) {
    let divisor = gcd(resolusiA, resolusiB);
    let calA = resolusiA / divisor;
    let calB = resolusiB / divisor;
    console.log(`Aspect Ratio: ${calA}:${calB}`);
    const resultElement = document.getElementById('result');
    resultElement.textContent = `Your Aspect Ratio is: ${calA}:${calB}`;
  }

const pixelsAelement = document.getElementById('resA');
pixelsAelement.textContent = `First resolution: ${resolusiA}`;

const pixelsBelement = document.getElementById('resB');
pixelsBelement.textContent = `Second resolution: ${resolusiB}`;
  
  // Call the function with the parsed inputs
  finalCal(resolusiA, resolusiB);
  
