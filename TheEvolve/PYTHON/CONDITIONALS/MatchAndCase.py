day_no=int(input("Enter a day number:"))
match day_no:
    case 1:
        print("Monday")
        
    case 2:
        print("Tuesday")
        
    case 3:
        print("Wednesday")
        
    case 4:
        print("Thursday")
        
    case 5:
        print("Friday")
        
    case 6:
        print("Saturday")
        
    case 7:
        print("Sunday")
        
    case _:
        print("Invalid day number")
#only one case will match so there is no need for break statement
        