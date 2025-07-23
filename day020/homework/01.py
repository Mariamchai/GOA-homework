vending_machine=["pepsi","cola","sprite"]
hi=int(input("pick a number to get a drint pepsi=0 cola=1 sprite=2 : "))
if hi==0:
    print(vending_machine[0])
elif hi ==1:
    print(vending_machine[1])
elif hi ==2:
    print(vending_machine[2])
else:
    print("that number isn't in the list")