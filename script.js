function insert_Row() {
    //Write your code here
	let tab = document.getElementById("sampleTable");
	let newSt=`<tr><td>New Cell1</td> <td>New Cell2</td></tr>`;
	tab.innerHTML = newSt+tab.innerHTML;
  
}
