import random

def ScoresNGrades():
    print "Scores and Grades"
    for i in range(1, 11):
        random_num = random.randint(60, 100)
        if random_num > 59 and random_num < 70:
            print "Score:", random_num, "; Your grade is D"
        if random_num > 69 and random_num < 80:
            print "Score:", random_num, "; Your grade is C"
        if random_num > 79 and random_num < 90:
            print "Score:", random_num, "; Your grade is B"
        if random_num > 89 and random_num < 101:
            print "Score:", random_num, "; Your grade is A"
    print "End of the program. Bye!"

ScoresNGrades()
