/*select customer.first_name, customer.last_name, customer.email, address.address
from customer
left join address on customer.address_id = address.address_id
where address.city_id = 312;*/

/*
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre
from category
left join film_category on category.category_id = film_category.category_id
left join film on film_category.film_id = film.film_id
where category.name = 'Comedy';*/

/*
select film.film_id, film.title, film.description, film.release_year
from film
left join film_actor on film.film_id = film_actor.film_id
where film_actor.actor_id = 5;*/

/*
select store.store_id, city.city_id, customer.first_name, customer.last_name, customer.email, customer.address_id
from cities
left join city.city_id on store.store_id = customer.store_id
where store.store_id = 1
where city.city_id = 1,42,312,459;*/

/*select customer.first_name, customer.last_name, customer.email, address.address
from customer
left join address on customer.address_id = address.address_id
where customer.store_id = 1
and address.city_id in (1,42,312,459);*/

/*select film.title, film.description, film.release_year, film.rating, film.special_features 
from film
left join film_actor on film_actor.film_id = film.film_id
where film.rating = "G"
and film.special_features like '%Behind the Scenes%'
and actor_id = 15;*/

/*
select actor.first_name, actor.last_name, film.film_id, actor.actor_id 
from actor
left join film_actor on actor.actor_id = film_actor.actor_id
left join film on film.film_id = film_actor.film_id
where film_actor.film_id = 369;*/

/*
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre
from category
left join film_category on category.category_id
left join film on film_category.film_id = film.film_id
where film.rental_rate = '2.99'
and category.name = 'Drama';*/

/**/
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name as genre, actor.first_name, actor.last_name
from film
left join film_actor on film_actor.film_id = film.film_id
left join actor on actor.actor_id = film_actor.actor_id
left join film_category on film_category.film_id = film.film_id
left join category on category.category_id = film_category.category_id
where actor.first_name = 'Sandra'
and actor.last_name = 'Kilmer'
and category.name = 'Action';

