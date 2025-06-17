def multiply_by_two(numbers):
    new_list = []
    for num in numbers:
        new_list.append(num * 2)
    return new_list

print(multiply_by_two([1, 2, 3, 4]))  

numbers = []

for i in range(5):
    num = int(input("enter number: "))
    numbers.append(num)

numbers.reverse()
print(numbers)


def word_lengths(words):
    lengths = []
    for word in words:
        lengths.append(len(word))
    return lengths
print(word_lengths("apple",))  

students = []
for i in range(3):  
    name = input("name: ")
    grades = []

    for j in range(3):  
        grade = float(input(f"{name}-ს ქულა #{j+1}: "))
        grades.append(grade)

    avg = sum(grades) / len(grades)
    students.append((name, avg))
for student in students:
    print(f"{student[0]}  average {student[1]}")


def filter_long_words(words):
    new_list = []
    for word in words:
        if len(word) > 3:
            new_list.append(word)
    return new_list

print(filter_long_words(["cat", "book", "hi", "school"])) 