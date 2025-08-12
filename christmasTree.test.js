const fs = require('fs');
const { generateChristmasTree } = require('./christmasTree');

describe('Christmas Tree Generator', () => {
    const testOutputPath = 'test_tree.txt';

    afterEach(() => {
        // Clean up test file
        if (fs.existsSync(testOutputPath)) {
            fs.unlinkSync(testOutputPath);
        }
    });

    test('should generate correct tree for 3 floors', () => {
        const expectedOutput = 
`      W
       *
     @* * * * *
   * * * * * * * * *@
 @ * * * * * * * * * * * *
    TTTTT
    TTTTT`;

        const result = generateChristmasTree(3, testOutputPath);
        
        expect(result).toBe(expectedOutput);
        expect(fs.readFileSync(testOutputPath, 'utf8')).toBe(expectedOutput + '\n');
    });

    test('should throw error for invalid floors', () => {
        expect(() => generateChristmasTree(0, testOutputPath)).toThrow('Number of floors must be a positive integer');
        expect(() => generateChristmasTree(-1, testOutputPath)).toThrow('Number of floors must be a positive integer');
        expect(() => generateChristmasTree(1.5, testOutputPath)).toThrow('Number of floors must be a positive integer');
    });

    test('should throw error for invalid output path', () => {
        expect(() => generateChristmasTree(3, '')).toThrow('Output path must be a non-empty string');
        expect(() => generateChristmasTree(3, null)).toThrow('Output path must be a non-empty string');
    });

    test('should generate correct tree for 1 floor', () => {
        const expectedOutput = 
`  W
   *
 @* * * * *
  TTTTT
  TTTTT`;

        const result = generateChristmasTree(1, testOutputPath);
        
        expect(result).toBe(expectedOutput);
        expect(fs.readFileSync(testOutputPath, 'utf8')).toBe(expectedOutput + '\n');
    });
});