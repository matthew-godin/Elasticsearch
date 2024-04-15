GET /accounts/_search
{
  "query": {
      "bool": {
        "must": {
            "term": {"address": "street}
        }
      }
    }
}