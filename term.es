GET /accounts/_search
{
  "query": {
    "term": {
      "lastname": {
        "value": "adams"
      }
    }
  }
}