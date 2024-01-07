# Create an emplty workspace

Run `ng new microFrontEnds --create-application false`

# Adding Angular Application
## Create shell application
Run `ng generate application shell --routing=true --style=scss` 
## Create football application
Run `ng generate application football --routing=true --style=scss`
## Create martial-arts application
Run `ng generate application martial-arts --routing=true --style=scss`
# Setup the host

Run `ng add @angular-architects/module-federation --project shell --port 5000` 

# Setup the Remote(s)

Run `ng add @angular-architects/module-federation --project football --port 3000` 
Run `ng add @angular-architects/module-federation --project martial-arts --port 4000` 

