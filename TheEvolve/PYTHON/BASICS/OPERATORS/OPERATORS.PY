#ARITHMETIC OPERATORS
a=10
b=49
print(a+b)

#Quotient operator
print(b//a)
# To reporesent infinity
pos_inf=float("inf")
print(pos_inf)
neg_inf=float("-inf")
print(neg_inf)
print(pos_inf>neg_inf)

#COMPARISON OPERATORS
print(a==b)
print(a>b)
print(a<b)
print(a!=b)

#ASSIGNMENT OPERATORS
a=10
b=49
b+=10
print(b)

#LOGICAL OPERATORS
#and
print(True and False)
print(False and True)
print(False and False)
print(True and True)

#or
print(True or False)
print(False or True)
print(True or True)
print(False or False)

#xor
print(True ^ False)
print(False ^ True)
print(False ^ False)
print(True ^ True)

#BITWISE OPERATORS

n=5
m=3
print(n & m)
print(n | m)

#URINARY OPERATORS

print(7 >> 1)

#IDENTITY OPERATORS

X=5
Y=5
print(X is Y)

#MEMBERSHIP OPERATORS
my_list=[1,2,3,4,5,6,7,8,9,0]
print(5 in my_list)
print(5 not  in my_list)