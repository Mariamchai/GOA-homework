try:
    print(5/0)
except ZeroDivisionError:
    print("you cant divide by zero")

i=[1,2,3]
try:
    print(i[9])
except IndexError:
    print("use your head for once")
    