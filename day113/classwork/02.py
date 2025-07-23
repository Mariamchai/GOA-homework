set1 = {0,1,2,3,4}
set2 = {2,3,4,5,6}
set1.add(-1)
set1.remove(0)
set2.add(7)
set2.remove(6)
print(set1.union(set2))
print(set1.intersection(set2))
print(set1.difference(set2))

# A list is a collection that is ordered and mutable
my_list = list(["apple", "banana", "cherry", "banana"])

print("List:", my_list)

# A tuple is a collection that is ordered and immutable 
my_tuple = tuple(("apple", "banana", "cherry", "banana"))
print("Tuple:", my_tuple)

# A set is a collection that is unordered and contains unique elements
my_set = set(["apple", "banana", "cherry", "banana"])
print("Set:", my_set)

