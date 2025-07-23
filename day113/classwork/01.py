vegetables = ("cucumber", "tomato", "broccoli", "carrot", "bell pepper")
print("Number of vegetables:", len(vegetables))

print(sorted(vegetables)) 


first, second, third, *rest = vegetables
print("First:", first)
print("Second:", second)
print("Third:", third)
print("Rest:", rest)  

#Tuples are used When data should not be changed because they are immutable