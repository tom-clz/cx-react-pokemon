Service de listing de pokemons
--------------------------------
Ce server permet de récupérer la liste des pokemons existants.
Le port de connection utyilise par le client est le port 8080, Pour demarrer le serveur sur un autre port
positioonner la variable d'environement PORT

API d'accès au server par URL:
------------------------
Recuperer tout les pokemons
============================

http://localhost:<PORT>/pokemons


Recuperer les pokemeons qui corespondent au filtre
==================================================

http://localhost:<PORT>/pokemons?filter=<STRING>

Recuperer les informations d'un pokemon par son identifiant
===========================================================
http://localhost:<PORT>/pokemons/<id>

