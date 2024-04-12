# Elasticsearch

## Elasticsearch Installation

```bash
wget -qO - https://artifacts.elastic.co/GPG-KEY-elasticsearch | sudo gpg --dearmor -o /usr/share/keyrings/elasticsearch-keyring.gpg
sudo apt-get install apt-transport-https
echo "deb [signed-by=/usr/share/keyrings/elasticsearch-keyring.gpg] https://artifacts.elastic.co/packages/8.x/apt stable main" | sudo tee /etc/apt/sources.list.d/elastic-8.x.list
sudo apt-get update && sudo apt-get install elasticsearch
```

## Start Elasticsearch

```bash
sudo systemctl start elasticsearch.service
```

## Verify Elasticsearch Is Installed Successfully

```bash
curl -X GET "localhost:9200/?pretty"
```

# Kibana Installation

```bash
sudo apt-get update && sudo apt-get install kibana
```

Uncomment __server.port: 5601__ in **/etc/kibana/kibana.yml**.

## Start Kibana

```bash
sudo systemctl start kibana.service
```

## Verify Kibana Is Installed Successfully

Navigate to **localhost:5601** in your web browser.
