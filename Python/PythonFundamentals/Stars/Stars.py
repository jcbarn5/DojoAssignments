# x = [4, 6, 1, 3, 5, 7, 25]

def draw_stars(arr):
    for i in arr:
        stars = "*"*i
        print stars
draw_stars([4, 6, 1, 3, 5, 7, 25])

##############################

# x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def draw_stars(arr):
    for i in arr:
        if type(i) == int:
            stars = "*"*i
            print stars
        else:
            i = i.lower()
            stars = i[0]*len(i)
            print stars


draw_stars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"])
