x=int(input("Enter a number:"))
if x>=5:
    print("X is greater than or equal to 5")
    if x%2==0:
        print("X is even")
    else:
        print("X is odd")
else:
    print("X is less than 5,so not calculating evemn ot odd")