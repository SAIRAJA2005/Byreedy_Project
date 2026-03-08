### Final Architecture

```

                 IoC Container
                       │
                       ▼
                NewsAggregator
             ┌────────┼────────┐
             ▼        ▼        ▼
         NewsSources Logger   Cache
         │       │
         ▼       ▼
     RSSFeed  APISource
```


# How to run 

### To initialize the dependies
    npm init -y
   
### To start the project
    npm start