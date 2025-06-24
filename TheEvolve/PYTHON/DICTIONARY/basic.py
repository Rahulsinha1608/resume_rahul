student_details={'name': 'Rahul', 'email': 'rahul@gmail.com'}
print(student_details)
print(type(student_details))
dict1={1:"Rahul",2:"Sinha",True:"Rishu"}
#1=TRUE, SO THAT WAS THE OUTPUT
print(dict1)
# dictionary constructor method
dict2=dict( name ='Rishu',study ='Student')
print(dict2)

# accessing values from dictionary

print(student_details['name'])
print(dict2['study'])

# updating dictionary

student_details['name']='Rahul Sinha'
print(student_details)
print(student_details.keys())
#adding into dictionary
student_details['work']="studying"
print(student_details)
marks={'English':100,'History':92}
student_details.update(marks)
print(student_details)

# deleting from dictionary
student_details.pop('work')
print(student_details)
