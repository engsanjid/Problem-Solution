read -p 'Enter 1st number' n1
read -p 'Enter 2nd number' n2
read -p 'Enter 4rd number' n3
if [ "$n1" -eq "$n2" ] && [ "$n2" -eq "$n3" ]
then 
    echo 'EQUILATERAL'
elif [ "$n1" -eq "$n2" ] || [ "$n1" -eq "$n3" ] || [ "$n2" -eq "$n3" ]
then
     echo 'ISOSCELES'
else
    echo 'SCALENE'
fi
