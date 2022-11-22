project=agenda

up:
	docker-compose -f docker-compose.yml -p  $(project) up -d

down:
	docker-compose -f docker-compose.yml -p  $(project) down --remove-orphans

logs:
	docker-compose -f docker-compose.yml logs -f  


build-back:
	docker build -t symonnascimento/api_agenda:1.0 ../
