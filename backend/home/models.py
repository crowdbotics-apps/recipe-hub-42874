from django.conf import settings
from django.db import models
class UserRecipe(models.Model):
    'Generated Model'
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,related_name="userrecipe_user",)
    title = models.CharField(max_length=255,)
    ingredients = models.CharField(max_length=255,)
    time_consume = models.TimeField()
    steps = models.TextField()
    image = models.ImageField(upload_to="userrecipe/image/images/",)
