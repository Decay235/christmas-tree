const fs = require('fs');

function generateChristmasTree(floors, outputPath) {
    // Input validation
    if (!Number.isInteger(floors) || floors < 1) {
        throw new Error('Number of floors must be a positive integer');
    }
    if (!outputPath || typeof outputPath !== 'string') {
        throw new Error('Output path must be a non-empty string');
    }

    const tree = [];
    
    // Top star
    tree.push(' '.repeat(floors * 2 + 1) + 'W');
    tree.push(' '.repeat(floors * 2 + 2) + '*');
    
    // Tree floors
    for (let i = 0; i < floors; i++) {
        const spaces = floors - i;
        const stars = 2 * i + 5;
        const hasLeftOrnament = i % 2 === 0;
        const hasRightOrnament = i % 2 === 1;
        
        let line = ' '.repeat(spaces);
        line += hasLeftOrnament ? '@' : '*';
        line += ' *'.repeat(stars - 1);
        line += hasRightOrnament ? '@' : '*';
        tree.push(line);
    }
    
    // Tree trunk
    tree.push(' '.repeat(floors + 2) + 'TTTTT');
    tree.push(' '.repeat(floors + 2) + 'TTTTT');
    
    // Write to file
    fs.writeFileSync(outputPath, tree.join('\n') + '\n');
    
    return tree.join('\n');
}

module.exports = { generateChristmasTree };