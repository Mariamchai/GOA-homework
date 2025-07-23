numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for i in numbers:
    if i%2 == 0:
        print(i*2)






num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
even_sum = 0  
odd_sum = 0
for number in num:
    if number % 2 == 0:
        even_sum += number
    else:  
        odd_sum += number
result = even_sum - odd_sum
print( result)