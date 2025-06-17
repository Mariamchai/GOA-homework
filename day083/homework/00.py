first_index = int(input("enter first number: "))
second_index = int(input("enter second number: "))
name = input("enter name: ")

sliced_name = name[first_index:second_index]

print("sliced part:", sliced_name)