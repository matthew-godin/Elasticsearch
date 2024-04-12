GET /accounts/_search
{
  "query": {
      "multi_match": {
        "query": "adams burton",
        "fields": ["firstname", "lastname"]
      }
    }
}