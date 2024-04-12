GET /accounts/_search
{
  "query": {
      "match_phrase": {
        "address": "river street"
      }
    }
}