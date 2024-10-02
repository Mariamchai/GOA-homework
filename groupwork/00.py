#გამოცნობანა
import random
num = random.randrange(0,100)
guess=print("welcome to guess the number! all you have to do is to guess the number what i'm thinking. Some people took 3 guesses let's see how much you'll need")
while True != num:
    guess=int(input("guess the number:"))
    if guess > num:
        print("the number is lower")   
    elif guess<num:
        print("the number is higher")
    elif guess==num:
        print("congrats you got it right!")
        break

 
