from django.contrib import admin
from .models import Production, ProduceMusic, ProduceSports, ProduceMovies, ProduceGame

admin.site.register(Production)
admin.site.register(ProduceMusic)
admin.site.register(ProduceSports)
admin.site.register(ProduceMovies)
admin.site.register(ProduceGame)
