#yes or no
print('Welcome to Quiz')
answer=input('Are you ready to play the Quiz ? (yes/no) :')
score=0
total_questions=3
 
if answer.lower()=='yes':
    answer=input('Question 1: What is most Favourite programming language?')
    if answer.lower()=='python':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :(')
 
 
    answer=input('Question 2: what is best programing academy? ')
    if answer.lower()=='goa':
        score += 1
        print('correct')
    else:
        print('Wrong Answer :( it was goa')
 
    answer=input('Question 3: What is the name of your favourite website for learning Python?')
    if answer.lower()=='sololearn':
        score += 1
        print('correct')
    else:
        print('Wrong Answer:( it was python')
print('Thankyou for Playing this small quiz game, you attempted',score,"questions correctly!")
mark=(score/total_questions)*100
print('Marks obtained:',mark)
print('thanks for playing ❤!')