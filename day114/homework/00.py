numbers = {1, 2, 3, 4}

numbers.add(5)   
numbers.add(6)   
print("After adding:", numbers)

numbers.remove(1)  
numbers.remove(2)  
print("After removing:", numbers)

even_numbers = {2, 4, 6, 8}


print("Union:", numbers.union(even_numbers))


print("Intersection:", numbers.intersection(even_numbers))


print("Difference:", numbers.difference(even_numbers))


new_list = [num * 2 for num in numbers if num % 2 != 0]
print("List comprehension result:", new_list)