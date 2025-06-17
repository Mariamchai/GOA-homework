def i (a,b):
    print(a, b)
i("mary","chaidze")
def g (a):
    print(a[2]+a[3])
hi=[1,2,3,4,5]
g(hi)
def calcu(km):
    print(km)
    m=km*1000
    print(m)
    return m
calcu(7)

def sum(num1,num2):
    addition=num1+num2
    print (addition)
    return addition
sum(1,2)
def palidrome(word):
    if word == word[::1]:
        print(True)
    else:
        print(False)
palidrome("hannah")
