const gameBoard = (function () {
    chooseTeam = () => {
        const chooseX = document.querySelector('#chooseX')
        const chooseO = document.querySelector('#chooseO')
        chooseX.addEventListener('click', () => {
            console.log('X')
            return team = 'X'  
        })
        chooseO.addEventListener('click', () => {
            console.log("O")
             return team = "O"
        })
    }
    squares = () => {
        
        let tiles = ["","","","","","","","",""]
        const eachSquare = document.querySelectorAll('.boardSquare')
        let gameBoard = Array.from(eachSquare)
        for (let i = 0; i < gameBoard.length; i++) {
            gameBoard[i].addEventListener('click', () => {
                console.log(i)
                gameBoard[i].textContent = team
                tiles.splice(i, 1 , team)
                console.log(tiles)
            })
        }
        
    checkIndex = (event) => {
        console.log(Array.from(event).indexOf(event,target))
    }
        
        /*eachSquare.forEach(square => {
            document.addEventListener('click', () => {
                square.textContent = 'O'
            } )
            
        })
        */
        return tiles, chooseTeam()
    }
    
    })()
squares()
