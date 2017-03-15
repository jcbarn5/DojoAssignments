select contries.name, languages.language, languages.percentage
from contries
	join languages on contries.id = languages.country_id
where languages.language = 'Slovene'
order by languages.percentage desc;
