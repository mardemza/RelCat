#Para crear un nuevo repositorio en la línea de comando\

echo "# RelCat" >> README.md\
git init\
git add README.md\
git commit -m "first commit"\
git remote add origin\ https://github.com/mardemza/RelCat.git
git push -u origin master


#Subir un repositorio existente desde la línea de comando

git remote add origin https://github.com/mardemza/RelCat.git\
git push -u origin master