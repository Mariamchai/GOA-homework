file = open("./file.txt","r")

text = file.readlines()
print(text)

for i in text:
    print(i)