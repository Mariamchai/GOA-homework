import random 

name = input("What is your name? ")
print ("Hello, " + name, "Time to play hangman!  ")
word=("python", "html", "css", "javascript","rust")
WORD=random.choice(word)
turns = 10
guesses=""

while turns > 0:         

    
    failed = 0                   
    for char in WORD:      
        if char in guesses:    
            print (char,end=""),    
        else:
            print ("_",end= ""),     
            failed += 1    
    if failed == 0:        
        print ( " You won")
        break            
    guess = input("guess a character: " ) 

    guesses += guess                    

    if guess not in WORD:  
        turns -= 1        
        print ("Wrong")  
        print ("You have", + turns, 'more guesses' )
    if turns == 0:           
        print ("You Lose"  )

        