from django.db import models
from django.utils.text import slugify

class Post(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    slug = models.SlugField(unique=True, null=True, blank=True)
    created = models.DateTimeField(auto_now_add=True, null=True, blank=True)

    class Meta:
        ordering = ['-created']

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title)
            unique_slug = self.slug
            counter = 1
            while Post.objects.filter(slug=unique_slug).exists():
                unique_slug = f'{self.slug}-{counter}'
                counter += 1
            self.slug = unique_slug

        super().save(*args, **kwargs)            
