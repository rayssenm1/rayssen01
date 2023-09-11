// Code JavaScript pour gérer les actions de l'utilisateur (ajouter, rechercher, etc.)

document.getElementById('data-form').addEventListener('submit', function (e) {
    e.preventDefault();
    const numInput = document.getElementById('num-input').value;
    const nomInput = document.getElementById('nom-input').value;
    const prenomInput = document.getElementById('prenom-input').value;
    const telephoneInput = document.getElementById('telephone-input').value;
    const cinInput = document.getElementById('cin-input').value;
    const adresseInput = document.getElementById('adresse-input').value;
    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];

    // Insérer les données dans le tableau
    const newRow = dataTable.insertRow();
    const cellNum = newRow.insertCell(0);
    const cellNom = newRow.insertCell(1);
    const cellPrenom = newRow.insertCell(2);
    const cellTelephone = newRow.insertCell(3);
    const cellCIN = newRow.insertCell(4);
    const cellAdresse = newRow.insertCell(5);
    const cellActions = newRow.insertCell(6);

    cellNum.textContent = numInput;
    cellNom.textContent = nomInput;
    cellPrenom.textContent = prenomInput;
    cellTelephone.textContent = telephoneInput;
    cellCIN.textContent = cinInput;
    cellAdresse.textContent = adresseInput;

    // Ajouter des boutons pour modifier et supprimer
    const editButton = document.createElement('button');
    editButton.textContent = 'Modifier';
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Supprimer';

    editButton.addEventListener('click', function () {
        // Code pour la modification des données
        dataTable.editRow(newRow.rowIndex);
    });

    deleteButton.addEventListener('click', function () {
        // Code pour la suppression des données
        // Un tableau de données exemple
let data = [1, 2, 3, 4, 5];

// Fonction pour supprimer un élément du tableau par sa valeur
function supprimerElement(valeur) {
    const index = data.indexOf(valeur);
    if (index !== -1) {
        data.splice(index, 1);
    }
}

// Appeler la fonction pour supprimer un élément
supprimerElement(3); // Supprimer l'élément avec la valeur 3

// Afficher le tableau mis à jour
console.log(data); // Affiche [1, 2, 4, 5]
    });

    cellActions.appendChild(editButton);
    cellActions.appendChild(deleteButton);

    // Effacer les champs du formulaire après l'ajout/modification
    document.getElementById('data-form').reset();
});

// Code JavaScript pour la recherche
document.getElementById('search-input').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const dataTable = document.getElementById('data-table').getElementsByTagName('tbody')[0];
    const rows = dataTable.getElementsByTagName('tr');

    for (let i = 0; i < rows.length; i++) {
        const rowData = rows[i].textContent.toLowerCase();
        if (rowData.includes(searchTerm)) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
});