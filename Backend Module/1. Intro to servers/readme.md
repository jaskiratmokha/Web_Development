# Introduction to Servers and HTTP
## what are servers ?
In computing, a server is a computer or computers that send data over a network. This data can be a website, a program or photo file, or even information about the weather for an app on your phone.

Servers listen for requests from clients, which are other computers or devices. When a server hears a request, it reads it and responds by sending data back to the client.

# response/request cycle in web

![response/request cycle in web](https://miro.medium.com/max/573/1*bx2bWzqeKCBndthiLGMK5g.png)

## what is HTTP?

HTTP refers to Hyper Text Transfer Protocol. These are nothing but certain rules/ protocols used to connect to Web servers on the Internet or on a local network (intranet). The primary function of HTTP is to establish a connection with the server and send HTML pages back to the user's browser. 


## what are IP Addresses ?

IP (Internet Protocol) addresses are used to identify hardware devices on a network. The addresses allow these devices to connect to one another and transfer data on a local network or over the internet.

Each address is a string of numbers separated by periods. There are four numbers in total and each number can range between 0 and 255. An example of an IP address would be: 506.457.14.512

We need billions of IP addresses to identify every computer, router and website on the internet. One day we’ll run out of unique addresses and a new IPv6 protocol has been designed to meet this need.

## What is LocalHost ?

When you call an IP address on your computer, you try to contact another computer on the internet but when you call the IP address 127.0.0.1 then you are communicating with the local host. Localhost is always your own computer. Your computer is talking to itself when you call the local host. Your computer does not always directly identify the local host. Within your personal network localhost has a separate IP address like 192.168.0.1. (for most cases) which is different from the one you use on the internet. This is usually dynamically assigned by the internet service provider (ISP). Localhost can be seen as a server that is used on your own computer. 

## What are port numbers ?

A port number is a way to identify a specific process to which an internet or other network message is to be forwarded when it arrives at a server. All network-connected devices come equipped with standardized ports that have an assigned number. These numbers are reserved for certain protocols and their associated function. Hypertext Transfer Protocol (HTTP) messages, for example, always go to port 80 -- one of the most commonly used ports.

