hi=lambda num, num1 : num+ num1
print(hi(1,2))



numbers=[1,2,3,4,5]
i=map(lambda num : num*num, numbers)
print(list(i))

nums = [1, 2, 3, 4, 5, 6]
odd=filter(lambda num : num % 2 !=0, nums)
print(list(odd))

add=map(lambda num: num+10, nums)
print(list(add))

def check_age(age):
    if age < 0:
        raise ValueError("bro...")
    return "ok"