from django.db import models

# Create your models here.
class Quote(models.Model):
    quote = models.TextField(max_length=2000)
    author = models.CharField(max_length=200)
    source = models.CharField(max_length=200)

    def __str__(self):
      return self.quote
