name='Rahul'
city="Bhubaneswar"
message='''hi!
im rahul
from bbs.'''
print(name)
print(city)
print(message)
print(city[3]); #just like array/list
#   print(city[15]); out of range error
print(city[-3]);
#concatenation of strings:
first_name='Rahul';
last_name='Sinha';
complete_name=first_name+' '+last_name
print(complete_name)
print(len(complete_name))
# string slicing:
str='Rahul Sinha';
print(str[3:6])
str1='     Rahul';
print(str1.strip())
str2="Hello friends, i am the king, i am the supreme, i am the master"
print(str2.replace('i am','we are'))
# how many times should replacement happens can be controlled.
print(str2.replace('i am','we are',2))
print("Please \"help\"")
