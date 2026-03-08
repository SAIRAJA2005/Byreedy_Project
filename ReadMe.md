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