function Selection() {
    const items = document.getElementsByName("cost");
    const selectedItems = [];

    for (const item of items) {
        if (item.checked) {
            selectedItems.push(item.id); // Collect item IDs for display
        }
    }

    document.getElementById("txtA1").textContent = selectedItems.join(", ");
}

let Total = 0;
document.getElementById("Calc").onclick = function() {
    Total = 0;

    const items = document.getElementsByName("cost"); // Retrieve checkboxes again
    for (const item of items) {
        if (item.checked) {
            Total += parseFloat(item.value); // Add the checked item's value to Total
        }
    }
    
    // Display the total in the input element with ID "Totally"
    document.getElementById("Totally").value = Total.toFixed(2);
};

// Function to clear the selections and reset the display
function ClearDisplay() {
    const items = document.getElementsByName("cost");
    
    // Uncheck all checkboxes
    for (const item of items) {
        item.checked = false;
    }
    
    // Clear selected items display and total
    document.getElementById("txtA1").textContent = "";
    document.getElementById("Totally").value = "0.00";
}
