# VIN DECODER

Decodes an excel (.xlsx) spreadsheet containing vin numbers and their corresponding Kit Numbers.
the format of the spread sheet is two columns the first containing the vin numbers and the second containing the kit numbers desired to go with that vin.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Uploading to lightsail bitnami server

##1.- Create directories

For that, you should run the following commands:
```
sudo mkdir -p /opt/bitnami/apps/myapp
sudo mkdir /opt/bitnami/apps/myapp/conf
sudo mkdir /opt/bitnami/apps/myapp/htdocs
```
##2.- Create two files

For that, you can run the following commands:

touch /opt/bitnami/apps/myapp/conf/httpd-prefix.conf
touch /opt/bitnami/apps/myapp/conf/httpd-app.conf
##3.- Add content to the first file

You can edit the file using any text editor, for example nano
```
nano /opt/bitnami/apps/myapp/conf/httpd-prefix.conf
```
The above command opens the text editor, you should copy/paste or write the following line:
```
Include "/opt/bitnami/apps/myapp/conf/httpd-app.conf"
```
Close the editor using Ctrl+X(you will be prompted to save your file if you have not)

##4.- Add content to the second file

You can edit the file using any text editor, for example nano
```
nano /opt/bitnami/apps/myapp/conf/httpd-app.conf
```
The above command opens the text editor, you should copy/paste or write the following line:
```
ProxyPass / http://127.0.0.1:3000/
ProxyPassReverse / http://127.0.0.1:3000/
```
Close the editor using Ctrl+X(you will be prompted to save your file if you have not)

##5.- Edit Apache config file

Once you have created the files and directories above, add the following line to the end of the main Apache configuration file. Open the file (again using nano):
```
nano /opt/bitnami/apache2/conf/bitnami/bitnami-apps-prefix.conf
```
The above command opens the text editor, you should copy/paste or write the following line:
```
Include "/opt/bitnami/apps/myapp/conf/httpd-prefix.conf"
```
Close the editor using Ctrl+X(you will be prompted to save your file if you have not)

##5.5. - Middle step to download NPM package because server is linux
the app was created on windows therefore one npm package "sqlite" was not cross compatible and therefore needs to be installed on the server.

```
npm install sqlite

```

##6.- Restart apache

For that execute
```
sudo /opt/bitnami/ctlscript.sh restart apache
```
##7.- Start the Express server

```
Give the example
```
