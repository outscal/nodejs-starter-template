# NodeJS-Starter-Template
A basic server setup. It can be used for any game server for multiplayer games.

## Installing Requirements
1 ) Install node.js from the link bellow

   https://nodejs.org/en/
   
2 ) clone this to a folder and open terminal or CMD in this folder.

3 ) int the terminal pate the cammand bellow
```
npm install
```
  this will istall all the required packages.
  
4 )To run the server paste the cammand bellow in the terminal
```
node server.js
```
5 )The port on which the server is running can be setup in ServerSettings.js file 
6 ) To find the ip address type the cammand bellow in terminal or CMD

macOS:
```
ifconfig
```
windows:
```
ipconfig
```
Make sure that your devices accessing the server should be connected to the same wifi to which your local host(machine running server) is connected.
the address for the client to connect will be example: 192.168.43.2:8182

## Deploying The Server Online
1 ) To Deploy the server you need to decide first which services to use :
    you can deploy your server on AWS EC2 service
    or
    it can also be deployed on Digital Ocean.
Follow the links below for deploying the server online
 AWS: https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html
 Digital Ocean:https://www.digitalocean.com/docs/droplets/

