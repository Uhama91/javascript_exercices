const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here
for(let i = 0; i < people.length; i++){
    people[i] === "Lola"? refused.textContent += `${people[i]}, `
        :   people[i] === "Phil"? refused.textContent += `${people[i]}, `
            : admitted.textContent += `${people[i]}, `;
}

admitted.textContent = admitted.textContent.slice(0, -2);
refused.textContent = refused.textContent .slice(0, -2); 