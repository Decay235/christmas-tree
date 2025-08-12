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
    
    // Top star and first star
    tree.push(' '.repeat(floors * 2) + 'W'); // 2 пробела для floors=1, 6 для floors=3
    tree.push(' '.repeat(floors * 2) + '*'); // 2 пробела для floors=1, 6 для floors=3
    
    // Tree floors
    for (let i = 0; i < floors; i++) {
        const spaces = floors - i + 2; // Пробелы: 3 для floors=1; 5, 4, 3 для floors=3
        const stars = i === floors - 1 && i > 1 ? 2 * i + 1 : 2 * i + 2; // Звёзды: 2 для floors=1; 2, 4, 5 для floors=3
        const hasLeftOrnament = i % 2 === 0;
        const hasRightOrnament = i % 2 === 1;
        
        let line = ' '.repeat(spaces);
        line += hasLeftOrnament ? '@' : '*';
        if (stars > 0) {
            line += ' *'.repeat(stars - 1); // Звёзды с пробелами
        }
        line += hasRightOrnament ? ' @' : ' *';
        tree.push(line);
    }
    
    // Tree trunk
    tree.push(' '.repeat(floors * 2) + 'TTTTT'); // 2 пробела для floors=1, 6 для floors=3
    tree.push(' '.repeat(floors * 2) + 'TTTTT');
    
    // Write to file
    fs.writeFileSync(outputPath, tree.join('\n') + '\n');
    
    return tree.join('\n');
}

module.exports = { generateChristmasTree };