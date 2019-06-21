# run in local
```
## start 
npm run start
## init database
npm run initDockerDB
```
# Jenkins
```
git --version
docker -v
docker-compose -v
cd /var/jenkins_home/workspace
## git clone https://username:password@github.com/garysdevil/Location_backend.git
cd Location_backend
docker-compose stop
docker-compose -f ./docker-compose-pro.yml up -d
```
## when it run firstly
```
docker exec -i postgres psql postgres://gary:garysdevil@127.0.0.1:5432/gary < ./dao/initDB.sql
```