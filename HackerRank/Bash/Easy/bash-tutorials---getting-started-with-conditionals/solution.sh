read -p 'Enter one character' ch

if [ "$ch" = "y" ] || [ "$ch" = "Y" ]
then
echo 'YES'
elif [ "$ch" = "n" ] || [ "$ch" = "N" ]
then
echo 'NO'
else
echo 'Envild character enter'
fi
