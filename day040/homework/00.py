food=["chips","pepsi","fanta"]
def vending_machine(products):
    ask=int(input("pick a number: "))
    if -4> ask <3 :
        print("type something else")
    else:
        print(products[ask])


vending_machine(food)
    
