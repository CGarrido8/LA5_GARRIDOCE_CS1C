let hashTable = new Array(10).fill(null);  // Set a fixed size

function simpleHash(name) {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    return hash % hashTable.length;
}

for (let i = 0; i < 5; i++) {
    let name = prompt("Enter your name:");
    let index = simpleHash(name);

    // Linear probing for collision
    while (hashTable[index] !== null) {
        index = (index + 1) % hashTable.length;
    }

    hashTable[index] = name;
    alert(`${name}, your hashed number is ${index + 1}`);
}

console.log("Initial Hash Table:", hashTable);

while (hashTable.some(entry => entry !== null)) {
    let number = prompt("Enter customer hashed number to be serviced:");
    let index = Number(number) - 1;
    if (index >= 0 && index < hashTable.length && hashTable[index]) {
        alert(`Now serving: ${hashTable[index]}`);
        hashTable[index] = null;
    } else {
        alert("Invalid or already serviced number.");
    }

    console.log("Updated Hash Table:", hashTable);
}
