#define a tuple
tup1=(3,4,5,6,7,8,9,10,11,12)
print(tup1)
print(type(tup1))
#tuple constructor method
t1=tuple(['a', 'b', 'c'])
print(t1)     
t2=tuple("RAHUL")
t3=tuple(t1)
print(t2,t3)
fruits=('apple', 'orange', 'apple', 'orange','mango', 'orange')
print(fruits.count('orange')) #counts no of oranges in the tuplw

#accessing elements of tuple

print(fruits[0])
print(fruits[-1])
print(fruits[1:4]) #slicing

#tuple is immutable, hence we cannot change its elements   
'''fruits[3]='jackfruit'   {gives error}
print(fruits)'''

