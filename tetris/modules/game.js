export default class Game {
    level = 0;
    score = 0;
    lines = 0;
    playfield = [
        [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
        [0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
    activePiece = {
        x: 0,
        y: 0,
        blocks: [
            [0, 1, 0],
            [1, 1, 1],
            [0, 0, 0]
        ]
    };
    // nextPiece = this.createPiece();

    movePieceLeft() {
        this.activePiece.x -= 1;
        if (this.hasCollision()) {
            this.activePiece.x += 1;
        }
    }
    movePieceRight() {
        this.activePiece.x += 1;
        if (this.hasCollision()) {
            this.activePiece.x -= 1;
        }
    }
    movePieceDown() {
        this.activePiece.y += 1;
        if (this.hasCollision()) {
            this.activePiece.y -= 1;
            this.lockPiece();
        }
    }
    hasCollision() {
        const playfield = this.playfield;
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
                if (blocks[y][x] &&
                (playfield[pieceY + y] === undefined || playfield[pieceY + y][pieceX + x] === undefined ||
                  playfield[pieceY + y][pieceX + x])
                ) {
                    return true;
                }
            }
        }

        return false;
    }
    lockPiece() {
        const { y: pieceY, x: pieceX, blocks } = this.activePiece;

        for (let y = 0; y < blocks.length; y++) {
            for (let x = 0; x < blocks[y].length; x++) {
              if(blocks[y][x]) {
                this.playfield[pieceY + y][pieceX + x] = blocks[y][x];
              }
            }
        }
    }
    rotatePiece() {
        this.rotateBlocks();
        if(this.hasCollision()) {
            this.rotateBlocks(false);
        }
    }

    rotateBlocks(clockwise = true) {
        const blocks = this.activePiece.blocks;
        const length = blocks.length;
        const x = Math.floor(length / 2);
        const y = length - 1;

        for (let i = 0; i < blocks.length; i++) {
            for (let j = i; j < y - i; j++) {
                const temp = blocks[i][j];
                if(clockwise) {
                    blocks[i][j] = blocks[y- j][i];
                    blocks[y - j][i] = blocks[y- i][y - j];
                    blocks[y -i][y - j] = blocks[j][y - i];
                    blocks[j][y - i] = temp;
                } else {
                    blocks[i][j] = blocks[j][y - i];
                    blocks[j][y - i] = blocks[y- i][y - j];
                    blocks[y -i][y - j] = blocks[y - j][i];
                    blocks[y - j][i] = temp;
                }
            }
        }
    }











}