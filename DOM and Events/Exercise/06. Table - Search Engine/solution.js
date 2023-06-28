function solve() {
   const searchBtn = document.getElementById('searchBtn');
   const searchField = document.getElementById('searchField');
   const allTableRows = Array.from(document.querySelectorAll('tbody tr'));
   searchBtn.addEventListener('click', onClick);

   function onClick() {
      let searchFieldValue = searchField.value;
      for (const tableRow of allTableRows) {
         if (tableRow.classList.contains('select')) {
            tableRow.classList.remove('select');
         }

         if (tableRow.textContent.includes(searchFieldValue)) {
            tableRow.classList.add('select');
         }
      }
   }

   // const searchInput = document.getElementById('searchField');
   // document.querySelector('#searchBtn').addEventListener('click', onClick);

   // function onClick() {
   //    const searchedWord = searchInput.value;
   //    const tableRows = Array.from(document.querySelectorAll('tbody tr'));

   //    for (const row of tableRows) {
   //       debugger;
   //       let trimmedTextContent = row.textContent.trim();

   //       if (row.classList.contains('select')) {
   //          row.classList.remove('select');
   //       }

   //       if (trimmedTextContent.includes(searchedWord.toLowerCase)) {
   //          row.classList.add('select');
   //       } 
   //    }

   //    searchInput.value = '';
   // }
}