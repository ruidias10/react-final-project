#!/bin/bash

sudo DEBIAN_FRONTEND=noninteractive service mongod stop > /dev/null
echo " mongod stop"
sleep 5

sudo DEBIAN_FRONTEND=noninteractive service mongod start > /dev/null
echo " mongod start"
sleep 5

mongo admin <<EOF
  use admin;
  db.createUser({ 
    user: "admin", 
    pwd: "adminpassword", 
    roles: [{ 
      role: "userAdminAnyDatabase", 
      db: "admin" 
    }] 
  });
  exit;
EOF

echo " mongod add admin user"
sleep 5

mongo --port 27017 -u "admin" -p "adminpassword" --authenticationDatabase "admin" <<EOF
  use netflix;
  db.createUser({ 
    user: "youruser", 
    pwd: "yourpassword", 
    roles: [{ 
      role: "dbOwner", 
      db: "netflix" 
    }] 
  });
  exit;
EOF

echo " mongod add youruser user"

sudo DEBIAN_FRONTEND=noninteractive service mongod restart > /dev/null
echo " mongod restart"
sleep 5

echo " to connect mongo use: mongodb://youruser:yourpassword@localhost/netflix"

