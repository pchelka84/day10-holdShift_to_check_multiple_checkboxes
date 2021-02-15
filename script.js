const checkboxes = document.querySelectorAll('.inbox input[type="checkbox');
console.log(checkboxes);

let lastChecked;

function handleCheck(e) {
  // Check if the shift key is down AND
  // Checkbox is checked (not unchecked)
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    // Loop over every single checkebox
    checkboxes.forEach(checkbox => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        checkbox.checked = true;
      }
    })

  }
  
  lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
