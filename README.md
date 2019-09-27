# zpr-finances - Notes


## Front-end (frontend/)
1. This following is the blog used to create the React App from scratch
`https://blog.usejournal.com/creating-a-react-app-from-scraffffffffffftch-f3c693b8465`
2. The following is the repository that goes with the blog
`https://github.com/paradoxinversion/creating-a-react-app-from-scratch`


## Back-end (api/)

1. Following tutorial was used to come up with initial REST api
`https://codebrains.io/build-a-crud-todolist-api-with-spring-5-and-kotlin/`

2. Postgres was installed separately (from `postgres.org`)

    - Install using brew

    `brew install postgresql`

    - Start postgres locally

    `brew services start postgresql`
    
    - WHAT ZACH DID LOCALLY
    
    - In one terminal
    
    `psql postgres`
    
    - To see what your root user is
        
    `\du`
    
    - In another terminal
    
    `sudo su - postgres` I THINK
    
    `createuser --interactive --pwprompt`
    
    - Say yes to superuser and just do `user` for the user name and `123456` for password
    
    - Add user to DB
    
    `createdb -O user zprfinance`

3. The flyway tool was used for data migration

- to migrate 

`./gradlew flywaymigrate -i` I THINK

