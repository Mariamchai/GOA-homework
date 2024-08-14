import random
num = random.randrange(0,100)
#guess=print("welcome to guess the number!")
while True != num:
    guess=int(input("guess the number:"))
    if guess > num:
        print("the number is lower")   
    elif guess<num:
        print("the number is higher")
    elif guess==num:
        print("congrats you got it right!")
    else:
        break


