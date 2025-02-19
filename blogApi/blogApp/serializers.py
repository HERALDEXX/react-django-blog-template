from rest_framework import serializers
from .models import Post

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ["id", "title", "content", "slug", "created"]





# get_recent_blogs = http://127.0.0.1:8003/blogs/recent
# specific_blogs = http://127.0.0.1:8003/blogs/:slug