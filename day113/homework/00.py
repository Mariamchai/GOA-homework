def manual_index(lst, item):
    for i in range(len(lst)):
        if lst[i] == item:
            return i 
    return -1


def manual_count(lst, item):
    count = 0
    for element in lst:
        if element == item:
            count += 1
    return count  

fruits = ["apple", "banana", "apple", "orange", "banana"]
colors = ["red", "blue", "red", "green"]
numbers = [5, 3, 8, 1, 5, 3]


print(fruits.index("banana"))  

print(colors.count("red"))     

numbers.sort()                
print(numbers)

sorted_colors = sorted(colors) 
print(sorted_colors)
print(min(numbers))  
print(max(numbers))  

# ვქმნით სიას
my_list = [1, 2, 3, 4, 5]
print("Original list:", my_list)   # საწყისი სია

# სიას ვაქცევთ tuple-ად tuple() ფუნქციით
my_tuple = tuple(my_list)
print("Converted to tuple:", my_tuple)   # სია გარდაიქმნა tuple-ად

# tuple-ს ვაქცევთ ისევ list-ად list() ფუნქციით
new_list = list(my_tuple)
print("Converted back to list:", new_list)   # tuple კვლავ სიად გადაიქცა