GET /accounts/_search
{
  "query": {
      "wildcard": {
        "lastname": {
          "value": "ad*"
        }
      }
    }
}