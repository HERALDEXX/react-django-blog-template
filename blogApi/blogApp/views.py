from django.shortcuts import render
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import PostSerializer
from .models import Post

class PostModelViewSet(ModelViewSet):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    lookup_field = 'slug'

    @action(detail=False, methods=['get'])
    def recent(self, request):
        Posts = Post.objects.all()[:6]
        serializer=PostSerializer(Posts, many=True)
        return Response(serializer.data)