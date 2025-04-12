const output = document.querySelector('.output');
output.textContent = "";





for(let i= 10; i >= 0; i--){
    const para = document.createElement('p');

    output.appendChild(para);

    if (i===0) {
        para.textContent = `Blast Off!!!`;
    } else if (i===10) {
        para.textContent = `Countdown ${i}`;
    } else {
        para.textContent = `${i}`;
    }
};
