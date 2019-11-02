from rest_framework import serializers
from .models import Production, ProduceMusic, ProduceSports, ProduceMovies, ProduceGame


class ProductionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Production
        fields = "__all__"


class ProductionMusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProduceMusic
        fields = "__all__"


class ProductionSportsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProduceSports
        fields = "__all__"


class ProductionMoviesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProduceMovies
        fields = "__all__"


class ProductionGameSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProduceGame
        fields = "__all__"

