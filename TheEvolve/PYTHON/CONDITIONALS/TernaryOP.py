num=int(input("Enter number:"))
#without ternary operator
if num>=0:
    print("The number is positive")
else:
    print("The number is negative")
#with ternary operator
result ='positive' if num>=0 else 'negative'
print(result)