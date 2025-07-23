def calculator(operator,num,num1):
    if operator == "+":
        return num+num1
    elif operator == "-":
        return num-num1
    elif operator== "*":
        return num*num1
    elif operator == "/" :        
        if num == 0:
            print("error")
        else:
            return num / num1
        