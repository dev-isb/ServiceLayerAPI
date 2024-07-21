
////////////////////// GEN NEW BASIC TOKEN /////////////////////////////////

In order to generate a new Basic Token.
go to the folder middleware -> file -> auth.js.
at the top you have an object by the name of systemCredentials it contains the usernam and the password.
you can change it to what ever you  like than generate a base64 toke with the new user name and password.
and that will be your new Basic token.


////////////////////// CREATE A NEW USER /////////////////////////////////////
go to the folder components -> Users 
there is a file there createNewUser open it change the name email and password to what ever you like and run the file
by going to the directory that contains the file cd to that directory and run command << node ./createNewUser.js >>
it will create new user.


////////////// ADD POST APIS TO CDR EVENT AND CEL EVENT //////////////////////
go to folder config open apiConfig either enable or disable cdr or cel from by setting true or false also 
set url's accordingly for cel and cdr after doing so restart the project.

//////////// HOW TO START THE PROJECT ///////////////////////////////////////
run command,
npm run start-gendoc
it will deploy the project along with the swagger documentaion on port 3000.

////////////  HOW TO CONFIGURE AMI PROJECT ////////////////////////////////
go to config folder open file amiConfig,
set the following values according to you ami configuration,
'port': 5069, 'host': "localhost", 'username': "asterisk", 'password': "asterisk" .
