function insert_Row() {
    //Write your code here
	// let tab = document.getElementById("sampleTable");
	// let newSt=`<tr><td>New Cell1</td> <td>New Cell2</td></tr>`;
	// tab.innerHTML = newSt+tab.innerHTML;
	 let table = document.getElementById("sampleTable");

    // Create a new row and cells
    let newRow = table.insertRow(0); // Insert at the top (index 0)
    let newCell1 = newRow.insertCell(0);
    let newCell2 = newRow.insertCell(1);

    // Set the text for the new cells
    newCell1.innerHTML = "New Cell1";
    newCell2.innerHTML = "New Cell2";
	
}
