document.addEventListener('DOMContentLoaded', function () {
    const sectionTitles = document.querySelectorAll('.section-title');
    const nextButton = document.getElementById('next-button');
    let currentSectionIndex = 0;

    sectionTitles[currentSectionIndex].nextElementSibling.style.display = 'block';

    nextButton.addEventListener('click', () => {
        sectionTitles[currentSectionIndex].nextElementSibling.style.display = 'none';
        currentSectionIndex++;

        if (currentSectionIndex < sectionTitles.length) {
            sectionTitles[currentSectionIndex].nextElementSibling.style.display = 'block';
        }

        if (currentSectionIndex === sectionTitles.length) {
            generateCsvFile();    // Gera o arquivo CSV para download
            generateCsvSummary(); // Gera e exibe o resumo na página
        }
    });

    function generateCsvFile() {
        const selectedTasks = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');

        checkboxes.forEach(checkbox => {
            const taskInfo = checkbox.parentNode.querySelector('a').textContent;
            const taskLink = checkbox.parentNode.querySelector('a').getAttribute('href');
            selectedTasks.push([taskInfo, taskLink, '✔']);
        });

        let csvContent = 'data:text/csv;charset=utf-8,';
        csvContent += 'Nome da Tarefa,Link,Concluída\n';

        selectedTasks.forEach(task => {
            csvContent += `"${task[0]}","${task[1]}","${task[2]}"\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement('a');
        const postContent = document.querySelector('article');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', 'lista_de_tarefas.csv');
        link.textContent = 'Clique para baixar o arquivo CSV';
        postContent.appendChild(link);
    }

    function generateCsvSummary() {
        const selectedTasks = [];
        const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      
        checkboxes.forEach(checkbox => {
          const taskInfo = checkbox.parentNode.querySelector('a').textContent;
          const taskLink = checkbox.parentNode.querySelector('a').getAttribute('href');
          selectedTasks.push([taskInfo, taskLink, '✔']);
        });
      
        let tableContent = '<table>';
        tableContent += '<tr><th>Nome da Tarefa</th><th>Link</th><th>Concluída</th></tr>';
      
        selectedTasks.forEach(task => {
          tableContent += `<tr><td>${task[0]}</td><td>${task[1]}</td><td>${task[2]}</td></tr>`;
        });
      
        tableContent += '</table>';
      
        const csvSummaryElement = document.getElementById('csv-summary');
        csvSummaryElement.innerHTML = tableContent;
      }
})
